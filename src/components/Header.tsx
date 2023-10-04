import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import brand from "../images/brand.png"
import Button from "./ui/Button"
import Input from "./ui/Input"
import { BiSearch } from "react-icons/bi"

interface Props  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  location?: string
}

const Header = ({ location }: Props) => {

  return <div className="flex flex-row items-center gap-2">
    <Link to="/"  className="flex-1 flex flex-row items-center gap-2">
      <StaticImage src="../images/icon.png" alt="quaran light" className="w-8 h-8" />
      <p className="font-semibold">Quaran Light</p>
    </Link>
    <ul className="flex-[3] flex flex-row justify-center gap-1">
      {
        [
          {
            name: "Home",
            path: "/"
          },
          {
            name: "About",
            path: "/about/"
          },
          {
            name: "Courses",
            path: "/courses/"
          }
        ].map(({ name, path }, idx) => 
          (
          <li key={idx}>
            <Link to={`${path}`}>
              <Button size="lg"
                variant={
                  location === path ? "active" : "default"
                }
              >
                {name}
              </Button>
            </Link>
          </li>
          ))
      }
    </ul> 

    <Input
      placeholder="Search courses..."
      sufIcon={<BiSearch size={20} />}
      className="flex-1 "
    />
  </div>
}

export default Header