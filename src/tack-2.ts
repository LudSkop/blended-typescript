// Завдання:
// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.

function convertCurrency({
  amount,
  currency,
}: {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 3, currency: "USD" });

// Завдання:
// Типізуйте user.
// Зробіть властивість id тільки для читання.
interface User {
  readonly id: string;
  name: string;
  age: number;
  active: boolean;
}
const user: User = { id: "1", name: "Charlie", age: 25, active: true };
console.log(user);

// Завдання:
// Додайте до змінної dimensions явну типізацію.
// Переконайтеся, що TypeScript не дозволяє додавати до масиву значення інших типів (наприклад, рядки).

const dimensions: number[] = [1920, 1080];
dimensions.push(1440); // Дозволено
console.log(dimensions);
