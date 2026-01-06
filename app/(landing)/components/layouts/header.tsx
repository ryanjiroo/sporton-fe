import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className="px-4 md:px-0">
      <div className="flex justify-between items-center gap-4 md:gap-10 container mx-auto py-7">
        <Image
          src="/images/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
          className="w-24 md:w-32"
        />
        <nav className="hidden md:flex gap-10 lg:gap-24 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>
        <div className="flex gap-5 md:gap-10 items-center">
          <FiSearch size={24} className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <FiShoppingBag size={24} />
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
              3
            </div>
          </div>
          <FiMenu size={24} className="md:hidden cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;