import React from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { MdTouchApp } from "react-icons/md";
import { BiTimer } from "react-icons/bi";
import { AiOutlineIdcard } from "react-icons/ai";

export const statsData = [
  {
    icon: (
      <AiOutlineIdcard
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Certified",
    desc: "Part 107 certified pilot",
  },
  {
    icon: (
      <MdTouchApp
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "Personal Touch",
    desc: "Located locally, available onsite",
  },
  {
    icon: (
      <BiTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Fast Turnaround",
    desc: "Quick response and time to production",
  },
];
