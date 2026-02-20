import { FooterButtons } from "./components/FooterButtons";
import { FooterGroups } from "./components/FooterGroups";
import { FOOTER_LINKS } from "./data/FOOTER_BUTTONS";
import { FOOTER_GROUPS } from "./data/FOOTER_GROUPS";

export const Footer = () => {
  return (
    <div className="bg-gray-900 px-4 pt-16 pb-px text-gray-300 md:px-10 lg:px-16.25 xl:px-19 2xl:px-54.25">
      <div className="container mx-auto">
        <FooterGroups FooterGroups={FOOTER_GROUPS} />
        <FooterButtons FooterLinks={FOOTER_LINKS} />
      </div>
    </div>
  );
};
