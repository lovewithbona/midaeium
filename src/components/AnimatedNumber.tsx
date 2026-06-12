import type { CSSProperties } from "react";

type AnimatedNumberProps = {
  value: number;
};

export default function AnimatedNumber({ value }: AnimatedNumberProps) {
  const digits = String(value).split("");

  return (
    <span className="animated-number" aria-hidden="true">
      {digits.map((digit, index) => (
        <span className="slot-digit" key={`${digit}-${index}`}>
          <span className="slot-track" style={{ "--slot-offset": `-${Number(digit)}em` } as CSSProperties}>
            {Array.from({ length: 10 }).map((_, number) => (
              <span key={number}>{number}</span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}
