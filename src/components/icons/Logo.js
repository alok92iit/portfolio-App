import React from "react";

const Logo = () => {
  return (
    <svg
      className="logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="98 107 64 85"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      width="40px"
      height="40px"
    >
      <line
        x1="0"
        y1="-20"
        x2="0"
        y2="20"
        transform="translate(100 150)"
        fill="none"
        stroke="#64ffda"
        stroke-width="5"
        stroke-linecap="round"
      />
      <line
        x1="0"
        y1="-20"
        x2="0"
        y2="20"
        transform="translate(160 150)"
        fill="none"
        stroke="#64ffda"
        stroke-width="5"
        stroke-linecap="round"
      />
      <line
        x1="-15"
        y1="-10"
        x2="15"
        y2="10"
        transform="translate(115 180)"
        fill="none"
        stroke="#64ffda"
        stroke-width="5"
        stroke-linecap="round"
      />
      <line
        x1="15"
        y1="-10"
        x2="-15"
        y2="10"
        transform="translate(145 180)"
        fill="none"
        stroke="#64ffda"
        stroke-width="5"
        stroke-linecap="round"
      />
      <line
        x1="-15"
        y1="10"
        x2="15"
        y2="-10"
        transform="translate(115 120)"
        fill="#64ffda"
        stroke="#64ffda"
        stroke-width="5"
        stroke-linecap="round"
      />
      <line
        x1="-15"
        y1="-10"
        x2="15"
        y2="10"
        transform="translate(145 120)"
        fill="none"
        stroke="#64ffda"
        stroke-width="5"
        stroke-linecap="round"
      />
      <text
        dx="8px"
        dy="-6"
        font-family='"ehXxSm1oVuj1:::Roboto"'
        font-size="40px"
        font-weight="500"
        transform="translate(109.554352 169.039059)"
        fill="#64ffda"
        stroke-width="0"
      >
        <tspan y="0" font-weight="800" stroke-width="0"
        fontFamily="var(--font-mono)"
        fontSize='40'>
          A
        </tspan>
      </text>

    </svg>
  );
};

export default Logo;
