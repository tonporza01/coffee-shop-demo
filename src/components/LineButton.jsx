export default function LineButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-accent-lineGreen text-white text-xs font-heading font-semibold py-2 px-3.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10">
        ติดต่อผู้พัฒนา Line ID: 11aprily
      </span>

      {/* Button */}
      <a
        href="https://line.me/ti/p/~11aprily"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-accent-lineGreen text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-accent-lineGreen/30 animate-ping"></span>
        
        {/* LINE Icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 relative z-10">
          <path d="M24 10.3c0-5.7-5.4-10.3-12-10.3S0 4.6 0 10.3c0 5.1 4.3 9.3 10.1 10.1.4.1.9.3.9.7v2c0 .4.2.6.5.6.3 0 .5-.1.7-.3l2.8-2.8c3.9-1.2 9-5.1 9-10.3zm-14.7 3H8v-5.2c0-.4-.3-.7-.7-.7s-.7.3-.7.7v5.9c0 .4.3.7.7.7h2c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zm3.4-5.9c0-.4-.3-.7-.7-.7s-.7.3-.7.7v5.9c0 .4.3.7.7.7s.7-.3.7-.7V7.4zm5.5 0h-2.2v3.7h-.3V7.4h-2.2v5.9h4.7v-.7h-4V10.4h4V7.4zm4.4 0h-3.4v5.9h3.4v-.7h-2.7V10.4h2.4v-.7h-2.4V8.1h2.7v-.7z" />
        </svg>
      </a>
    </div>
  );
}
