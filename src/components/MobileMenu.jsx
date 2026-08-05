import { Moon, Sun } from "lucide-react";

export const MobileMenu = ({ menuOpen, setMenuOpen, theme, onToggleTheme }) => {
  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <div
      className={`fixed top-0 left-0 w-full theme-menu z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute top-6 left-6">
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={themeLabel}
          className="theme-card flex h-10 w-10 items-center justify-center rounded-full transition hover:border-[color:var(--accent)]"
        >
          <ThemeIcon size={18} className="theme-text" />
        </button>
      </div>

      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 theme-text text-3xl focus:outline-none cursor-pointer"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold theme-text my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold theme-text my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold theme-text my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold theme-text my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Contact
      </a>
    </div>
  );
};

