import { useState } from "react";

interface BarProps {
  label: string;
  scaledData: number;
  data: number;
  theme?: string;
  highlight?: string;
  text?: string;
}

const Bars: React.FC<BarProps> = ({
  label,
  scaledData,
  data,
  theme,
  highlight,
  text
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="flex"
      style={{
        gap: "2em",
        alignItems: "center",
        flexDirection:  "row"
      }}
    >
      <span className="w-5" style={{color : `${text}`}}>{label}</span>
      <div
        className="flex justify-center items-center rounded-2xl border-neutral-100 border border-solid"
        style={{
          color : `${text}`,
          width: `${scaledData}%`,
          height: (hovered ? "2.2em" : "2em"),
          backgroundColor: hovered ? `${highlight}` : `${theme}`,
          transition: "0.2s ease-in-out all",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hovered && <span className="value" style={{color : `${text}`}}>{data}</span>}
      </div>
    </div>
  );
};

export default Bars;
