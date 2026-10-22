import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
export default function Footer() {
  return <footer className="site-footer"><a className="wordmark" href="#home">HA<span>.</span></a><span>© {new Date().getFullYear()} Huzaifa Alam · Built with curiosity.</span><a href="#home">Back to top <FiArrowUp /></a></footer>;
}
