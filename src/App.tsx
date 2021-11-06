import React from "react";
import BarcodeForm from "./BarcodeForm";

function App() {
  const handleGeneration = (text: string) => {
    // TODO
    console.log("Generate barcode with", text);
  };

  return (
    <div>
      <h1>Barcode 128</h1>
      <BarcodeForm onSubmit={handleGeneration} />
    </div>
  );
}

export default App;
