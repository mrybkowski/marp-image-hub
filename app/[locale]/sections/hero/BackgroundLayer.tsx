interface BackgroundLayerProps {
  className: string;
  gradient: 'green' | 'purple';
  isVisible?: boolean;
}

export default function BackgroundLayer({
  className,
  gradient,
  isVisible = true
}: BackgroundLayerProps) {
  const gradientVariants = {
    green:
      'radial-gradient(circle, rgba(177,219,97,1) 0%, rgba(177,219,97,0) 100%)',
    purple:
      'radial-gradient(circle, rgba(191,177,245,1) 0%, rgba(191,177,245,0) 100%)'
  };

  return (
    isVisible && (
      <div
        className={`absolute rounded-full opacity-100 blur-3xl animate-move-pulse ${className}`}
        style={{ background: gradientVariants[gradient] }}></div>
    )
  );
}
