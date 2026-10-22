import React from 'react';
import { FiArrowDownRight, FiDownload } from 'react-icons/fi';
export default function Resume() {
  return <section id="resume" className="resume-section"><div><span className="eyebrow">THE DETAILS, ON PAPER</span><h2>A little more<br />about my experience<FiArrowDownRight /></h2></div><a className="pill-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download résumé <FiDownload /></a></section>;
}
