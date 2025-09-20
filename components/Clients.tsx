"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Steps in My
        <span className="text-purple"> Development </span>
        <span>Journey</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-lg:mt-5">
          {companies.map((company) => (
            <div key={company.id} className="w-10 md:w-12 flex justify-center">
              <Image
                src={company.img}
                alt=""
                className="w-full h-auto object-contain"
                width={200}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
