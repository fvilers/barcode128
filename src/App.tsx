import React, { useState } from "react";
import encodeBarcode from "./barcode";
import BarcodeForm from "./BarcodeForm";

function App() {
  const [result, setResult] = useState("");
  const handleGeneration = (text: string) => {
    const encoded = encodeBarcode(text);
    console.log("Generate barcode with", text, encoded);
    setResult(encoded);
  };

  return (
    <div>
      <h1>Barcode 128</h1>
      <BarcodeForm onSubmit={handleGeneration} />

      {result && <div className="barcode">{result}</div>}
    </div>
  );
}

export default App;
