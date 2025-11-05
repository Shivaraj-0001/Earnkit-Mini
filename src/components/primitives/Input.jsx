export default function Input({ className = "", ...props }) {
  return (
    <input
      className={
        "h-12 w-full text-black rounded-xl border border-neutral-200 bg-white px-4 text-md placeholder-neutral-400 " +
        "focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/40 focus:outline-none transition-all duration-200 " +
        className
      }
      {...props}
    />
  );
}
