import React from "react";
import "./custom-button.css";
import Link from "next/link";
import { IButtonProps } from "@/types/IButtonProps";

export default function CustomButton({
  buttonProps,
}: {
  buttonProps: IButtonProps;
}) {
  buttonProps.type = buttonProps.type ?? "button";
  buttonProps.variant = buttonProps.variant ?? "primary";
  return (
    <Link
      href={`${buttonProps.link}`}
      className={`bttn ${buttonProps.variant}`}
      type={buttonProps.type}
    >
      {buttonProps.text}
    </Link>
  );
}
