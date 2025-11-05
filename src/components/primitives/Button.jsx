export default function Button({ as: As = 'button', className = '', ...props }) {
  return (
    <As
      className={
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition " +
        "bg-[#FF7A00] text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 " +
        className
      }
      {...props}
    />
  );
}
