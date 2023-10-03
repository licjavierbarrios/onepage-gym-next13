"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import MainMenu from "@/components/shared/MainMenu";
import MenuMobile from "./MenuMobile";

import { RiMenuFill, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <>
      <header className="fixed left-0 top-0 w-full p-5 z-40 bg-black">
        <Container className="flex items-center justify-between">
          <section>
            <Logo />
          </section>
          <section className="hidden lg:block">
            <MainMenu />
          </section>
          <section className="lg:hidden">
            <button
              type="button"
              onClick={() => setshowMenu(true)}
              className="text-white"
            >
              <div className="text-primary">
                {!showMenu ? (
                  <RiMenuFill size={24} />
                ) : (
                  <RiCloseLine size={24} />
                )}
              </div>
            </button>
          </section>
        </Container>
      </header>
      <MenuMobile isOpen={showMenu} onClose={() => setshowMenu(false)} />
    </>
  );
};
export default Header;
