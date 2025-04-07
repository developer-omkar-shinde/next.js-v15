"use client";

import PageContainer from "@/layouts/PageContainer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { label: "Route1", href: "nested-routes/route1" },
  { label: "Route2", href: "nested-routes/route2" },
];

const NestedRoutes = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div>
      <PageContainer>
        <ul className="flex gap-4 p-8 ">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-5 py-2 rounded transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </PageContainer>
    </div>
  );
};

export default NestedRoutes;
