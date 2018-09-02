/**
 * Filter to view currency numbers
 * @param number number being passed to match comma pattern
 */
export default function (number: string): string {

    number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    number = "€ " + number;
    return number
}
