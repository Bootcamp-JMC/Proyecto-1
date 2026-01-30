import { CustomLink } from "../../../ui/Customlink";

export const Navigation = () => {
  return (
    <>
      <CustomLink linkText="Curriculum" linkTo="/curriculum" />
      <CustomLink linkText="Success Stories" linkTo="/success-stories" />
      <CustomLink linkText="Pricing" linkTo="/pricing" />
      <CustomLink linkText="About" linkTo="/about" />
    </>
  );
};
