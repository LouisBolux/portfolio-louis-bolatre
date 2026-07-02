import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/en" className="font-semibold text-zinc-900 text-sm hover:text-zinc-600 transition-colors">
          Louis Bolatre
        </Link>
        <div className="flex gap-6 text-sm text-zinc-500 items-center">
          <a href="#about" className="hover:text-zinc-900 transition-colors py-2 -my-2 inline-block">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors py-2 -my-2 inline-block">
            Projects
          </a>
          <a href="#track-record" className="hover:text-zinc-900 transition-colors py-2 -my-2 inline-block">
            Track Record
          </a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors py-2 -my-2 inline-block">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/louis-bolatre-product-manager-pm/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors py-2 -my-2 inline-block"
          >
            LinkedIn
          </a>
          <Link
            href="/"
            className="text-xs font-medium border border-zinc-200 rounded-md px-2 py-1 hover:bg-zinc-50 transition-colors"
          >
            FR
          </Link>
        </div>
      </div>
    </nav>
  );
}
