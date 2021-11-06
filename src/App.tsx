import React, { useState } from "react";
import Barcode from "./Barcode";
import encodeBarcode from "./barcode-encoder";
import BarcodeForm from "./BarcodeForm";

function App() {
  const [result, setResult] = useState("");
  const handleGeneration = (text: string) => {
    const encoded = encodeBarcode(text);
    console.log("Generate barcode with", text, encoded);
    setResult(encoded);
  };

  return (
    <main>
      <h1>Barcode 128</h1>
      <BarcodeForm onSubmit={handleGeneration} />

      {result && <Barcode text={result} />}
    </main>
  );
}

export default App;
