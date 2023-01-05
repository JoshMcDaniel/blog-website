import Link from 'next/link';
import { useState } from 'react';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-transparent shadow-md">
      <Link href="/">
        <a className="font-bold text-2xl">HeatSeekr</a>
      </Link>
      <div className="hidden md:flex">
        <Link href="/">
          <a className="px-4 py-2 font-bold">Home</a>
        </Link>
        <Link href="/categories">
          <a className="px-4 py-2 font-bold">Categories</a>
        </Link>
        <Link href="/about">
          <a className="px-4 py-2 font-bold">About</a>
        </Link>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur">
          <div
            className="absolute top-0 right-0 px-7 py-5 font-bold block"
            onClick={toggleMenu}
          >
            <CloseIcon />
          </div>

          <div className="bg-white h-full w-full py-4 overflow-y-auto">
            <Link href="/">
              <a className="px-4 py-2 font-bold block" onClick={toggleMenu}>
                Home
              </a>
            </Link>
            <Link href="/categories">
              <a className="px-4 py-2 font-bold block" onClick={toggleMenu}>
                Categories
              </a>
            </Link>
            <Link href="/about">
              <a className="px-4 py-2 font-bold block" onClick={toggleMenu}>
                About
              </a>
            </Link>
          </div>
        </div>
      )}
      <div className="md:hidden">
        <button className="px-3 py-2 font-bold" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
