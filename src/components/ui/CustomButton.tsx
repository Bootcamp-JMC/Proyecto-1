type ButtonVariant = "solid" | "outline";

type CustomButtonProps = {
  name: string;
  variant: ButtonVariant;
};

export const CustomButton = ({ name, variant }: CustomButtonProps) => {
  return (
    <button
      className={`h-10 w-31.5 rounded-[10px] ${
        variant === "solid"
          ? "bg-primary hover:bg-primary/90 cursor-pointer text-white"
          : "bg-white text-black hover:bg-gray-50"
      } `}
    >
      <span className="text-white">{name}</span>
    </button>
  );
};
