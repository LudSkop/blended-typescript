// Завдання:
// 1. Створіть функцію getPermissions, яка приймає параметр role типу Role.
// 2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:
// Admin має права: "create", "read", "update", "delete"
// User має права: "read", "update"
// Guest має лише право: "read"
// 3. Типізуйте параметр і тип повернення функції getPermissions.
// 4. Перевірте, що TypeScript не дозволяє передати в getPermissions значення, якого немає в Role.

enum Role {
  Admin,
  User,
  Guest,
}
const permissions = {
  [Role.Admin]: ["create", "read", "update", "delete"],
  [Role.User]: ["read", "update"],
  [Role.Guest]: ["read"],
};

function getPermissions(role: Role): string[] {
  return permissions[role];
}
getPermissions(Role.Admin);
getPermissions(Role.User);
getPermissions(Role.Guest);
// getPermissions("SuperAdmin"); // Помилка: Argument of type '"SuperAdmin"' is not assignable to parameter of type 'Role'.
