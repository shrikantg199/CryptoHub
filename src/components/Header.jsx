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
} from "@nextui-org/react";
import img from "../assets/logo.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", Link: "/" },
    { name: "Coins", Link: "/coins" },
    { name: "News", Link: "/news" },
    { name: "Trending", Link: "/trending" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="flex justify-between gap-4 items-center bg-[#181a20]  h-16  "
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <Link href="/">
          <NavbarBrand>
            <p className="font-bold text-inherit text-2xl text-white font-serif">
              <div className="flex justify-center items-center">
                {" "}
                <img
                  src={img}
                  alt=""
                  className="lg:h-18 lg:w-16 m-1 h-10 w-10"
                />
                <span className="text-base lg:text-3xl"> CryptoHub</span>
              </div>
            </p>
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-12  font-semibold "
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className="text-2xl  text-white hover:text-orange-500 transition-all "
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/coins"
            className="text-2xl text-white hover:text-orange-500 transition-all "
          >
            Coins
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/news"
            className="text-2xl text-white hover:text-orange-500 transition-all "
          >
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/trending"
            className="text-2xl text-white hover:text-orange-500 transition-all "
          >
            Trending
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-black m-3" href={item.Link} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
