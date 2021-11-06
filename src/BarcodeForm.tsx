import React, { FormEvent, useState } from "react";

type Props = {
  disabled?: boolean;
  errorMessage?: string;
  onSubmit: (text: string, withText: boolean) => void;
};

function BarcodeForm({ disabled, errorMessage, onSubmit }: Props) {
  const [text, setText] = useState("");
  const [withText, setWithText] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(text, withText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Text</label>
        <input
          disabled={disabled}
          id="text"
          onChange={(e) => setText(e.currentTarget.value)}
          value={text}
        />
      </div>

      <div>
        <input
          checked={withText}
          id="withText"
          onChange={(e) => setWithText(e.currentTarget.checked)}
          type="checkbox"
        />
        <label className="checkbox" htmlFor="withText">
          Generate barcode with text
        </label>
      </div>

      {errorMessage && <div className="error">{errorMessage}</div>}

      <div>
        <button disabled={disabled} type="submit">
          Generate
        </button>
      </div>
    </form>
  );
}

export default BarcodeForm;
