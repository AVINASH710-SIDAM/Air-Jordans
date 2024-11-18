import { Canvas, useLoader } from '@react-three/fiber';
import {  Environment, Html, OrbitControls } from '@react-three/drei';
import React from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import '../style/View3d.css'
import { Link } from 'react-router-dom';

// import { label } from 'three/webgpu';
const View3D = () => {
 

  const gltf = useLoader(GLTFLoader,'/air_jordan_1.glb');
   console.log(gltf);

   const Animation=({position,label})=>(
      <Html position={position} transform occlude distanceFactor={7}>
        <div className='lable'>
         {label}
        </div>

      </Html>
    
   )
   
  
  return (<>
  
    <Canvas
      className="fullscreen-canvas"
      style={{ width: '100vw', height: '100vh'}}
       camera={{position:[-0.2,1.6,5]}}
      >
        {/* <GizmoHelper>
          <GizmoViewport />
        </GizmoHelper> */}
      <OrbitControls enableZoom={true} autoRotate/>
      <directionalLight position={[-2.38,1.32,0.74]} intensity={1}/>
      
     
      <primitive object={gltf.scene} position={[0, 0, 0]} scale={0.15}  />
     
      <Environment preset='sunset'  />
     
      <Animation position={[0.75,1.75,0]} label="lace"/>
      <Animation position={[-2.1,1.4,-1]}label="logo"/>
      {/* <axesHelper args={[5]}/> */}
    </Canvas>
    <Link to={'/'}>
    <button className='exit-button'>
          Exit
    </button>
    </Link>
    
        
    </>
  );
};

export default View3D;

