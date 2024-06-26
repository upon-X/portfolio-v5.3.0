import { Link } from "react-scroll";
import { useTheme } from "../../context/ThemeContext";

interface NavbarLinkProps {
  link: string;
  navlink_id: string;
  is_smooth?: boolean;
  navlink_text: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  link,
  is_smooth,
  navlink_id,
  navlink_text,
}) => {
  const { theme } = useTheme();
  return (
    <Link
      id={`navlink-${navlink_id}`}
      to={link}
      smooth={true || is_smooth}
      className={`border-b-2 border-purple px-3 py-1 transition-all hover:bg-purple hover:rounded-full hover:text-white cursor-pointer
          ${theme === "light" ? "" : "text-white"} 
          sm:hover:text-darkTheme
          md:hover:text-darkTheme
          `}
    >
      {navlink_text}
    </Link>
  );
};
