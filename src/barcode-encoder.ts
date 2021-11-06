export type CodeSet = "A" | "B" | "C";
export const START_CODES: Record<CodeSet, number> = {
  A: 203,
  B: 204,
  C: 205,
};
export const STOP_PATTERN = 206;

const ASCII_DELTA = 32;

function encodeBarcode(input: string): string {
  if (input.length < 1) {
    throw new Error("Input should be at least one character long");
  }
  const codeSet = determineCodeSet(input);

  if (codeSet === "C") {
    return encodeOnlyDigitsBarcode(input);
  }

  // Add start code
  let result = String.fromCharCode(START_CODES[codeSet]);
  let sum = START_CODES[codeSet] - 100;

  // Convert characters
  for (let i = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);

    if (c > 126) {
      throw new Error("Invalid character found");
    }

    result += input[i];
    sum += (c - ASCII_DELTA) * (i + 1);
  }

  // Add checksum
  const checksum = sum % 103;
  result += String.fromCharCode(checksum + ASCII_DELTA);

  // Add end code
  result += String.fromCharCode(STOP_PATTERN);

  return result;
}

function encodeOnlyDigitsBarcode(input: string): string {
  // Add start code
  let result = String.fromCharCode(START_CODES["C"]);
  let sum = START_CODES["C"] - 100;

  // Convert characters
  const segments = input.match(/.{1,2}/g);

  if (segments === null) {
    throw new Error("Could not find digits in input string");
  }

  for (let i = 0; i < segments.length; i++) {
    const value = parseInt(segments[i], 10);

    result += String.fromCharCode(value + ASCII_DELTA);
    sum += value * (i + 1);
  }

  // Add checksum
  const checksum = sum % 103;
  result += String.fromCharCode(checksum + ASCII_DELTA);

  // Add end code
  result += String.fromCharCode(STOP_PATTERN);

  return result;
}

function determineCodeSet(input: string): CodeSet {
  const array = Array.from(input);

  if (array.every((c) => !isNaN(parseInt(c, 10)))) {
    return "C";
  }

  if (array.find((c) => c.charCodeAt(0) > 95)) {
    return "B";
  }

  return "A";
}

export default encodeBarcode;
