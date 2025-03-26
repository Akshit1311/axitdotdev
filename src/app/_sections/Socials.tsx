import Link from "next/link";
import React from "react";
import SectionLayout from "../_components/SectionLayout";

const Socials = () => {
  const socials = [
    {
      name: "X (Twitter)",
      href: "https://x.com/0xaxit",
      handle: "0xaxit",
    },
    {
      name: "GitHub",
      href: "https://github.com/Akshit1311",
      handle: "Akshit1311",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/Akshit1311/",
      handle: "Akshit1311",
    },
    {
      name: "Calendar",
      href: "https://cal.com/0xaxit",
      handle: "0xaxit",
    },
    {
      name: "Email",
      href: "mailto:a4748g@gmail.com",
      handle: "a4748g@gmail.com",
    },
  ];

  return (
    <SectionLayout title="Links">
      <div className="grid grid-cols-3 gap-4 ">
        {socials.map((social) => (
          <div key={social.name} className="text-sm">
            <div className="text-zinc-400">{social.name}</div>
            <Link
              href={social.href}
              aria-label={social.name}
              className="text-slate-300 hover:text-slate-100"
            >
              {social.handle}
              <svg
                className="inline-block h-3 w-3 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Socials;
