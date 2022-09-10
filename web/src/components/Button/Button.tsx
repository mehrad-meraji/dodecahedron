import { ReactNode } from "react";

import { As, Button as ChakraButton } from "@chakra-ui/react";
import cn from "classnames";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  to?: string;
  as?: As<string | ReactNode>;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
};

const Button = ({
  children,
  as,
  variant = "primary",
  disabled,
  type = "button",
  ...props
}: ButtonProps) => {

  return (
    <ChakraButton
      type={type}
      disabled={disabled}
      variant={variant}
      className={cn(
        "!h-auto gap-2 !rounded-none !py-1 !px-2 !text-3xs !leading-none"
      )}
      as={as}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
