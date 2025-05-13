"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
];

export function NavbarLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-6 tracking-[1px]">
      {links.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(href + "/");

        return (
          <Link
            key={href}
            href={href}
            className={clsx(
              "relative text-[20px] font-semibold transition-colors",
              isActive
                ? "text-blue-500"
                : "text-white hover:bg-blue-500 pb-[2px]"
            )}
          >
            {label}
            {isActive && (
              <span className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-blue-500 rounded" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
