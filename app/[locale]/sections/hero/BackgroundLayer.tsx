interface BackgroundLayerProps {
  className: string;
  gradient: string;
}

function BackgroundLayer({ className, gradient }: BackgroundLayerProps) {
  return (
    <div
      className={`absolute rounded-full opacity-100 blur-3xl animate-move-pulse ${className}`}
      style={{ background: gradient }}></div>
  );
}

export default BackgroundLayer;
