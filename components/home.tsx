"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomPointer } from "./custom-pointer";
import { Header } from "./header";
import { ImageClip } from "./image-clip";
import { Eye } from "./eye";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home() {
  const pointerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative min-h-full bg-white text-black">
      <Header pointerRef={pointerRef} />
      <div className="flex items-center justify-center h-[300px] pt-[120px]">
        <Eye />
      </div>
      {/* empty space */}
      {/* image clip */}
      <ImageClip />
      <CustomPointer pointerRef={pointerRef} />
    </div>
  );
}
