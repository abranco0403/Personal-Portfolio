import React, { useMemo, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavItem = ({ id, label, number, isActive, onSetActive }) => {
  return (
    <ScrollLink
      to={id}
      spy
      smooth
      duration={450}
      offset={-90}
      onSetActive={() => onSetActive(id)}
      aria-current={isActive ? "page" : undefined}
      className={[
        "group relative block cursor-pointer select-none",
        "py-2 transition-colors duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f12]",
        isActive ? "text-white" : "text-white/60 hover:text-white",
      ].join(" ")}
    >
      {/* Decorative items are moved LEFT into the gutter (no overlap) */}
      {/* Line */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute top-1/2 -translate-y-1/2",
          "left-[-4.5rem] h-[1px] rounded-full block",
          "transition-all duration-300",
          isActive
            ? "w-12 bg-white"
            : "w-8 bg-white/35 group-hover:w-11 group-hover:bg-white/70",
        ].join(" ")}
      />

      {/* Number */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute top-1/2 -translate-y-1/2",
          "left-[-2rem] text-base tracking-widest text-white/40",
          "transition-all duration-300",
          isActive
            ? "opacity-100 translate-x-0"
            : "opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5",
        ].join(" ")}
      >
        {number}
      </span>

      {/* Label (this is what stays perfectly aligned with your Title) */}
      <span className="text-sm font-medium tracking-wide transition-transform duration-300 group-hover:translate-x-0.5">
        {label}
      </span>
    </ScrollLink>
  );
};

export const Navbar = () => {
  const [active, setActive] = useState("about");

  const sections = useMemo(
    () => [
      { id: "about", label: "About", number: "01" },
      { id: "experience", label: "Experience", number: "02" },
      { id: "projects", label: "Projects", number: "03" },
    ],
    []
  );

  return (
    <header className="mt-10">
      <nav
        className="hidden md:flex md:flex-col gap-1.5 sticky top-24 ml-[2rem]"
        aria-label="Primary"
      >
        {sections.map((s) => (
          <NavItem
            key={s.id}
            id={s.id}
            label={s.label}
            number={s.number}
            isActive={active === s.id}
            onSetActive={setActive}
          />
        ))}
      </nav>
    </header>
  );
};
