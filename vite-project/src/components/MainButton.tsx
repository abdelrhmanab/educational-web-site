


export default function PrimaryButton({ children }) {
  return (
    <button
      className="
        relative
        overflow-hidden
        bg-black
        text-white
        px-5 py-2
        rounded-2xl
        
        font-semibold
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        active:scale-95
        group
      "
    >
      <span
        className="
          absolute inset-0
          bg-red-500
          scale-x-0
          origin-left
          transition-transform duration-500
          group-hover:scale-x-100
        "
      ></span>

      <span className="relative z-10">{children}</span>
    </button>
  );
}