import React from "react";
import NavItems from "./NavItems";
import BubbleMenu from "./BubbleMenu";

function Header() {
  const menuList = [
    {
      label: "Home",
      href: "#",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "About",
      href: "#",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "Courses",
      href: "#course",
      ariaLabel: "Courses",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "Faculties",
      href: "#",
      ariaLabel: "Faculties",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "Contact",
      href: "#",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
  ];

  return (
    <div className="w-full ">
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>RB</span>}
        items={menuList}
        menuAriaLabel="Toggle navigation"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    </div>
  );
}

export default Header;
