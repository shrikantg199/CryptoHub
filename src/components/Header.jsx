import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Input,
} from "@nextui-org/react";
import img from "../assets/logo.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "coins"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="flex justify-between gap-4 items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  h-16  "
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/">
          <NavbarBrand>
            <p className="font-bold text-inherit text-2xl text-white font-serif">
              <div className="flex justify-center items-center">
                {" "}
                <img src={img} alt="" className="h-18 w-16 m-2" />
                CryptoHub
              </div>
            </p>
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-12 " justify="center">
        <Input
          type="Coin Search"
          label="Coin Search"
          className="w-[500px] px-10 m-4 "
        />
        <NavbarItem>
          <Link color="foreground" href="/" className="text-2xl  text-white ">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/coin"
            className="text-2xl text-white "
          >
            Coins
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/coin"
            className="text-2xl text-white "
          >
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/coin"
            className="text-2xl text-white "
          >
            Trending
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-black m-3" href="/coin" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
