import { InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-grey-800 focus-within:ring-2 ring-cyan-300"
      )}
    >
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-grey-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputField(props: TextInputFieldProps) {
  return (
    <input
      className="bg-transparent flex-1 text-grey-100 text-xs placeholder:text-grey-400 outline-none"
      {...props}
    />
  );
}

TextInputField.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputField,
  Icon: TextInputIcon,
};
