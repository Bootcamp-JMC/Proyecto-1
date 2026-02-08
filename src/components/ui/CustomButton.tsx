type ButtonVariant = "solid" | "outline";

type CustomButtonProps = {
  buttonText: string;
  variant: ButtonVariant;
  customWidth?: string;
  customHeight?: string;
  customRounded?: string;
};

export const CustomButton = ({
  buttonText,
  variant,
  customWidth,
  customHeight,
  customRounded,
}: CustomButtonProps) => {
  return (
    <button
      className={` ${customWidth ? customWidth : "w-31.75"} ${customHeight ? customHeight : "h-10"} ${customRounded ? customRounded : "rounded-[10px]"} ${
        variant === "solid"
          ? "bg-primary hover:bg-primary/90 cursor-pointer text-white"
          : "bg-white text-black hover:bg-gray-50"
      }`}
    >
      <span>{buttonText}</span>
    </button>
  );
};
