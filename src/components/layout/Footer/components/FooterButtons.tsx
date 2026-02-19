import { FooterLinks } from "../data/FOOTER_BUTTONS";

interface FooterLinksProps {
  FooterLinks: FooterLinks[];
}

export const FooterButtons = ({ FooterLinks }: FooterLinksProps) => {
  return (
    <div className="mx-auto mt-12 mb-15.75 border-t border-gray-800 pt-8 text-center text-sm text-gray-400 md:flex md:justify-between">
      <p>© 2026 AI Academy. All rights reserved.</p>
      <div className="mt-4 flex justify-center gap-6 px-4 md:mt-0 md:px-0">
        {FooterLinks.map((link) => (
          <p
            className="cursor-pointer transition-colors hover:text-purple-400"
            key={link.id}
          >
            {link.text}
          </p>
        ))}
      </div>
    </div>
  );
};
