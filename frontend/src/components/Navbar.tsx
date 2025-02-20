"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/signup", label: "Signup" },  
    { href: "/about", label: "About" },
    { href: "/product", label: "Product" },
    { href: "/pricing", label: "Pricing" },
    { href: "/support", label: "Support" },
  ];

  return (
    <nav className="bg-white text-[#666666] p-5">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className=" font-bold hover:text-blue-300">
          Zerodha Clone
        </Link>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-blue-400 {
                  pathname === link.href ? "text-blue-400 font-thin" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
