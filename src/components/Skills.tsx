"use client";
import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, Float, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const SKILLS = [
    { name: "React", color: "#61DAFB", glowColor: "#61DAFB" },
    { name: "Next.js", color: "#e2e8f0", glowColor: "#e2e8f0" },
    { name: "TypeScript", color: "#60a5fa", glowColor: "#3178C6" },
    { name: "Node.js", color: "#4ade80", glowColor: "#339933" },
    { name: "Python", color: "#7dd3fc", glowColor: "#3776AB" },
    { name: "Web Design", color: "#00f0ff", glowColor: "#00f0ff" },
    { name: "AI / ML", color: "#c084fc", glowColor: "#B200FF" },
    { name: "Tailwind", color: "#22d3ee", glowColor: "#06B6D4" },
    { name: "MongoDB", color: "#4ade80", glowColor: "#47A248" },
    { name: "Figma", color: "#fb923c", glowColor: "#F24E1E" },
];

// Orbits — tiltX kept small so labels stay in the middle/lower zone
// and never drift up into the header text
const ORBITS = [
    { radius: 6.5, tiltX: 0.15, tiltZ: 0.0, speed: 0.22 },
    { radius: 7.2, tiltX: 0.20, tiltZ: 0.2, speed: 0.18 },
    { radius: 6.8, tiltX: -0.15, tiltZ: 0.1, speed: 0.25 },
    { radius: 7.8, tiltX: 0.10, tiltZ: -0.25, speed: 0.16 },
    { radius: 7.0, tiltX: 0.25, tiltZ: 0.3, speed: 0.21 },
    { radius: 8.2, tiltX: -0.10, tiltZ: 0.2, speed: 0.19 },
    { radius: 6.3, tiltX: 0.18, tiltZ: -0.2, speed: 0.24 },
    { radius: 7.5, tiltX: -0.20, tiltZ: -0.1, speed: 0.17 },
    { radius: 8.5, tiltX: 0.08, tiltZ: 0.25, speed: 0.20 },
    { radius: 7.0, tiltX: -0.12, tiltZ: -0.3, speed: 0.23 },
];

/* ── BRAIN CORE ─────────────────────────────────────────────────────── */
function BrainCore() {
    const coreRef = useRef<THREE.Mesh>(null!);
    const wire1Ref = useRef<THREE.Mesh>(null!);
    const wire2Ref = useRef<THREE.Mesh>(null!);
    const synapseRef = useRef<THREE.Group>(null!);

    const synapseGeos = useMemo(() => {
        const colors = ["#00D1FF", "#a855f7", "#38bdf8", "#00ffaa", "#B200FF"];
        return Array.from({ length: 32 }, (_, i) => {
            const spherePt = (r: number) => {
                const phi = Math.acos(2 * Math.random() - 1);
                const theta = Math.random() * Math.PI * 2;
                return new THREE.Vector3(
                    r * Math.sin(phi) * Math.cos(theta),
                    r * Math.cos(phi),
                    r * Math.sin(phi) * Math.sin(theta)
                );
            };
            const p1 = spherePt(1.15);
            const p2 = spherePt(1.15);
            const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
            mid.normalize().multiplyScalar(1.55 + Math.random() * 0.4);
            const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
            const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(20));
            return { geo, color: colors[i % colors.length] };
        });
    }, []);

    const nodePositions = useMemo(() =>
        Array.from({ length: 48 }, () => {
            const phi = Math.acos(2 * Math.random() - 1);
            const theta = Math.random() * Math.PI * 2;
            const r = 1.18 + Math.random() * 0.06;
            return new THREE.Vector3(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.cos(phi),
                r * Math.sin(phi) * Math.sin(theta)
            );
        }), []);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const ry = t * 0.13;
        const rx = Math.sin(t * 0.22) * 0.14;
        for (const r of [coreRef, wire1Ref, wire2Ref, synapseRef]) {
            if (r.current) { r.current.rotation.y = ry; r.current.rotation.x = rx; }
        }
    });

    return (
        <>
            <mesh ref={coreRef}>
                <sphereGeometry args={[1.15, 64, 64]} />
                <meshStandardMaterial
                    color="#001525" emissive="#00D1FF" emissiveIntensity={0.4}
                    transparent opacity={0.88} roughness={0.2} metalness={0.75}
                />
            </mesh>
            <mesh ref={wire1Ref}>
                <sphereGeometry args={[1.23, 16, 10]} />
                <meshBasicMaterial color="#00D1FF" wireframe transparent opacity={0.15} />
            </mesh>
            <mesh ref={wire2Ref}>
                <sphereGeometry args={[1.10, 28, 18]} />
                <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.09} />
            </mesh>
            <group ref={synapseRef}>
                {synapseGeos.map(({ geo, color }, i) => (
                    // @ts-ignore - React Three Fiber <line> conflicts with SVG <line>
                    <line key={i} geometry={geo}>
                        <lineBasicMaterial color={color} transparent opacity={0.42} />
                    </line>
                ))}
                {nodePositions.map((pos, i) => (
                    <mesh key={i} position={pos}>
                        <sphereGeometry args={[0.026, 6, 6]} />
                        <meshBasicMaterial color={i % 3 === 0 ? "#00D1FF" : i % 3 === 1 ? "#a855f7" : "#00ffaa"} />
                    </mesh>
                ))}
            </group>
            <pointLight intensity={14} color="#00D1FF" distance={20} />
            <pointLight intensity={7} color="#a855f7" distance={14} position={[0, 2, 0]} />
        </>
    );
}

/* ── SKILL LABEL WITH GLOW PILL ─────────────────────────────────────── */
function SkillLabel({ skill, orbit, offset }: {
    skill: typeof SKILLS[0];
    orbit: typeof ORBITS[0];
    offset: number;
}) {
    const groupRef = useRef<THREE.Group>(null!);
    const { camera } = useThree();

    // Pre-compute tilt matrix for this orbit's plane
    const tiltMatrix = useMemo(() => {
        const m = new THREE.Matrix4();
        m.makeRotationX(orbit.tiltX);
        const mz = new THREE.Matrix4().makeRotationZ(orbit.tiltZ);
        m.multiply(mz);
        return m;
    }, [orbit.tiltX, orbit.tiltZ]);

    useFrame(({ clock }) => {
        if (!groupRef.current) return;
        const t = clock.getElapsedTime() * orbit.speed + offset;
        const pos = new THREE.Vector3(
            Math.cos(t) * orbit.radius,
            0,
            Math.sin(t) * orbit.radius
        ).applyMatrix4(tiltMatrix);
        // Clamp Y so labels never fly too high (into header) or too low
        pos.y = Math.max(-3.5, Math.min(2.0, pos.y));
        groupRef.current.position.copy(pos);
        groupRef.current.lookAt(camera.position);
    });

    const textLen = skill.name.length;
    const pillW = 0.28 + textLen * 0.18;
    const pillH = 0.52;

    return (
        <group ref={groupRef}>
            {/* Glow backing plane */}
            <mesh position={[0, 0, -0.05]}>
                <planeGeometry args={[pillW + 0.3, pillH + 0.2]} />
                <meshBasicMaterial color={skill.glowColor} transparent opacity={0.08} />
            </mesh>
            {/* Pill border */}
            <mesh position={[0, 0, -0.03]}>
                <planeGeometry args={[pillW + 0.12, pillH + 0.06]} />
                <meshBasicMaterial color={skill.glowColor} transparent opacity={0.22} />
            </mesh>

            {/* Main label */}
            <Text
                fontSize={0.52}
                color={skill.color}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.018}
                outlineColor="#000000"
                outlineOpacity={0.9}
            >
                {skill.name}
            </Text>
        </group>
    );
}

/* ── SCENE ──────────────────────────────────────────────────────────── */
function Scene() {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.035;
            groupRef.current.position.y = -2.5; // push entire scene down below header
        }
    });

    return (
        <group ref={groupRef}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <BrainCore />
            {SKILLS.map((skill, i) => (
                <SkillLabel
                    key={skill.name}
                    skill={skill}
                    orbit={ORBITS[i]}
                    offset={i * ((Math.PI * 2) / SKILLS.length)}
                />
            ))}
        </group>
    );
}

/* ── PAGE ───────────────────────────────────────────────────────────── */
export default function Skills() {
    return (
        <section id="skills" className="relative w-full h-screen overflow-hidden" style={{ background: "#000000" }}>

            {/* Cyber grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }}
                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                    <pattern id="skillgrid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1d3a5e" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#skillgrid)" />
            </svg>

            {/* Header */}
            <div className="absolute top-14 w-full z-10 pointer-events-none text-center px-6">
                <motion.p
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[11px] font-bold tracking-[0.35em] uppercase font-mono mb-3"
                    style={{ color: "#60a5fa" }}
                >
                    ── Neural Ecosystem
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="font-black tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.6rem, 6vw, 5rem)", lineHeight: 1.05 }}
                >
                    <span style={{
                        background: "linear-gradient(135deg, #e2e8f0 0%, #60a5fa 100%)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        backgroundClip: "text", display: "inline-block",
                    }}>Tech</span>{" "}
                    <span className="italic" style={{
                        background: "linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        backgroundClip: "text", display: "inline-block",
                    }}>Universe</span>
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="w-20 h-[2px] mt-4 rounded-full mx-auto"
                    style={{ originX: 0.5, background: "linear-gradient(90deg, #60a5fa, #a855f7)" }}
                />

                <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-3 text-[11px] font-mono tracking-[0.28em] uppercase"
                    style={{ color: "#22d3ee55" }}
                >
                    The Neural Ecosystem of Shivang Singhal
                </motion.p>
            </div>

            {/* Canvas */}
           <Canvas
              className="absolute inset-0"
              camera={{ position: [0, 6, 24], fov: 44 }}
  // ADD THIS: Limits resolution on mobile to save GPU
              dpr={[1, 2]} 
              gl={{ antialias: false, powerPreference: "high-performance" }}
            >
                <color attach="background" args={["#000000"]} />
                <fog attach="fog" args={["#000000", 18, 60]} />
                <ambientLight intensity={0.18} />
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>

            {/* Bottom badge */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center gap-2"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase" style={{ color: "#22d3ee70" }}>
                    Neural Core Active
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </motion.div>

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none z-[1]"
                style={{ boxShadow: "inset 0 0 200px rgba(0,0,0,0.85)" }} />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
            `}</style>
        </section>
    );
}
