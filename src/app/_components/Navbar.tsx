import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 fixed top-0 left-1/2 -translate-x-1/2 text-sm z-50">
      <nav className="flex items-center gap-4">
        <Link className="text-zinc-400" href="/">
          Home
        </Link>
        <Link className="text-zinc-400" href="/about">
          About
        </Link>
        <Link className="text-zinc-400" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
