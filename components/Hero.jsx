"use client";
import Typical from "react-typical";
import React, { useCallback } from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import { Send, CircleChevronDown } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";

import DevImg from "./DevImg";
import Social from "./Social";

const Hero = () => {
  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero
   bg-no-repeat bg-bottom bg-cover dark:bg-none"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* */}
          <div className="flex max-w-[680px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              <Typical
                steps={[
                  "Full Stack Developer",
                  5000,
                  "DSA Enthusiast",
                  5000,
                  "Web Developer",
                  5000,
                  "Open Source Contributor",
                  5000,
                  "learner",
                  5000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </div>
            <h1 className="h1 mb-4">Hello, my name is Atinder Kumar</h1>
            <p className="subtitle max w [490px] mx auto xl:mx 0">
              Skilled in full stack development, and DSA. Created projects like
              Consultiva, solving complex problems with impactful results.
            </p>

            {/* */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-2"
                onClick={scrollToAbout}
              >
                About Me
                <CircleChevronDown size={18} />
              </Button>
            </div>
            {/* */}
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute
            -top-1 -right-2"
            >
              {" "}
            </div>
            <DevImg
              containerStyles="bg-hero_shape w-[500px] h-[450px] bg-no-repeat relative bg-bottom"
              imgSrc="/assets/about/atinder.png"
              imgSize="w-100 h-90"
            />
          </div>
        </div>
        {/* */}
        <div
          className="hidden md:flex absolute left-2/4
    bottom-40 xl:bottom-4 animate-bounce"
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
