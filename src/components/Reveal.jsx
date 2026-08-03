import { useEffect, useRef, useState } from "react";

// Wraps children in a div that fades/slides in the first time it scrolls
// into view. Mirrors the reference site's `.reveal` / IntersectionObserver behavior.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${isIn ? "in" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
