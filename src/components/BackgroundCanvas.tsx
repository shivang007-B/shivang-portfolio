"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const StarLayer = () => {
    const starsRef = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (starsRef.current) {
            starsRef.current.rotation.y -= delta * 0.02;
            starsRef.current.rotation.x -= delta * 0.01;
        }
    });

    return (
        <group ref={starsRef}>
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
        </group>
    );
};

export default function BackgroundCanvas() {
    return (
        <div className="fixed inset-0 z-[-100] w-full h-full pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <color attach="background" args={["#0a0a0a"]} />
                <StarLayer />
            </Canvas>
        </div>
    );
}
