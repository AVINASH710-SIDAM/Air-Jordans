import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Jordan from './Jordan'
import { Environment, OrbitControls } from '@react-three/drei'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Loading from './Loading'
gsap.registerPlugin(ScrollTrigger);
const CanavasContainer = () => {

  return (
    
     <Canvas camera={{position:[4.7, 2.2, 1.2]}}>
      {/* <ambientLight /> */}
      <OrbitControls enableZoom={false}/>
      <Suspense fallback={<Loading/>}>
      <Jordan/>
      </Suspense>
       
       <Environment preset='city'/>
       
     </Canvas>
  
  )
}

export default CanavasContainer
