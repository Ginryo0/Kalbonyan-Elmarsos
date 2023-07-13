import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import useMobileMedia from '../../hooks/useMobileMedia';
import CanvasLoader from '../CanvasLoader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  const isMobile = useMobileMedia();

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 3 : 2}
      position-y={0}
      rotation-y={0}
    ></primitive>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={-3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;