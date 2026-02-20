interface NavigationButton {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  buttonName: string;
}

export const NavigationButton = ({
  sectionRef,
  buttonName,
}: NavigationButton) => {
  return (
    <button
      key={buttonName + sectionRef}
      className="hover:text-primary text-gray-700"
      onClick={() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {buttonName}
    </button>
  );
};
