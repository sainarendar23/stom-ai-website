import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS
emailjs.init('IpirtWZA1ZZP74SWI');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
