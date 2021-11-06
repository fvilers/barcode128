import React, { FormEvent, useState } from "react";

type Props = {
  disabled?: boolean;
  errorMessage?: string;
  onSubmit: (text: string) => void;
};

function BarcodeForm({ disabled, errorMessage, onSubmit }: Props) {
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Text</label>
        <input
          disabled={disabled}
          id="text"
          onInput={(e) => setText(e.currentTarget.value)}
          value={text}
        />
      </div>

      {errorMessage && <div>{errorMessage}</div>}

      <div>
        <button disabled={disabled} type="submit">
          Generate
        </button>
      </div>
    </form>
  );
}

export default BarcodeForm;
