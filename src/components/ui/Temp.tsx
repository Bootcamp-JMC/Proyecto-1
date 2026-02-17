import { Link } from "react-router";

interface CustomLink {
  linkTo: string;
  linkText: string;
}

export const Temp1 = ({ linkText, linkTo = "" }: CustomLink) => {
  return (
    <Link to={linkTo} className="hover:text-primary text-gray-700">
      {linkText}
    </Link>
  );
};
