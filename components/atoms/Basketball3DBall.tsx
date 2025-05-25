'use client'
import { useGLTF } from '@react-three/drei'

export function Basketball3DBall(props) {
  const { nodes, materials } = useGLTF('/models3d/basketballBall/basketball-ball.gltf')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: 'Sketchfab_model' }}>
          <group
            name="Basketball_size6_SFobjcleanermaterialmergergles"
            userData={{ name: 'Basketball_size6_SF.obj.cleaner.materialmerger.gles' }}>
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.Basketball_size6}
              userData={{ name: 'Object_2' }}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models3d/basketballBall/basketball-ball.gltf')