import React, { useState } from "react";
import Barcode from "./Barcode";
import encodeBarcode from "./barcode-encoder";
import BarcodeForm from "./BarcodeForm";

type State = {
  busy: boolean;
  result?: string;
};

function App() {
  const [{ busy, result }, setState] = useState<State>({ busy: false });
  const handleGeneration = (text: string) => {
    // Seems stupid right now but we'll move the barcode generation to an API later on
    setState({ busy: true, result: undefined });
    setState({ busy: false, result: encodeBarcode(text) });
  };

  return (
    <main>
      <h1>Barcode 128</h1>
      <BarcodeForm disabled={busy} onSubmit={handleGeneration} />

      {result && <Barcode text={result} />}
    </main>
  );
}

export default App;
