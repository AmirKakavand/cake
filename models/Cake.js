// import { useState } from "react";
// import { useLoader, useThree, useFrame } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const Cake = ({position}) => {
//   const [width, setWidth] = useState(1);
//   const [height, setHeight] = useState(1);

//   useFrame((state) => {
//     const currentWidth = state.viewport.width;
//     const currentHeight = state.viewport.height;
//     if (width !== currentWidth) {
//       setWidth(currentWidth);
//     }
//     if (height !== currentHeight) {
//       setHeight(currentHeight);
//     }
//   });

//   let domain = "";
//   process.env.NODE_ENV === "development"
//     ? (domain = "http://localhost:3000")
//     : (domain = "");
//   const gltf = useLoader(GLTFLoader, "/cake.glb");

//   console.log(gltf);
//   const cake = gltf.scene.children[0];
//   return <primitive object={cake} position={position} scale={[5,5,5]} />;
// };

// export default Cake;


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Cake = (props) => {
  const { nodes, materials } = useGLTF('/cake.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cup.geometry} material={materials.CupMat}>
        <mesh geometry={nodes.Cake.geometry} material={materials.CakeMat} />
        <mesh geometry={nodes.Candle.geometry} material={materials.CandleMat} position={[0, 0.08, 0]} />
        <mesh geometry={nodes.Chocoball4.geometry} material={materials.ChocoballMat} position={[-0.05, 0.04, -0.01]} />
        <mesh geometry={nodes.Chocoball5.geometry} material={materials.ChocoballMat} position={[-0.01, 0.05, -0.04]} />
        <mesh geometry={nodes.Chocoball6.geometry} material={materials.ChocoballMat} position={[-0.03, 0.05, 0.02]} />
        <mesh geometry={nodes.Chocoball7.geometry} material={materials.ChocoballMat} position={[0.02, 0.06, -0.01]} />
        <mesh geometry={nodes.Chocolate_Sauce.geometry} material={materials.ChocolateMat} position={[0, 0.05, 0]} />
        <mesh geometry={nodes.Cord.geometry} material={materials.CordMat} position={[0, 0.09, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Flames.geometry} material={materials.Material} position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, -2.36]} />
        <mesh geometry={nodes.Icing.geometry} material={materials.IcingMat} position={[0, 0.04, 0]}>
          <mesh geometry={nodes.Chocoball1.geometry} material={materials.ChocoballMat} position={[0, -0.09, 0]} />
          <mesh geometry={nodes.Chocoball2.geometry} material={materials.ChocoballMat} position={[0, -0.09, 0]} />
          {/* <mesh geometry={nodes.Chocoball3.geometry} material={materials.ChocoballMat} position={[0.04, 0, -0.04]} /> */}
        </mesh>
      </mesh>
      <mesh geometry={nodes.Icing_Sprinkle_6.geometry} material={materials.SprinklesMat} position={[-3.68, 0.03, 0.03]} />
      <mesh geometry={nodes.Icing_Sprinkle_2.geometry} material={materials.SprinklesMat} position={[-3.68, 0.03, 0.03]} />
      <mesh geometry={nodes.Icing_Sprinkle_3.geometry} material={materials.SprinklesMat} position={[-3.68, 0.03, 0.03]} />
      <mesh geometry={nodes.Icing_Sprinkle_4.geometry} material={materials.SprinklesMat} position={[-3.68, 0.03, 0.03]} />
      <mesh geometry={nodes.Icing_Sprinkle_5.geometry} material={materials.SprinklesMat} position={[-3.68, 0.03, 0.03]} />
      <mesh geometry={nodes.Icing_Sprinkle_1.geometry} material={materials.SprinklesMat} position={[-3.68, 0.03, 0.03]} />
      <mesh geometry={nodes.Chocolate_Sprinkle_6.geometry} material={materials.SprinklesMat} position={[-3.72, 0, 0.03]} />
      <mesh geometry={nodes.Chocolate_Sprinkle_2.geometry} material={materials.SprinklesMat} position={[-3.72, 0, 0.03]} />
      <mesh geometry={nodes.Chocolate_Sprinkle_3.geometry} material={materials.SprinklesMat} position={[-3.72, 0, 0.03]} />
      <mesh geometry={nodes.Chocolate_Sprinkle_4.geometry} material={materials.SprinklesMat} position={[-3.72, 0, 0.03]} />
      <mesh geometry={nodes.Chocolate_Sprinkle_5.geometry} material={materials.SprinklesMat} position={[-3.72, 0, 0.03]} />
      <mesh geometry={nodes.Chocolate_Sprinkle_1.geometry} material={materials.SprinklesMat} position={[-3.72, 0, 0.03]} />
    </group>
  )
}
export default Cake;
useGLTF.preload('/cake.glb')