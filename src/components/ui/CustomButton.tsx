type ButtonVariant = "solid" | "outline";

type CustomButtonProps = {
  name: string;
  variant: ButtonVariant;
};

export const CustomButton = ({ name, variant }: CustomButtonProps) => {
  return (
    <button
      className={`h-10 w-31.75 rounded-[10px] ${
        variant === "solid"
          ? "bg-primary text-white hover:bg-purple-700"
          : "bg-white text-black hover:bg-gray-50"
      } `}
    >
      <span className="text-white">{name}</span>
    </button>
  );
};
