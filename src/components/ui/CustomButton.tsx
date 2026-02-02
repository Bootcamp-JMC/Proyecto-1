type ButtonVariant = "solid" | "outline";

type CustomButtonProps = {
  buttonText: string;
  variant: ButtonVariant;
  customWidth?: string;
};

export const CustomButton = ({
  buttonText,
  variant,
  customWidth,
}: CustomButtonProps) => {
  return (
    <button
      className={`h-10 ${customWidth ? customWidth : "w-31.75"} flex items-center justify-center rounded-[10px] ${
        variant === "solid"
          ? "bg-primary hover:bg-primary/90 cursor-pointer text-white"
          : "bg-white text-black hover:bg-gray-50"
      }`}
    >
      <span>{buttonText}</span>
    </button>
  );
};
