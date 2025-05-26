import React from 'react';

function Logo({ className = "h-8 w-8" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      {/* Security camera shape */}
      <path
        fillRule="evenodd"
        d="M6.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-11zM4 8V4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5V8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zm2 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        className="text-blue-600"
      />
      {/* Camera lens */}
      <circle cx="12" cy="12" r="3" fill="currentColor" className="text-blue-400" />
      {/* Shield overlay - representing the "Shield" in Smart Shield */}
      <path
        d="M12 3l5 2v5c0 4-3 7-5 8-2-1-5-4-5-8V5l5-2z"
        className="text-blue-700"
        fillOpacity="0.6"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export default Logo;