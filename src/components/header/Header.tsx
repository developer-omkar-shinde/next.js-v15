"use client";
import PageContainer from "@/layouts/PageContainer";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "CSR", href: "/csr" },
    { label: "SSR", href: "/ssr" },
    { label: "SSG", href: "/ssg" },
    { label: "ISR", href: "/isr" },
    { label: "Streaming ", href: "/streaming " },
    { label: "Nested Routes ", href: "/nested-routes " },
    { label: "Parallel Routes ", href: "/parallel-routes " },
    { label: "Intercepting Routes", href: "/intercepting-routes/users" },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className={`bg-gray-200  `}>
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
    </header>
  );
};

export default Nav;
