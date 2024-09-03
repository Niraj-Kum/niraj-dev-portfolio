/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import "./Navbar.css";
import { useTheme } from "@mui/material";
import { Icon } from "../components/icon/icon";
import { Transition } from "react-transition-group";
import { media, msToNum, numToMs } from "../utils/style";
import { ThemeToggle } from "../components/theme-toggle/ThemeToggle";
import { useWindowSize } from "../hooks/useWindowSize";
import { reflow } from "../utils/transition";
import { Monogram } from "../components/monogram/monogram";

const navLinks = [
  {
    label: "Projects",
    pathname: "/#project-1",
  },
  {
    label: "Details",
    pathname: "/#details",
  },
  {
    label: "Articles",
    pathname: "/articles",
  },
  {
    label: "Contact",
    pathname: "/contact",
  },
];

const socialLinks = [
  {
    label: "Twitter",
    url: `https://twitter.com/NirajKumar0727`,
    icon: "twitter",
  },
  {
    label: "Hackerrank",
    url: `https://www.hackerrank.com/profile/nirajkum165`,
    icon: "hackerrank",
  },
  {
    label: "Github",
    url: `https://github.com/Niraj-Kum`,
    icon: "github",
  },
];

const Navbar = () => {
  const theme = useTheme();
  const headerRef = useRef<any>();
  // const [target, setTarget] = useState<any>();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;

  const handleNavItemClick = (event: any) => {
    const hash = event.currentTarget.href.split("#")[1];
    // setTarget(null);

    if (hash && location.pathname === "/") {
      // setTarget(`#${hash}`);
      event.preventDefault();
    }
  };

  const handleMobileNavClick = (event: any) => {
    handleNavItemClick(event);
    if (menuOpen) setMenuOpen(false);
  };
  return (
    <header className={"navbar"} ref={headerRef}>
      <div className={'logo'}>
        <Monogram highlight />
      </div>
      {/* <NavToggle onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} /> */}
      <nav className={"nav"}>
        <div className={"navList"}>
          {navLinks.map(({ label, pathname }) => (
            <div
              key={label}
              style={{
                color: `color-mix(in lab, ${
                  theme.palette.mode === "light"
                    ? "oklch(0% 0 0)"
                    : "oklch(100% 0 0)"
                } 80%, transparent)`,
                cursor: 'pointer'
              }}
              //     RouterLink
              //   unstable_viewTransition
              //   prefetch="intent"
              //   to={pathname}
              //   key={label}
              //   data-navbar-item
              className={`navLink navlink-${theme.palette.mode}`}
              //   aria-current={getCurrent(pathname)}
              //   onClick={handleNavItemClick}
            >
              {label}
            </div>
          ))}
        </div>
        <NavbarIcons desktop theme={theme} />
        <ThemeToggle isMobile />
      </nav>
      <Transition
        unmount
        in={menuOpen}
        timeout={{ enter: 0, exit: 500 }}
        onEnter={reflow}
      >
        {(status: string) => (
          <nav className={"mobileNav"}>
            {navLinks.map(({ label, pathname }, index) => (
              <div
                // unstable_viewTransition
                // prefetch="intent"
                // to={pathname}
                key={label}
                className={"mobileNavLink"}
                // data-visible={visible}
                // aria-current={getCurrent(pathname)}
                onClick={handleMobileNavClick}
                style={
                  status === "entered"
                    ? {
                        transitionDelay: numToMs(
                          Number(msToNum("300ms")) + index * 50
                        ),
                        color: `color-mix(in lab, ${
                          theme.palette.text.primary
                        } ${
                          theme.palette.mode === "light" ? "75%" : "80%"
                        }, transparent)`,
                        opacity: "1",
                        transform: "translate3d(0, 0, 0)",
                      }
                    : {
                        transitionDelay: numToMs(
                          Number(msToNum("300ms")) + index * 50
                        ),
                        color: `color-mix(in lab, ${
                          theme.palette.text.primary
                        } ${
                          theme.palette.mode === "light" ? "75%" : "80%"
                        }, transparent)`,
                      }
                }
              >
                {label}
              </div>
            ))}
            <NavbarIcons theme={theme} />
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
      {!isMobile && <ThemeToggle data-navbar-item />}
    </header>
  );
};

const NavbarIcons = ({ desktop, theme }: any) => (
  <div className={"navIcons"}>
    {socialLinks.map(({ label, url, icon }) => (
      <a
        key={label}
        data-navbar-item={desktop || undefined}
        className={"navIconLink"}
        style={{
          color: `color-mix(in lab, ${theme.palette.text.primary} 60%, transparent)`,
        }}
        aria-label={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className={"navIcon"} icon={icon} />
      </a>
    ))}
  </div>
);

export default Navbar;
