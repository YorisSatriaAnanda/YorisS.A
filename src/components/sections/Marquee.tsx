const Marquee = () => {
  return (
    <div className="w-full py-10 border-y border-white/10 overflow-hidden flex bg-primary-950">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Repeat content for infinite effect */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-5xl md:text-7xl font-syne font-bold uppercase mx-8 text-stroke hover-target">
              CREATIVE DEVELOPER
            </span>
            <span className="w-4 h-4 bg-white rounded-full mx-4"></span>
            <span className="text-5xl md:text-7xl font-syne font-bold uppercase mx-8 text-stroke hover-target">
              UI/UX ENTHUSIAST
            </span>
            <span className="w-4 h-4 bg-white rounded-full mx-4"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
