import clsx from "clsx";

type ButtonProps = {
  label: string | React.ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "default";
};

export default function Button({ label, type = "button", onClick, disabled, size = "default" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "rounded-lg  text-white bg-primary  disabled:cursor-not-allowed",

        {
          "px-4 py-2 md:px-20 md:py-3 text-sm": size === "default",
          "px-2 py-2 text-xs": size === "small",
        }
      )}
    >
      {label}
    </button>
  );
}
