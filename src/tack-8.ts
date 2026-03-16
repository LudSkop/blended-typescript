// Задача 9
// Завдання:
// 1. Створіть інтерфейс Container, що містить:
// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2. Створіть два контейнери:
// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.
// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.
// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).
// Примітка:
// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T | undefined;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3, 4, 5, 6],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};
numberContainer.addItem(10);
numberContainer.addItem(20);
numberContainer.addItem(30);

console.log(numberContainer.getItem(6));

const stringContainer: Container<string> = {
  items: ["Hello", "World"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};
stringContainer.addItem("Vlad");
stringContainer.addItem("Luda");
stringContainer.addItem("Charlie");

console.log(stringContainer.getItem(1));

function getLastElement<T>(items: T[]): T {
  return items[items.length - 1];
}

getLastElement(numberContainer.items);
getLastElement(stringContainer.items);
