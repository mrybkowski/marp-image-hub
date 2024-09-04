interface BackgroundLayerProps {
  className: string;
  gradient: string;
}

export default function BackgroundLayer({
  className,
  gradient
}: BackgroundLayerProps) {
  return (
    <div
      className={`absolute rounded-full opacity-100 blur-3xl animate-move-pulse ${className}`}
      style={{ background: gradient }}></div>
  );
}
