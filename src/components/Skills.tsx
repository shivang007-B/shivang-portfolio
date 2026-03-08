"use client";
import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, Float, Stars, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const SKILLS = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#ffffff" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "web designing", color: "#00f0ff" },
    { name: "AI/ML", color: "#B200FF" },
    { name: "Tailwind", color: "#06B6D4" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Figma", color: "#F24E1E" },
];

function OrbitingSkill({ name, color, radius, speed, offset }: any) {
    const ref = useRef<THREE.Group>(null!);
    const { camera } = useThree();

    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.getElapsedTime() * speed + offset;
        const x = Math.cos(t) * radius;
        const z = Math.sin(t) * radius;
        const y = Math.sin(t * 0.5) * 2; // Subtle vertical wave
        ref.current.position.set(x, y, z);

        // Smoothly point at camera
        ref.current.lookAt(camera.position);
    });

    return (
        <group ref={ref}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Text
                    fontSize={0.8}
                    color={color}
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000"
                >
                    {name}
                </Text>
            </Float>
        </group>
    );
}

function CentralCore() {
    return (
        <mesh>
            <sphereGeometry args={[1.2, 64, 64]} />
            <MeshDistortMaterial
                color="#00D1FF"
                speed={3}
                distort={0.4}
                radius={1}
                emissive="#00D1FF"
                emissiveIntensity={2}
            />
        </mesh>
    );
}

function Scene() {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        // Subtle rotation of the entire universe
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <CentralCore />
            <pointLight intensity={10} color="#00D1FF" distance={20} />

            {SKILLS.map((skill, i) => (
                <OrbitingSkill
                    key={skill.name}
                    name={skill.name}
                    color={skill.color}
                    radius={7 + i * 0.8} // Spiraling out
                    speed={0.2 + Math.random() * 0.2}
                    offset={i * (Math.PI * 2 / SKILLS.length)}
                />
            ))}
        </group>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden">
            {/* Overlay UI */}
            <div className="absolute top-20 w-full z-10 pointer-events-none text-center">
                <motion.h2
                    initial={{ opacity: 0, letterSpacing: "-0.05em" }}
                    whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-space font-bold text-white uppercase"
                >
                    Tech Universe
                </motion.h2>
                <p className="text-cyan-400 font-inter tracking-[0.3em] uppercase text-sm mt-4 opacity-70">
                    The Neural Ecosystem of Shivang Singhal
                </p>
            </div>

            <Canvas camera={{ position: [0, 10, 20], fov: 45 }}>
                <color attach="background" args={["#0A0A0A"]} />
                <fog attach="fog" args={["#0A0A0A", 10, 50]} />
                <ambientLight intensity={0.2} />
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>

            {/* Cinematic Glass Vignette */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
        </section>
    );
}