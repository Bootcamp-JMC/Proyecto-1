import { FooterGroup } from "../data/FOOTER_GROUPS";
import { FOOTER_SOCIAL_LOGOS } from "../data/FOOTER_SOCIAL_LOGOS";
import { FooterGroupItems } from "./FooterGroupItems";
import { FooterSocialSection } from "./FooterSocialSection";

interface FooterGroupsProps {
  FooterGroups: FooterGroup[];
}

export const FooterGroups = ({ FooterGroups }: FooterGroupsProps) => {
  return (
    <div className="flex-col md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-4">
      <FooterSocialSection FooterSocialSection={FOOTER_SOCIAL_LOGOS} />
      {FooterGroups.map((group) => (
        <div key={group.id}>
          <h4 className="mt-11.75 text-[18px] font-bold text-white md:mt-0">
            {group.title}
          </h4>
          <FooterGroupItems FooterGroupItems={group.items} />
        </div>
      ))}
    </div>
  );
};
