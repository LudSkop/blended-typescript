//Типізуйте функцію повністю: параметри і повернення функції.

interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}
interface CreateUserParams {
  name: string;
  age: number;
}
function createUser({ name, age }: CreateUserParams): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: "Alice", age: 30 }));
