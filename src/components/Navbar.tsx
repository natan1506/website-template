import { Code } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WriteLogo from "../assets/logo-escrita.png"
import Logo from "../assets/logo.png"

interface NavbarProps {
  scrollPosition: number
}

export default function Navbar({ scrollPosition }: NavbarProps) {
  const [stateStyles, setStateStyle] = useState({
    navbar: "py-6 text-md",
    icon: "h-10 w-10"
  })

  useEffect(() => {
    if (scrollPosition > 48) {
      setStateStyle({
        navbar: "py-3 text-sm",
        icon: "h-9"
      })
    } else {
      setStateStyle({
        navbar: "py-6 text-md",
        icon: "h-10 "
      })

    }
  }, [scrollPosition]);

  return (
    <nav className={[`w-full z-10 px-4 border-b border-2 text-palette-gray flex flex-1 justify-between shadow-md backdrop-blur-md fixed top-0 items-center transition-all`].join(" ")}>
      <div className={stateStyles.navbar}>
        <img src={scrollPosition > 48 ? Logo : WriteLogo} alt="" className={[`transition-all`, stateStyles.icon].join(" ")} />
        {/* <Code
          className={[`transition-all`, stateStyles.icon].join(" ")}
        /> */}
      </div>
      <div className="border-l-2">
        <Link to="/" >
          <button className="hover:bg-palette-blue px-4 py-2">
            link1

          </button>
        </Link>
      </div>
    </nav>
  )
}