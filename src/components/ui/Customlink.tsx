interface CustomLink {
  linkTo?: string;
  linkText: string;
}

export const CustomLink = ({ linkText, linkTo = "" }: CustomLink) => {
  return (
    <a href={linkTo} className="hover:text-primary text-gray-700">
      {linkText}
    </a>
  );
};
