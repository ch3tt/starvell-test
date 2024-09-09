"use client";
import { useRef } from "react";
import React from "react";
export default function Dropdown({
  title,
  values,
}: {
  title: string;
  values: Array<{ title: string }>;
}) {
  const dropdownRef = useRef<any>(
  
  );
  return (
    <>
      <li ref={dropdownRef} className="dropdown ">
        <div className="dropdown__header">
          <p>{title}</p>
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
        {
          <div className="dropdown__body">
            {values.map((e,i) => (
              <button key={i}>{e.title}</button>
            ))}
          </div>
        }
      </li>
    </>
  );
}
