import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import MobileNav from "./MobileNav";
import { GiBroom } from "react-icons/gi";
import { navigation } from "../data";

export const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-lightTeal font-bold" : ""
      }
            hover:text-lightRed transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-lightGold shadow-xl shadow-opaque-black";

  return (
    <nav className={`${navbarBackground} z-50 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <div className="flex items-center">
                <GiBroom className="text-3xl mr-2" />
            <h4 className="text-3xl">
                Swept Away
            </h4>
        </div>
        {isDesktop ? (
          <ul className={"flex space-x-8 mr-4"}>
            {navigation.map((item) => (
              <li className="uppercase" key={item.id}>
                <Link
                  page={item.name}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
            ))}
          </ul>
        ) : (
          <MobileNav
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isDesktop={isDesktop}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;