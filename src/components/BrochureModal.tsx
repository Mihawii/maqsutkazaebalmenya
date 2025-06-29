// This file is a React TypeScript component and requires React 17+ or the new JSX transform.
import React, { useEffect, useRef, useState } from 'react';
import type {} from 'react/jsx-runtime';
import './brochureModal.css';

const BrochureModal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null);

  // Show modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  // Focus trap
  useEffect(() => {
    if (!open || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'input, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) focusable[0].focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="brochure-modal-backdrop"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      aria-label="Request Brochure Modal"
    >
      <div className="brochure-modal" ref={modalRef}>
        <button
          className="brochure-modal-close"
          aria-label="Close modal"
          onClick={() => setOpen(false)}
          type="button"
        >
          &times;
        </button>
        <div className="brochure-modal-title">
          Begin your research journey today.
        </div>
        <div className="brochure-modal-subtitle">
          Request our brochure!
        </div>
        <form className="brochure-modal-form" autoComplete="off" onSubmit={e => e.preventDefault()}>
          <label className="brochure-modal-label" htmlFor="name">
            Your Name *
          </label>
          <input
            id="name"
            className="brochure-modal-input"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            aria-required="true"
            aria-label="Name"
            tabIndex={0}
          />
          <label className="brochure-modal-label" htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            className="brochure-modal-input"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            aria-required="true"
            aria-label="Phone Number"
            pattern="[+()0-9\s-]{7,}"
            placeholder="e.g. +1 (555) 123-4567"
            tabIndex={0}
          />
          <button
            className="brochure-modal-submit"
            type="submit"
            tabIndex={0}
            aria-label="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrochureModal; 