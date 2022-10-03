import React, { memo } from "react";

function CloseSvg({ color = "currentColor" }) {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >

            <path
                d="M13 1L1 13"
                stroke="#697385"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={color}
            />
            <path
                d="M1 1L13 13"
                stroke="#697385"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={color}
            />
        </svg>

    );
}

export default memo(CloseSvg);



