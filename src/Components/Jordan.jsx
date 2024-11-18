import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useLayoutEffect } from 'react'
import { JordanGLTF } from '../JordanGLTF';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useControls } from "leva";
const Jordan = () => {
    const {nodes,materials} = useGLTF("/air_jordan_1.glb");
    //const model = useGLTF('/air_jordan_1.glb');
     const {scene,camera} =useThree();
     //console.log(model);
    //  console.log(camera.rotation)
    //  console.log("camrea position",camera.position);
     const tl=gsap.timeline();
    // const { cameraPosition, scenePosition, sceneRotation } = useControls({
    //     	cameraPosition: {
    //     		value: {
    //     			x: 0,
    //     			y: 0,
    //     			z: 0,
    //     		},
    //     		step: 0.05,
    //     	},
    //     	scenePosition: {
    //     		value: { x: 0, y: 0, z: 0 },
    //     		step: 0.05,
    //     	},
      
    //     	sceneRotation: {
    //     		value: { x: 0, y: 0, z: 0 },
    //     		step: 0.01,
    //     	},
    //     });
    //     useFrame(() => {
    //     	camera.position.x = cameraPosition.x;
    //     	camera.position.y = cameraPosition.y;
    //     	camera.position.z = cameraPosition.z;
    //     	scene.position.x = scenePosition.x;
    //     	scene.position.y = scenePosition.y;
    //     	scene.position.z = scenePosition.z;
    //     	scene.rotation.x = sceneRotation.x;
    //     	scene.rotation.y = sceneRotation.y;
    //     	scene.rotation.z = sceneRotation.z;
    //     });



    useLayoutEffect(()=>{

      
        
         tl.to(camera.position,{
            x:5,
            y:4.0,
            z:2.8,
            scrollTrigger:{
                trigger:".second-section",
                start:"top bottom",
                end:"top top",
                scrub:true,
                immediateRender:false,
                // markers:true
            }
         })
         .to(scene.position,{
             x:3.01,
            //x:-1.00,
            y:0.76,
            z:3.7,
            scrollTrigger:{
                trigger:".second-section",
                start:"top 70%",
                end:"top top",
                scrub:true,
                immediateRender:false,
                // markers:true
            }
         })
         .to(scene.rotation,{
            x:-0.53,
            y:-3.48,
            z:-0.21,
            scrollTrigger:{
                trigger:".second-section",
                start:"top bottom",
                end:"top top",
                scrub:true,
                immediateRender:false
            }
         })

         tl.to(camera.position,{
             x: 5,
             y: 3.8,
             z: 2.8,
            // duration:2,
            scrollTrigger:{
                trigger:".third-section",
                start:"top bottom",
                end:"10% 50%",
                scrub:true,
                immediateRender:false,
                // markers:true
            }
         })
         .to(scene.position,{
            x: 2.31,
           //x:-2.31,
            y: -0.01,
            z: -0.7,
            //duration:2,
            scrollTrigger:{
                trigger:".third-section",
                start:"top 60%",
                end:"top 55%",
                scrub:true,
                immediateRender:false,
                // markers:true
            }
         })
         .to(scene.rotation,{
            x: 0.67,
            y: -6.9,
            z: 0.79,
           // duration:2,
            scrollTrigger:{
                trigger:".third-section",
                start:"top 60%",
                end:"30% 50%",
                scrub:true,
                immediateRender:false
            }
         })
    },[])

  return <>
         <directionalLight castShadow position={[-2.38,1.32,0.74]}/>
         <group scale={10} position={[2,1,-1]} rotation-x={[-Math.PI * 0.5]}>
            <mesh geometry={nodes.shoe_shoe_0.geometry} material={materials.shoe}/>
            <mesh geometry={nodes.shoelace_shoelace_0.geometry} material={materials.shoelace}/>
         </group>
  </>
}

export default Jordan;
