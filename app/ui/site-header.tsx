"use client";

import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isElevated, setIsElevated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const syncHeader = () => setIsElevated(window.scrollY > 24);
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    return () => window.removeEventListener("scroll", syncHeader);
  }, []);

  return (
    <header className="site-header" data-elevated={isElevated} data-open={isOpen}>
      <a className="brand" href="#top" aria-label="Albin Sam Shiju home">
        ASS
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      <nav className="site-nav" aria-label="Primary navigation">
        {[
          ["Proof", "#proof"],
          ["Experience", "#experience"],
          ["Skills", "#skills"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a key={href} href={href} onClick={() => setIsOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
