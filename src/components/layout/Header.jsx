// src/components/layout/Header.jsx (or wherever yours lives)
import React from "react";
import { Title } from "../pages/Title";
import { Navbar } from "./Navbar";
import { SocialMedias } from "../pages/SocialMedias";

export const Header = () => {
  return (
    <header
      className={[
        // mobile
        "w-full px-6 pt-12 pb-24",
        // desktop (left column fixed)
        "md:fixed md:inset-y-0 md:left-0 md:w-1/2 md:max-h-screen md:py-20",
      ].join(" ")}
      aria-label="Site header"
    >
      <div
        className={[
          "h-full flex flex-col justify-between items-start",
          // One source of truth for left alignment on desktop
          "md:pl-24",
        ].join(" ")}
      >
        {/* Top: Title + Navigation */}
        <div className="w-full">
          <Title />
          <Navbar />
        </div>

        {/* Bottom: Social / Resume links */}
        <div className="mt-10">
          <SocialMedias />
        </div>
      </div>
    </header>
  );
};
