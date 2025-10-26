import { Html, useProgress } from '@react-three/drei';

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{
        fontSize: '24px',
        color: '#f0f0f0',
        fontWeight: 'bold'
      }}>
        {progress.toFixed(0)}% loaded
      </span>
    </Html>
  );
}