export function generateRandomString() {
  let firstPart = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  let secondPart = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  let thirdPart = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `${firstPart}-${secondPart}-${thirdPart}`;
}
