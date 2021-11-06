import React, { useState } from "react";
import Barcode from "./Barcode";
import encodeBarcode from "./barcode-encoder";
import BarcodeForm from "./BarcodeForm";

type State = {
  busy: boolean;
  result?: string;
  withText: boolean;
};

function App() {
  const [{ busy, result, withText }, setState] = useState<State>({
    busy: false,
    withText: false,
  });
  const handleGeneration = (text: string, withText: boolean) => {
    // Seems stupid right now but we'll move the barcode generation to an API later on
    setState({ busy: true, result: undefined, withText });
    setState({ busy: false, result: encodeBarcode(text), withText });
  };

  return (
    <main>
      <h1>Barcode 128</h1>
      <BarcodeForm disabled={busy} onSubmit={handleGeneration} />

      {result && <Barcode text={result} withText={withText} />}
    </main>
  );
}

export default App;
