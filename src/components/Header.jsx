const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Digital Implementation', href: '#digital-implementation' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
]

export default function Header() {
  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
          Nexus Genius
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#quote"
            className="bg-primary text-on-primary px-6 py-2 font-button text-button rounded-lg hover:scale-[1.02] transition-transform"
          >
            Request Quote
          </a>
        </div>
      </nav>
    </header>
  )
}
