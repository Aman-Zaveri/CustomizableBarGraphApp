import React from "react";
import Bars from "./Bars";

interface BarChartProps {
  data: number[];
  labels: string[];
  theme?: string;
  highlight?: string;
  text?: string;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  labels,
  theme,
  highlight,
  text,
}) => {
  const maxValue = Math.max(...data);
  const scaledData = data.map((value) => (value / maxValue) * 100);

  return (
    <div
      className="flex flex-col h-full p-20 rounded-2xl border-neutral-100 border-2 border-solid"
      style={{
        width: "80vw",
        gap: "2em",
        boxShadow: "0px 0px 31px -12px #FFFFFF",
      }}
    >
      {scaledData.map((value, index) => (
        <Bars
          label={labels[index]}
          scaledData={value}
          data={data[index]}
          theme={theme}
          highlight={highlight}
          text={text}
          keyIndex={index}
        />
      ))}
    </div>
  );
};

export default BarChart;
