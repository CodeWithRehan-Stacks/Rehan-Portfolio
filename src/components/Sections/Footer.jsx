export default function FooterSection() {
  return (
    <footer className="py-10 border-t border-white/5 bg-black relative z-10">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-xl tracking-tight text-white mb-1">REHAN.</span>
          <span className="text-xs text-gray-500">Building Digital Freedom.</span>
        </div>

        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Muhammad Rehan. All rights reserved.</p>
          <p className="mt-1 text-xs">Designed with precision & passion.</p>
        </div>

      </div>
    </footer>
  );
}
