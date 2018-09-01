export default function (number: string): string {

    number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    number = "€ " + number;
    return number
}
