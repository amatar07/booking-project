/**
 * Filter to shorten values
 * @param text to be shortened
 */
export default function (text: string): string {
  if (text.length > 10) {
    return text.substr(0, 10) + '...';
  }
  return text;
}
