let products =new Set();
function addProduct(product)
{
  products.add(product);
  console.log(`Товар "${product}" был добавлен в список.`);
}
function removeProduct(product)
{
  let isRemoved=products.delete(product);
  if (isRemoved) {
    console.log(`Товар "${product}" был удален из списка.`);
  } else {
    console.log(`Товар "${product}" не найден в списке.`);
  }
}
function hasProduct(product)
{
  if (products.has(product)) {
    console.log(`Товар "${product}" присутствует в списке.`);
  } else {
    console.log(`Товар "${product}" отсутствует в списке.`);
  }
}
function getProductCount() {
  let count = products.size;
  console.log(`Количество товаров в списке: ${count}.`);
}
addProduct('Яблоко');
addProduct('Апельсин');
hasProduct('Яблоко');
hasProduct('Груша');
removeProduct('Яблоко');
getProductCount();

let students=new Set();
function addStudent(student) {
  students.add(student);
  console.log(`Студент ${student.fullName} был добавлен в список.`);
}

function removeStudent(studentId) 
{
  let removedStudent = null;
  for (let student of students) 
  {
    if (student.studentId === studentId) {
      removedStudent = student;
      students.delete(student);
      break;
    }
  }
  if (removedStudent) {
    console.log(`Студент ${removedStudent.fullName} был удален из списка.`);
  } else {
    console.log(`Студент с номером зачетки ${studentId} не найден в списке.`);
  }
}
function FilterStudents(group)
{
  console.log(`Студенты ${group} группы:`)
  for(let student of students)
  {
    if(student.group==group)
    {
      console.log(`${student.fullName} (${student.studentId})`);
    }
  }
}
function sortStudents()
{
  let arrayStudent=Array.from(students);
  arrayStudent.sort((a,b)=>a.studentId-b.studentId);
  students=new Set(arrayStudent)
}
let student1 = {
  studentId: 123,
  group: "Группа 1",
  fullName: "Иванов Иван",
};

let student2 = {
  studentId: 456,
  group: "Группа 2",
  fullName: "Петров Петр",
};

let student3 = {
  studentId: 789,
  group: "Группа 1",
  fullName: "Сидоров Сидор",
};

addStudent(student3);
addStudent(student1);
addStudent(student2);
for( let student of students)
{
  console.log(`${student.fullName} (${student.studentId})`)
}
sortStudents();
for( let student of students)
{
  console.log(`${student.fullName} (${student.studentId})`)
}
removeStudent(456);
FilterStudents("Группа 1");
sortStudents();
for( let student of students)
{
  console.log(`${student.fullName} (${student.studentId})`)
}

let products2 = new Map();

function addProduct2(id, name, quantity, price) {
  if (products2.has(id)) {
    console.log(`Товар с ID ${id} уже существует в списке.`);
    return;
  }

  let product = {
    name: name,
    quantity: quantity,
    price: price,
  };

  products2.set(id, product);
  console.log(`Товар с ID ${id} был добавлен в список.`);
}
function removeProductById(id) {
  if (products2.has(id)) {
    products2.delete(id);
    console.log(`Товар с ID ${id} был удален из списка.`);
  } else {
    console.log(`Товар с ID ${id} не найден в списке.`);
  }
}
function removeProductsByName(name) {
  let count = 0;

  for (let [id, product] of products2) {
    if (product.name === name) {
      products2.delete(id);
      count++;
    }
  }

  console.log(`Удалено ${count} товар(ов) с названием "${name}".`);
}
function updateProductQuantity(id, newQuantity) {
  if (products2.has(id)) {
    let product = products2.get(id);
    product.quantity = newQuantity;
    console.log(`Количество товара с ID ${id} изменено на ${newQuantity}.`);
  } else {
    console.log(`Товар с ID ${id} не найден в списке.`);
  }
}
function updateProductPrice(id, newPrice) {
  if (products2.has(id)) {
    const product = products2.get(id);
    product.price = newPrice;
    console.log(`Цена товара с ID ${id} изменена на ${newPrice}.`);
  } else {
    console.log(`Товар с ID ${id} не найден в списке.`);
  }
}
function calculateItemCount() {
  const count = products.size;
  console.log(`Количество товарных позиций: ${count}.`);
}
function calculateTotalPrice() {
  let total = 0;

  for (const [id, product] of products2) {
    const { quantity, price } = product;
    total += quantity * price;
  }

  console.log(`Сумма стоимости всех товаров: ${total}.`);
}
addProduct2(1, "Товар 1", 2, 10);
addProduct2(2, "Товар 2", 3, 15);
addProduct2(3, "Товар 3", 1, 20);

removeProductById(2);
removeProductsByName("Товар 1");

updateProductQuantity(3, 5);
updateProductPrice(3, 25);

calculateItemCount();
calculateTotalPrice();

let cache =new WeakMap();
function func(obj)
{
  if (cache.has(obj)) {
    console.log('Берем данные из кэша.');
    return cache.get(obj);
  }
  console.log('Выполняем функцию и сохраняем результат в кэше.');
  let result = {...obj,processed: true};
  cache.set(obj, result);
  return result;
}
let obj1 = { name: 'Object 1' };
let result1 = func(obj1);
console.log(result1); 
let obj2 = { name: 'Object 2' };
let result2 = func(obj2);
console.log(result1);
let cachedResult1 = func(obj1);
console.log(cachedResult1);