import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center">
        <li>
          <Link to="form" spy={true} smooth={true} duration={500}>
            <button className="font-montserrat shadow-md text-sm md:text-base p-2 rounded-lg text-white bg-[linear-gradient(to_left,#074864,#074e6a,#08536f,#085975,#095f7a)]">
              Dukung Bang Amsakar
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
