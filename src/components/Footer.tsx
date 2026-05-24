interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="py-12 px-6 border-t bg-[#0B0B0B] border-neutral-900 text-stone-500"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyleft */}
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="font-semibold text-xs tracking-wider font-mono text-zinc-300">
            EKLAVYA
          </span>
          <span className="text-[10px] font-mono text-stone-600">
            &copy; {currentYear} All Rights Reserved. Crafted with React and Tailwind CSS.
          </span>
        </div>

        {/* Dynamic status statement */}
        <div className="text-[10px] font-mono text-stone-600">
          Built for Future-Scale
        </div>
      </div>
    </footer>
  );
}
