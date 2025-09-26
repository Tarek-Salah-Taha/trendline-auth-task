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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#020202B2] bg-opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-20 items-start">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 -mt-4 mb-4">
              <Image
                src="/footer.svg"
                alt="Tinytales Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <p className="text-[#b0b0b0] text-sm font-medium leading-relaxed">
              Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae
              Ipsam in eos qui consequatur ab. Soluta dolor quae Ipsam in eos
              qui consequatur ab cum maxime. Soluta dolor quae.
            </p>
          </div>

          {/* Let Us Help + Policies */}
          <div className="grid grid-cols-2 gap-8">
            {/* Let Us Help */}
            <div className="flex flex-col">
              <h5 className="font-semibold md:text-2xl text-lg mb-4">
                Let Us Help
              </h5>
              <ul className="space-y-2 text-base font-medium text-[#b0b0b0]">
                <li>
                  <a href="#" className="hover:text-white">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    All Products
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="flex flex-col">
              <h5 className="font-semibold md:text-2xl text-lg mb-4">
                Policies
              </h5>
              <ul className="space-y-2 text-base font-medium text-[#b0b0b0]">
                <li>
                  <a href="#" className="hover:text-white">
                    Refund policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Send Email */}
          <div className="flex flex-col">
            <h5 className="font-semibold md:text-2xl text-lg mb-5">
              Send Email
            </h5>
            <div className="flex-1">
              <div className="flex items-center gap-2 bg-white rounded-lg p-2 mb-6">
                <Input
                  placeholder="Email address"
                  className="flex-1 border-none shadow-none text-black placeholder:text-gray-500 focus-visible:ring-0"
                />
                <Button className="bg-chart-2 hover:bg-[#a08268] text-white px-6 rounded-md">
                  Send
                </Button>
              </div>

              <h5 className="font-semibold md:text-2xl text-lg mb-5">
                Follow Us
              </h5>
              <div className="flex">
                {[
                  "facebook",
                  "twitter",
                  "instagram",
                  "linkedin",
                  "whatsapp",
                  "telegram",
                ].map((social) => (
                  <Button
                    key={social}
                    variant="ghost"
                    size="icon"
                    className="text-[#b0b0b0] hover:text-white hover:bg-[#454545]"
                  >
                    <Image
                      src={`/footer/${social}.svg`}
                      alt={social}
                      width={24}
                      height={24}
                      className="w-5 h-5"
                    />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
