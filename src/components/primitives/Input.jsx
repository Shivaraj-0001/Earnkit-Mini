export default function Input({ className = "", ...props }) {
  return (
    <input
      className={
        "h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm placeholder-neutral-400 " +
        "focus:border-neutral-400 " + className
      }
      {...props}
    />
  );
}
