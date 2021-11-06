import encodeBarcode, { START_CODES, STOP_PATTERN } from "./barcode-encoder";

describe("encodeBarCode", () => {
  test("should throw an error for empty string", () => {
    expect(() => encodeBarcode("")).toThrowError();
  });

  test("should throw an error for string with invalid character", () => {
    expect(() => encodeBarcode("ë")).toThrowError();
  });

  test("should return a code A result for string without character past '_'", () => {
    expect(encodeBarcode("TEST").charCodeAt(0)).toBe(START_CODES["A"]);
  });

  test("should return a code A result for string 'PJJ123C'", () => {
    expect(encodeBarcode("PJJ123C")).toBe("ËPJJ123CVÎ");
  });

  test("should return a code B result for string with character past '_'", () => {
    expect(encodeBarcode("test").charCodeAt(0)).toBe(START_CODES["B"]);
  });

  test("should return a code B result for string 'Wikipedia'", () => {
    expect(encodeBarcode("Wikipedia")).toBe("ÌWikipediaxÎ");
  });

  test("should return a code C result for string with only digits", () => {
    expect(encodeBarcode("0123456789").charCodeAt(0)).toBe(START_CODES["C"]);
  });

  test("should return a code C result for string '0123456789'", () => {
    expect(encodeBarcode("0123456789")).toBe("Í!7McyiÎ");
  });

  test("should return a for string that ends with the stop pattern", () => {
    const result = encodeBarcode("test");
    expect(result.charCodeAt(result.length - 1)).toBe(STOP_PATTERN);
  });
});
