import React from 'react';

interface ToothLogoProps {
  className?: string;
  iconSize?: number;
  variant?: 'light' | 'dark' | 'white';
}

export const ToothLogo: React.FC<ToothLogoProps> = ({
  className = '',
  iconSize = 22,
  variant = 'light',
}) => {
  // Tooth squircle container colors based on theme
  const containerClasses =
    variant === 'dark'
      ? 'bg-[#10233D] border border-white/10 shadow-inner'
      : variant === 'white'
      ? 'bg-white text-[#2878F0] shadow-md'
      : 'bg-gradient-to-br from-[#2878F0] to-[#1c5cc2] text-white shadow-md shadow-[#2878F0]/25';

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-[14px] p-2 transition-all duration-300 ${containerClasses} ${className}`}
      style={{ width: iconSize * 1.9, height: iconSize * 1.9 }}
      aria-hidden="true"
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform transition-transform hover:scale-105"
      >
        {/* Stylized premium tooth geometry */}
        <path
          d="M12 2C8.5 2 6 4.2 6 7.5C6 10.2 7 13.5 8 17.5C8.8 20.8 10 22 11.2 22C12.1 22 12.3 20 12.5 17C12.7 14 13.5 14 13.7 17C13.9 20 14.1 22 15 22C16.2 22 17.4 20.8 18.2 17.5C19.2 13.5 20.2 10.2 20.2 7.5C20.2 4.2 17.7 2 14.2 2C13.2 2 12.5 2.5 12 2Z"
          fill="currentColor"
          fillOpacity={variant === 'white' ? '1' : '0.95'}
        />
        {/* Subtle electric blue accent spark/shine */}
        <path
          d="M12 2.5C12.8 4 14.5 4.8 16 5"
          stroke="#55A8FF"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="15.5" cy="7.5" r="1.2" fill="#FFFFFF" fillOpacity="0.8" />
      </svg>
    </div>
  );
};
