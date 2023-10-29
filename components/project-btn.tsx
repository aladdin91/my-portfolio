import React from "react";
type ProjectBtnProps = {
  url: string;
  text: string;
};

export default function ProjectBtn({ url, text }: ProjectBtnProps) {
  return (
    <a
      href={url}
      className="flex items-center justify-center gap-2 h-[2.3rem] w-[8rem] bg-black/[0.7]  text-white rounded-xl outline-none transition-all focus:scale-110 hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65 dark:bg-gray-950 dark:text-white/70"
    >
      {text}
    </a>
  );
}
