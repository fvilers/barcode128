import cls from "@fvilers/cls";
import React from "react";

type Props = {
  text: string;
  withText: boolean;
};

function Barcode({ text, withText }: Props) {
  return <div className={cls("barcode", withText && "text")}>{text}</div>;
}

export default Barcode;
