interface ColoredButton {
  name: string;
}

export const ColoredButton = ({ name }: ColoredButton) => {
  return (
    <button className="h-10 w-32 rounded-xl bg-[#7C3AED] hover:bg-purple-700">
      <span className="text-white">{name}</span>
    </button>
  );
};
