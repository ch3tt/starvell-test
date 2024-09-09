"use client";
import { useRef, useState } from "react";
import React from "react";
export default function SelectComponent({
  thin = false,
  title,
  values,
  callback,
}: {
  thin?: boolean;
  title: string;
  values: Array<{ title: string }>;
  callback: (value: any) => void;
}) {
  const [selectValue, setSelectValue] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLLIElement | null>(document.createElement("li"));
  return (
    <>
      <li ref={selectRef} className="select">
        <div
          onClick={(e) => {
            e.stopPropagation();
            selectRef.current?.classList.contains("open")
              ? selectRef.current?.classList.remove("open")
              : selectRef.current?.classList.add("open");
          }}
          className="select__header"
        >
          <p>{selectValue || title}</p>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.12013 6.55994L8.00013 9.43994L10.8801 6.55994"
              stroke="#666D80"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="select__body">
          {values.map((e) => (
            <button
              onClick={() => {
                setSelectValue(e.title);
                callback(e.title);
              }}
            >
              {e.title}
            </button>
          ))}
        </div>
      </li>
    </>
  );
}
