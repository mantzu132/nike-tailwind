import { headerLogo } from "../assets/images";
import { navLinks } from "@/constants";
import PopoverMenu from "./PopoverMenu";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>{" "}
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block text-red-600">
          <PopoverMenu navLinks={navLinks} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
