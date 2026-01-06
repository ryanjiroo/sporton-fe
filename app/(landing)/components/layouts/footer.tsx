import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white mt-52">
      <div className="container mx-auto flex flex-col md:flex-row justify-between pt-14 pb-24 px-4 md:px-0 gap-12 md:gap-0">
        <div className="w-full md:w-105">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />
          <p className="mt-8">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>
        <div className="w-full md:w-105 grid grid-cols-2">
          <div className="flex gap-7 flex-col">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">YouTube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="container mx-auto py-6.5 flex flex-col md:flex-row justify-between px-4 md:px-0 gap-4 md:gap-0">
          <div>SportsOn © 2025 All Rights Reserverd.</div>

          <div className="grid grid-cols-2 w-full md:w-105">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;