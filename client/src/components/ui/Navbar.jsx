import { useState } from "react";
import Logo from "../../assets/logo.png";
import { HiMenu, HiOutlineShoppingCart, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Menu", href: "#" },
    { label: "About", href: "#" },
    { label: "Reviews", href: "#" },
    { label: "Reservations", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 z-50 w-[100%] bg-white shadow-md">
      {/* Main row */}
      <div className="flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <img src={Logo} alt="logo" className="rounded-full h-16 w-16" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 text-[#5E5E5E] text-[14px]">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-[#D11C22] hover:bg-[#FCF2F3] px-4 py-2 rounded-2xl transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Cart & Order Button (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <HiOutlineShoppingCart className="size-6 text-[#5E5E5E] cursor-pointer hover:text-[#D11C22] transition-colors" />
          <button className="bg-[#D11C22] py-2 px-6 text-white font-bold text-[13px] rounded-2xl hover:bg-red-700 transition-colors">
            Order Now
          </button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <HiOutlineShoppingCart className="size-6 text-[#5E5E5E]" />
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? (
              <HiX className="size-7 cursor-pointer" />
            ) : (
              <HiMenu className="size-7 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-1 text-[#5E5E5E] text-[14px] border-t border-gray-100">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-[#D11C22] hover:bg-[#FCF2F3] px-4 py-2 rounded-2xl transition-colors duration-150"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <button className="mt-2 bg-[#D11C22] py-2 px-6 text-white font-bold text-[13px] rounded-2xl hover:bg-red-700 transition-colors w-full">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
