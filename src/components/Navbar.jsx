import React from 'react';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-cneter">
        <h2 className="text-2xl text-blue-800">Nikita T</h2>
      </div>
      <div className="hidden md:inline-flex m-8 items-center justify-center gap-4 text-lg lg:text-2xl">
        <a href="#about">About</a>
        <a href="#technologies">Technologies</a>
        <a href="#background">Background</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div
        className="hover:cursor-pointer md:hidden"
        onClick={() => setMenu(!menu)}
      >
        <RxHamburgerMenu />
      </div>
      {menu && (
        <div className="flex flex-col top-10 -right-8 absolute md:hidden m-8 items-center justify-center gap-4 text-lg lg:text-2xl bg-indigo-900 w-screen uppercase font-extralight py-8">
          <a href="#about">About</a>
          <a href="#technologies">Technologies</a>
          <a href="#background">Background</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
