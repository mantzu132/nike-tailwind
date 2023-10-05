import { copyrightSign } from "@/assets/icons/index.js";
import { footerLogo } from "@/assets/images/index.js";
import { socialMedia } from "@/constants/index.js";
import { footerLinks } from "@/constants/index.js";

const Footer = () => {
  return (
    <footer className={"max-container"}>
      <div
        className={
          "flex justify-between items-start gap-20 flex-wrap max-lg:flex-col"
        }
      >
        <div>
          <a href="/">
            <img src={footerLogo} alt="footer logo" />
          </a>
          <p
            className={
              "mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm"
            }
          >
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div></div>

          {/*----------- START OF SM ICONS -----------------*/}
          <div className={"flex gap-3 mt-8"}>
            {socialMedia.map((item) => (
              <div
                key={item.alt}
                className={
                  "flex justify-center items-center w-12 h-12 bg-white rounded-full"
                }
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
          {/*----------- END OF SM ICONS -----------------*/}
        </div>
        <div className={"flex flex-col gap-20 sm:flex-row"}>
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {item.title}
              </h4>
              <ul>
                {item.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/*-------------------START OF COPYRIGHT------------!*/}
      <div
        className={
          "flex justify-between mt-24 max-sm:flex-col max-sm:items-center"
        }
      >
        <div className={"flex gap-3"}>
          <img
            src={copyrightSign}
            alt={"copyright sign"}
            width={20}
            height={20}
            className={"rounded-full"}
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>

      {/*------------- END OF COPYRIGHT ----------------*/}
    </footer>
  );
};

export default Footer;
