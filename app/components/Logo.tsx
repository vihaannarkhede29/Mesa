export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mesaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5BA3E8" />
          <stop offset="50%" stopColor="#7BB8F0" />
          <stop offset="75%" stopColor="#9B8AE8" />
          <stop offset="100%" stopColor="#9B8AE8" />
        </linearGradient>
        <linearGradient id="pencilWood" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5D7C4" />
          <stop offset="100%" stopColor="#E8C4A8" />
        </linearGradient>
      </defs>
      
      {/* Main 'm' shape as a continuous flowing path */}
      <path
        d="M 18 15 
           Q 18 8 25 8 
           L 25 45 
           Q 25 52 32 52 
           Q 38 52 40 45 
           Q 42 38 40 32 
           Q 38 26 32 26 
           Q 28 26 30 22 
           Q 32 18 38 18 
           Q 44 18 46 22 
           Q 48 26 46 32 
           Q 44 38 50 38 
           Q 56 38 58 32 
           Q 59 28 58 26 
           L 58 52 
           Q 58 58 55 62 
           L 52 67 
           Q 49 72 45 76 
           L 40 82 
           Q 35 87 30 90 
           L 25 92 
           Q 20 95 18 95 
           L 18 88 
           Q 22 85 26 80 
           Q 30 75 32 70 
           Q 35 65 35 60 
           L 35 52 
           Q 35 45 28 45 
           Q 22 45 20 38 
           Q 18 32 22 26 
           Q 25 20 32 20 
           Q 38 20 36 15 
           Q 32 10 25 10 
           Q 18 10 18 15 Z"
        fill="url(#mesaGradient)"
      />
      
      {/* Pencil sharpened wood section */}
      <path
        d="M 18 88 
           Q 22 85 26 80 
           Q 30 75 32 70 
           Q 35 65 35 60 
           L 35 75 
           Q 32 78 28 83 
           Q 24 88 20 92 
           Z"
        fill="url(#pencilWood)"
      />
      
      {/* Pencil lead tip */}
      <path
        d="M 20 92 
           Q 24 88 28 83 
           Q 32 78 35 75 
           L 35 90 
           Q 32 93 28 97 
           Q 24 100 20 100 
           Z"
        fill="#4A8FD4"
      />
    </svg>
  )
}
