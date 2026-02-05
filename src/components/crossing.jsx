"use client";
import { useState } from "react";

export default function Crossing() {

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 py-7">

 <div className="absolute inset-0 h-[60px]">
          <img 
            src="/assets/crossing.png" 
            alt="Jmb tour and travels Banner"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
    </section>
  );
}
