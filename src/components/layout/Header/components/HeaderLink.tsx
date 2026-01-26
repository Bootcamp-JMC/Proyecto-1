interface HeaderLink {
  linkTo?: string;
  linkText: string;
}

export const HeaderLink = ({ linkText, linkTo = "" }: HeaderLink) => {
  return (
    <a href={linkTo} className="hover:text-primary text-gray-700">
      {linkText}
    </a>
  );
};
