'use client'

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import styled from "styled-components";
import { Suspense, useRef, useContext } from "react";
import { Loader } from "@/components/atoms/Loader";
import { BallContext } from "@/context";

const ThreeDimentionContainerRenderer = styled.div`
  height: 50vh;
  width: 50vw;
  background-color: transparent;
`
export const Object3DRenderer = ({children}) => {
    const ref = useRef()
    const { ball } = useContext(BallContext)
    const { autoRotate } = ball
  return (
    <ThreeDimentionContainerRenderer>
        <Canvas dpr={[1, 10]} camera={{ fov: 1 }}>
        <Suspense fallback={<Loader/>}>
            <Stage controls={ref} 
            adjustCamera 
            preset="upfront" intensity={10}  
            environment="city">
                {children}
            </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate={autoRotate} autoRotateSpeed={6}/>
        </Canvas>
    </ThreeDimentionContainerRenderer>
  )
}
