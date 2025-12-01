export default function InteractiveBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-navy-900">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_60s_linear_infinite] opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(3,98,135,0.4),transparent_50%)]" />
          <div className="absolute top-[20%] left-[20%] w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(204,153,3,0.15),transparent_40%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(90,136,150,0.3),transparent_50%)]" />
        </div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Overlay Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-900/50 via-transparent to-brand-navy-900/90 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
