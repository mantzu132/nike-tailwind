import { hamburger } from "@/assets/icons";
import { Popover } from "@headlessui/react";

function PopoverMenu({ navLinks }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button>
            <img
              src={hamburger}
              className="w-6 h-6"
              alt="Hamburger nav icon"
            />
          </Popover.Button>
          <Popover.Panel
            style={{ right: "5px" }}
            className={`${open ? "block" : "hidden"} absolute z-15`}
          >
            <div className="p-4 rounded shadow-md bg-white">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block mb-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}

export default PopoverMenu;
