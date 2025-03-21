interface OatDividerProps {
  className?: string;
}

export default function OatDivider({ className = '' }: OatDividerProps) {
  return (
    <div className={`w-full my-8 ${className}`} role="separator" aria-hidden="true">
      <div 
        className="w-screen overflow-hidden" 
        style={{ 
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
          height: '60px',
          position: 'relative'
        }}
      >
        <div 
          className="absolute top-0 left-0 w-[200%] h-full bg-repeat-x animate-scroll"
          style={{ 
            backgroundImage: 'url(/divider2.png)',
            backgroundSize: 'auto 60px',
            backgroundPosition: 'center',
            animation: 'scrollBackground 80s linear infinite'
          }}
        />
      </div>
    </div>
  );
} 