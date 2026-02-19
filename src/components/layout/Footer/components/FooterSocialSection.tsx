import { Logo } from "../../../ui/Logo";
import { FooterLogos } from "../data/FOOTER_SOCIAL_LOGOS";

interface FooterSocialSectionProps {
  FooterSocialSection: FooterLogos[];
}

export const FooterSocialSection = ({
  FooterSocialSection,
}: FooterSocialSectionProps) => {
  return (
    <div className="flex-col">
      <Logo variant="White" customGap="gap-1.75" />
      <p className="mt-4 text-gray-400">
        Empowering the next generation of AI professionals through world-class
        education.
      </p>
      <div className="mt-6 flex gap-4">
        {FooterSocialSection.map((logo) => (
          <div key={logo.id}>{logo.logo} </div>
        ))}
      </div>
    </div>
  );
};
