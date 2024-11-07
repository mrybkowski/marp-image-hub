interface ILogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 24, height = 24 }: ILogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 18H12V24H6L6 18Z" fill="#3B82F6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 24V18L12 24H18Z"
        fill="#3B82F6"
      />
      <path d="M0 6H6L6 12H0L0 6Z" fill="#3B82F6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 18H6L0 12L0 18Z"
        fill="#3B82F6"
      />
      <path d="M12 0L18 0V6H12V0Z" fill="#3B82F6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0L6 0V6L12 0Z"
        fill="#3B82F6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 6L18 6L24 12V6Z"
        fill="#3B82F6"
      />
      <path d="M18 12H24V18H18V12Z" fill="#3B82F6" />
    </svg>
  );
}
