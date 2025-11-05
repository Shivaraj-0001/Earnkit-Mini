export default function Card({ className = '', children }) {
  return (
    <div className={"rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm " + className}>
      {children}
    </div>
  );
}
