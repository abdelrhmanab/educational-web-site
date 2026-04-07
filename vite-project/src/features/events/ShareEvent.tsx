import React, { useState, useRef, ReactNode } from "react";

type HoverPopoverProps = {
  children: ReactNode;
  content: ReactNode;
  delay?: number;
};

export default function HoverPopover({
  children,
  content,
  delay = 200,
}: HoverPopoverProps) {
  const [open, setOpen] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, delay);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      {children}

      {/* Popover */}
      <div
        className={`absolute left-2/3 -translate-x-1/2 bottom-full mb-3 transition-all duration-300 z-50
        ${
          open
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-2 invisible"
        }`}
      >
        <div className="relative bg-black text-white shadow-xl rounded-xl p-3">
          {content}

          {/* Arrow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rotate-45"></div>
        </div>
      </div>
    </div>
  );
}