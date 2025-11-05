export default function Button({ as: As = "button", className = "", disabled, ...props }) {
  return (
    <As
      className={
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition " +
        (disabled ? "opacity-60 cursor-not-allowed " : "hover:opacity-90 ") +
        "bg-[#FF7A00] text-white focus-visible:outline focus-visible:outline-2 " +
        className
      }
      disabled={disabled}
      {...props}
    />
  );
}
