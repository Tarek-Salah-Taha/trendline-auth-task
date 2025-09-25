import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Navigation data
const navigationItems = [
  { text: "Home", iconSrc: "/header/home.svg", href: "/" },
  { text: "Our Category", iconSrc: "/header/category.svg", href: "/category" },
  { text: "About Us", iconSrc: "/header/about.svg", href: "/about" },
  { text: "Contact Us", iconSrc: "/header/contact.svg", href: "/contact" },
  { text: "FAQs", iconSrc: "/header/FAQs.svg", href: "/faqs" },
];

// Right side icons data
const rightIcons = [
  {
    type: "icon",
    iconSrc: "/header/shopping bag.svg",
    href: "/shopping",
    label: "Shopping & Notifications",
  },
  {
    type: "icon",
    iconSrc: "/header/love.svg",
    text: "Favorites",
    href: "/favorites",
    label: "Favorites",
  },
  {
    type: "textIcon",
    iconSrc: "/header/down arrow.svg",
    text: "EN",
    href: "/language",
    label: "EN",
  },
  {
    type: "doubleIcon",
    iconSrc1: "/header/user.svg",
    iconSrc2: "/header/down arrow.svg",
    href: "/profile",
    label: "Profile",
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
  <Link href={href} className="nav-link flex items-center gap-2">
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
    return <Link href="/menu">{content}</Link>;
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
        className={`${buttonClasses} flex items-center gap-1 px-3`}
      >
        <Image src={item.iconSrc1} alt={item.label} width={24} height={24} />
        <Image src={item.iconSrc2} alt={item.label} width={24} height={24} />
      </Button>
    );
  } else if (item.type === "textIcon") {
    content = (
      <Button
        variant="ghost"
        className={`${buttonClasses} flex items-center gap-1 px-3`}
      >
        <span className="text-sm">{item.text}</span>
        <Image src={item.iconSrc} alt={item.label} width={24} height={24} />
      </Button>
    );
  }

  return item.href ? <Link href={item.href}>{content}</Link> : content;
};

export function Header() {
  return (
    <header className="bg-background border-b border-border px-4 py-3">
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
