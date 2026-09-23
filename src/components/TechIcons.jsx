import React from "react";

export function KotlinIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 24H0V0h24L12 12l12 12z" fill="url(#kotlin-grad-unique)" />
      <defs>
        <linearGradient id="kotlin-grad-unique" x1="24" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E4485D" />
          <stop offset="40%" stopColor="#C711E1" />
          <stop offset="100%" stopColor="#7F52FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ComposeIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 12.5L12 15.68L6.5 12.5L3 14.52L12 19.72L21 14.52L17.5 12.5Z" fill="#087F5B" />
      <path d="M17.5 7.5L12 10.68L6.5 7.5L3 9.52L12 14.72L21 9.52L17.5 7.5Z" fill="#00C782" />
      <path d="M12 2L3 7.2L6.5 9.22L12 6.04L17.5 9.22L21 7.2L12 2Z" fill="#4285F4" />
    </svg>
  );
}

export function AndroidIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.67 1.23 12.56 1 11.39 1s-2.28.23-3.25.63L6.66.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C5.31 3.26 4 5.34 4 7.74H18.78c0-2.4-1.31-4.48-3.25-5.58zM9 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  );
}

export function FlutterIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.314 0L2.3 12.014l3.7 3.7 15.714-15.714h-7.4z" fill="#02569B" />
      <path d="M14.286 11.371l-5.657 5.658 5.657 5.657h7.428l-9.371-9.371 1.943-1.944z" fill="#0175C2" />
      <path d="M8.629 17.029L14.286 22.686h7.428l-5.657-5.657z" fill="#29B6F6" />
    </svg>
  );
}

export function NextJsIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.828 17.51L10.3 7.828h1.872l5.856 8.356-.2.126v.2zm-2.028-9.682v5.717l-1.5-2.14V7.828h1.5zM7.8 7.828h1.5v8.344H7.8V7.828z" />
    </svg>
  );
}

export function ShopifyIcon({ className = "w-5 h-5" }) {
  return (
    <i className={`fa-brands fa-shopify ${className}`}></i>
  );
}

