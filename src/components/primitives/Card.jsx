export default function Card({ className = "", children }) {
  return (
    <div className={"rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] " + className}>
      {children}
    </div>
  );
}
