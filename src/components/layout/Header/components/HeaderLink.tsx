interface HeaderLink {
  linkTo?: string;
  linkText: string;
}

export const HeaderLink = ({ linkText, linkTo = "" }: HeaderLink) => {
  return (
    <a href={linkTo} className="text-gray-700 hover:text-purple-600">
      {linkText}
    </a>
  );
};
