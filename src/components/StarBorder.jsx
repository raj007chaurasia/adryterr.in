import React from 'react';

const StarBorder = ({
  as: Component = 'div',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 2,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative block overflow-hidden rounded-[20px] ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}>
      {/* Sharper light gradients */}
      <div
        className="absolute w-[300%] h-full opacity-100 bottom-[-50%] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 15%)`,
          animationDuration: speed,
        }}></div>
      <div
        className="absolute w-[300%] h-full opacity-100 top-[-50%] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 15%)`,
          animationDuration: speed,
        }}></div>

      {/* Optimized Glass Container: Semi-transparent with a subtle hint of magenta and strong blur */}
      <div
        className="relative z-10 bg-black/40 backdrop-blur-3xl text-white rounded-[19px] h-full w-full border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 bg-linear-to-tr from-[#660066]/5 to-transparent pointer-events-none rounded-[19px]"></div>
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
