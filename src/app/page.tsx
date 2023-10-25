"use client";

import BarChart from "../../components/BarChart";
import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

export default function Home() {
  const [data, setData] = useState([45, 85, 32, 90]);
  const [labels, setLabels] = useState(["Jan", "Feb", "Mar", "Apr"]);
  const [color, setColor] = useState("#A997DF");
  const [highlightColor, setHighlightColor] = useState("#DDC4DD");
  const [textColor, setTextColor] = useState("#F4F0F9");

  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = inputValue.split(",").map(Number);
    let labels = inputValue2.split(",");
    setData(data);
    setLabels(labels);
  };

  return (
    <main
      className="flex flex-col h-full w-screen p-10 items-center"
      style={{ gap: "3em", background: "#4F517D" }}
    >
      <h1
        className="font-bold text-3xl p-5 px-10 rounded-2xl border-neutral-100 border-2 border-solid"
        style={{ boxShadow: "0px 0px 31px -12px #FFFFFF" }}
      >
        Bar Chart Example
      </h1>
      <form onSubmit={onSubmit}>
        <div
          className="flex gap-2 flex-wrap flex-col rounded-2xl border-neutral-100 border-2 border-solid p-10 px-20 items-center"
          style={{ gap: "2em", boxShadow: "0px 0px 31px -12px #FFFFFF" }}
        >
          <input
            className="p-3 rounded-2xl"
            style={{ color: "#4F517D" }}
            type="text"
            placeholder="Data"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <input
            className="p-3 rounded-2xl"
            style={{ color: "#4F517D" }}
            type="text"
            placeholder="Labels"
            value={inputValue2}
            onChange={(event) => setInputValue2(event.target.value)}
          />
          <button
            className=" w-1/2 p-3 rounded-2xl border-neutral-100 border border-solid"
            style={{ backgroundColor: `${color}` }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div
        className="flex gap-10 flex-wrap justify-center p-20 rounded-2xl border-neutral-100 border-2 border-solid font-medium text-lg"
        style={{ boxShadow: "0px 0px 31px -12px #FFFFFF" }}
      >
        <div
          className="flex flex-col gap-4 items-center"
          style={{ color: `${color}` }}
        >
          <h2>Theme</h2>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
        <div
          className="flex flex-col gap-4 items-center"
          style={{ color: `${highlightColor}` }}
        >
          <h2>Highlight Colour</h2>
          <HexColorPicker color={highlightColor} onChange={setHighlightColor} />
        </div>
        <div
          className="flex flex-col gap-4 items-center"
          style={{ color: `${textColor}` }}
        >
          <h2>Text Colour</h2>
          <HexColorPicker color={textColor} onChange={setTextColor} />
        </div>
      </div>
      <div className="pb-12">
        <BarChart
          data={data}
          labels={labels}
          theme={color}
          highlight={highlightColor}
          text={textColor}
        />
      </div>
    </main>
  );
}
