import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Navigation data
const navigationItems = [
  { text: "Home", iconSrc: "/header/home.svg", href: "/" },
  { text: "Our Category", iconSrc: "/header/category.svg", href: "/" },
  { text: "About Us", iconSrc: "/header/about.svg", href: "/" },
  { text: "Contact Us", iconSrc: "/header/contact.svg", href: "/" },
  { text: "FAQs", iconSrc: "/header/FAQs.svg", href: "/" },
];

// Right side icons data
const rightIcons = [
  {
    type: "icon",
    iconSrc: "/header/shopping bag.svg",
    href: "/",
    label: "Shopping & Notifications",
  },
  {
    type: "icon",
    iconSrc: "/header/love.svg",
    text: "Favorites",
    href: "/",
    label: "Favorites",
  },
  {
    type: "textIcon",
    iconSrc: "/header/down arrow.svg",
    text: "EN",
    href: "/",
    label: "EN",
  },
  {
    type: "doubleIcon",
    iconSrc1: "/header/user.svg",
    iconSrc2: "/header/down arrow.svg",
    href: "/register",
    label: "Register",
  },
];

// NavLink component
const NavLink = ({
  href,
  text,
  iconSrc,
}: {
  href: string;
  text: string;
  iconSrc: string;
}) => (
  <Link href={href} className="flex items-center gap-2 text-muted-foreground">
    <Image src={iconSrc} alt={`${text} icon`} width={18} height={18} />
    <span>{text}</span>
  </Link>
);

// IconButton component
const IconButton = ({
  item,
  isMobile = false,
}: {
  item?: any;
  isMobile?: boolean;
}) => {
  const buttonClasses = `
    text-muted-foreground hover:text-foreground transition-colors
    ${isMobile ? "md:hidden" : "hidden md:flex"}
  `;

  let content;

  if (isMobile) {
    // Mobile menu button
    content = (
      <Button variant="ghost" size="icon" className={buttonClasses}>
        <Image src="/header/menu.svg" alt="Menu" width={24} height={24} />
      </Button>
    );
    return <Link href="/">{content}</Link>;
  }

  // Handle different icon types
  if (item.type === "icon") {
    content = (
      <Button variant="ghost" size="icon" className={buttonClasses}>
        <Image src={item.iconSrc} alt={item.label} width={24} height={24} />
      </Button>
    );
  } else if (item.type === "doubleIcon") {
    content = (
      <Button
        variant="ghost"
        className={`${buttonClasses} flex items-center gap-1 px-2`}
      >
        <Image src={item.iconSrc1} alt={item.label} width={24} height={24} />
        <Image src={item.iconSrc2} alt={item.label} width={24} height={24} />
      </Button>
    );
  } else if (item.type === "textIcon") {
    content = (
      <Button
        variant="ghost"
        className={`${buttonClasses} flex items-center gap-1 px-2`}
      >
        <span className="text-sm font-medium text-black">{item.text}</span>
        <Image src={item.iconSrc} alt={item.label} width={24} height={24} />
      </Button>
    );
  }

  return item.href ? <Link href={item.href}>{content}</Link> : content;
};

export function Header() {
  return (
    <header className="bg-background border-b border-border px-2 py-4 min-h-[90px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-[45px] h-[35px] md:w-[67px] md:h-[51px]"
          >
            <Image
              src="/logo.svg"
              alt="Tinytales Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <NavLink
                key={item.text}
                href={item.href}
                text={item.text}
                iconSrc={item.iconSrc}
              />
            ))}
          </nav>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-1">
          {/* Desktop icons */}
          <div className="hidden md:flex items-center gap-1">
            {rightIcons.map((item, index) => (
              <IconButton key={item.label || index} item={item} />
            ))}
          </div>

          {/* Mobile menu button */}
          <IconButton isMobile />
        </div>
      </div>
    </header>
  );
}
