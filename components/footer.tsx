import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="bg-[#28303f] text-white relative"
      style={{
        backgroundImage: 'url("kid.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#020202B2] bg-opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/footer.svg"
                alt="Tinytales Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-[#b0b0b0] text-sm leading-relaxed mb-4">
                Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae
                Ipsam in eos qui consequatur ab. Soluta dolor quae Ipsam in eos
                quconsequatur ab cum maxime.Soluta dolor quae
              </p>
            </div>
          </div>

          {/* Let Us Help */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4 min-h-[1.5rem]">Let Us Help</h3>
            <div className="flex-1">
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Your Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    All Products
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Policies */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4 min-h-[1.5rem]">Policies</h3>
            <div className="flex-1">
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Refund policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Send Email */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-4 min-h-[1.5rem]">Send Email</h3>
            <div className="flex-1">
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Email address"
                  className="bg-[#454545] border-[#545454] text-white placeholder:text-[#b0b0b0]"
                />
                <Button className="bg-[#be968e] hover:bg-[#a08268] px-3">
                  Send
                </Button>
              </div>
              <div>
                <p className="text-sm text-[#b0b0b0] mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#b0b0b0] hover:text-white hover:bg-[#454545]"
                  >
                    <Image
                      src="/footer/facebook.svg"
                      alt="Facebook"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#b0b0b0] hover:text-white hover:bg-[#454545]"
                  >
                    <Image
                      src="/footer/twitter.svg"
                      alt="Twitter"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#b0b0b0] hover:text-white hover:bg-[#454545]"
                  >
                    <Image
                      src="/footer/instagram.svg"
                      alt="Instagram"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#b0b0b0] hover:text-white hover:bg-[#454545]"
                  >
                    <Image
                      src="/footer/linkedin.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#b0b0b0] hover:text-white hover:bg-[#454545]"
                  >
                    <Image
                      src="/footer/whatsapp.svg"
                      alt="Whatsapp"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#b0b0b0] hover:text-white hover:bg-[#454545]"
                  >
                    <Image
                      src="/footer/telegram.svg"
                      alt="Telegram"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
