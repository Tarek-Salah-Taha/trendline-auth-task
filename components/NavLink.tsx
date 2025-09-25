"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

type NavLinkProps = {
  href: string;
  text: string;
  iconSrc: string;
};

export const NavLink = ({ href, text, iconSrc }: NavLinkProps) => {
  return (
    <Link href={href} className="flex items-center gap-2 text-muted-foreground">
      <div className="relative w-6 h-6">
        <Image
          src={iconSrc}
          alt={`${text} icon`}
          fill
          className="object-contain"
        />
      </div>
      <span>{text}</span>
    </Link>
  );
};
