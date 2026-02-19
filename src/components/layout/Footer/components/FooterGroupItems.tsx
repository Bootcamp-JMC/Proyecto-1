import { FooterGroupItem } from "../data/FOOTER_GROUPS";

interface FooterGroupItemsProps {
  FooterGroupItems: FooterGroupItem[];
}

export const FooterGroupItems = ({
  FooterGroupItems,
}: FooterGroupItemsProps) => {
  return (
    <div className="mt-4 flex-col md:mt-4">
      {FooterGroupItems.map((item) => (
        <p
          key={item.id}
          className="mt-3 cursor-pointer transition-colors hover:text-purple-400"
        >
          {item.text}
        </p>
      ))}
    </div>
  );
};
