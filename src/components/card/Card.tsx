"use client";
import React, { useRef, ElementRef } from "react";

interface cardProps {
  date: string;
  title: string;
  description: string;
  code: number;
  border: number;
  activeBorder: React.Dispatch<React.SetStateAction<number>>;
}

const Card = ({
  date,
  title,
  description,
  code,
  border,
  activeBorder,
}: cardProps) => {
  const LikeRef = useRef<ElementRef<"svg">>(null);

  const handleLike = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    if (LikeRef.current) {
      const hasClass = LikeRef.current.classList.contains("fill-brandColor");
      if (hasClass) {
        LikeRef.current.classList.remove("fill-brandColor");
      } else {
        LikeRef.current.classList.add("fill-brandColor");
      }
    }
  };

  return (
    <div
      className={`p-10 border rounded-xl ${
        code === border ? "border-brandColor" : "border-transparent"
      } `}
      onClick={() => {
        activeBorder(code);
      }}
    >
      <div className="flex justify-between">
        <p className="text-[12px] sm:text-[14px] text-brandColor">{date}</p>
        <svg
          className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] stroke-brandColor fill-transparent
            hover:fill-brandColor"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={LikeRef}
          onClick={(e: React.MouseEvent<SVGSVGElement>) => handleLike(e)}
        >
          <g id="icon-heart-active">
            <path
              id="Vector"
              d="M30 11.75C30 20.5 17.0262 27.5825 16.4737 27.875C16.3281 27.9533 16.1654 27.9943 16 27.9943C15.8346 27.9943 15.6719 27.9533 15.5262 27.875C14.9738 27.5825 2 20.5 2 11.75C2.00232 9.69528 2.81958 7.72539 4.27248 6.27248C5.72539 4.81958 7.69528 4.00232 9.75 4C12.3313 4 14.5912 5.11 16 6.98625C17.4088 5.11 19.6688 4 22.25 4C24.3047 4.00232 26.2746 4.81958 27.7275 6.27248C29.1804 7.72539 29.9977 9.69528 30 11.75Z"
            />
          </g>
        </svg>
      </div>

      <div className="pt-5 sm:pt-6 flex flex-col gap-4">
        <h2 className="text-[1.25rem] text-white flex-col gap">{title}</h2>
        <p className="text-dark50">{description}</p>
      </div>
    </div>
  );
};

export default Card;
