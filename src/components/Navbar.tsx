import { Code } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        icon: "h-9 w-9"
      })
    } else {
      setStateStyle({
        navbar: "py-6 text-md",
        icon: "h-10 w-10"
      })

    }
  }, [scrollPosition]);

  return (
    <nav className={[`w-full h border-b border-2 text-palette-gray flex flex-1 justify-between px-2 shadow-md backdrop-blur-md fixed top-0 items-center transition-all`, stateStyles.navbar].join(" ")}>
      <div>
        <Code
          className={[`transition-all`, stateStyles.icon].join(" ")}
        />
      </div>
      <div>
        <Link to="/" >
          <button className="border-l border-r border-2 hover:bg-palette-blue">
            link1

          </button>
        </Link>
      </div>
    </nav>
  )
}