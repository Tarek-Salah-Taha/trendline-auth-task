"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

type BaseItem = {
  href?: string;
  className?: string;
};

type RightItem = BaseItem &
  (
    | {
        type: "icon";
        icon: string;
      }
    | {
        type: "doubleIcon";
        icon1: string;
        icon2: string;
        gap?: "tight" | "normal" | "wide";
      }
    | {
        type: "textIcon";
        icon: string;
        text: string;
        textSize?: "xs" | "sm" | "base";
      }
  );

type RightIconsProps = {
  items: RightItem[];
  mobileMenuHref?: string;
  iconSize?: number;
  gap?: "tight" | "normal" | "wide";
};

const gapClasses = {
  tight: "gap-1",
  normal: "gap-3",
  wide: "gap-6",
};

const textSizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
};

export const RightIcons = ({
  items,
  mobileMenuHref,
  iconSize = 24,
  gap = "normal",
}: RightIconsProps) => {
  const renderIcon = (iconSrc: string, alt: string = "") => (
    <Image
      src={`/icons/${iconSrc}.svg`}
      alt={alt}
      width={iconSize}
      height={iconSize}
      className={`w-[${iconSize}px] h-[${iconSize}px]`}
    />
  );

  const renderContent = (item: RightItem) => {
    const baseClasses =
      "text-muted-foreground hover:text-foreground transition-colors";

    switch (item.type) {
      case "icon":
        return (
          <div className={`${baseClasses} ${item.className || ""}`}>
            {renderIcon(item.icon)}
          </div>
        );

      case "doubleIcon":
        return (
          <div
            className={`${baseClasses} flex ${
              gapClasses[item.gap || "tight"]
            } ${item.className || ""}`}
          >
            {renderIcon(item.icon1)}
            {renderIcon(item.icon2)}
          </div>
        );

      case "textIcon":
        return (
          <div
            className={`${baseClasses} flex items-center ${
              item.className || ""
            }`}
          >
            {renderIcon(item.icon)}
            <span className={textSizeClasses[item.textSize || "sm"]}>
              {item.text}
            </span>
          </div>
        );

      default:
        return null;
    }
  };

  const ItemWrapper = ({
    children,
    href,
    index,
  }: {
    children: React.ReactNode;
    href?: string;
    index: number;
  }) => {
    if (href) {
      return (
        <Link key={index} href={href} className="block">
          {children}
        </Link>
      );
    }

    return <div key={index}>{children}</div>;
  };

  return (
    <div className={`flex items-center ${gapClasses[gap]}`}>
      {/* Desktop icons */}
      <div className={`hidden md:flex items-center ${gapClasses[gap]}`}>
        {items.map((item, idx) => (
          <ItemWrapper key={idx} href={item.href} index={idx}>
            {renderContent(item)}
          </ItemWrapper>
        ))}
      </div>

      {/* Mobile menu */}
      {mobileMenuHref && (
        <Link href={mobileMenuHref} className="md:hidden">
          <Menu className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
      )}
    </div>
  );
};
