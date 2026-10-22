import React, { useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Huzaifa Alam home">HA<span>.</span></a>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
      <nav id="main-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
        {[['About', 'about'], ['Work', 'projects'], ['Journey', 'experiences'], ['Résumé', 'resume']].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's talk <FiArrowUpRight /></a>
      </nav>
    </header>
  );
}
