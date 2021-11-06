import React from "react";

type Props = {
  text: string;
};

function Barcode({ text }: Props) {
  return <div className="barcode">{text}</div>;
}

export default Barcode;
