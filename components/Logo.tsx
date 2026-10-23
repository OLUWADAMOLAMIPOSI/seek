export default function Logo({ light = false }: { light?: boolean }) {
  const text = light ? "text-white" : "text-ink";
  return (
    <span className="inline-flex items-center gap-3" aria-label="SEEK">
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <rect width="38" height="38" rx="10" fill={light ? "#8DB8AB" : "#1F4E5F"} />
        <circle className="draw" cx="17" cy="17" r="8" stroke={light ? "#12263A" : "#fff"} strokeWidth="2.5" />
        <path className="draw" d="M23 23 L30 30" stroke={light ? "#12263A" : "#8DB8AB"} strokeWidth="3" strokeLinecap="round" />
        <path d="M17 12 L20 17 L17 22 L14 17 Z" fill={light ? "#12263A" : "#8DB8AB"} />
      </svg>
      <span className={`text-xl font-extrabold tracking-[0.28em] ${text}`}>SEEK</span>
    </span>
  );
}
