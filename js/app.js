
// 1. вывести одной строкой минимальное значние массива array с помощью деструктуризации и Math
const array = [1, 2, 3, 4, 6, 710, 34013, 13];
const minValue = Math.min(...array);
console.log(minValue);

// 2.функция multiply не принимает явно никаких параметров
function multiply() {
  if (arguments.length === 0) {
    return 0; 
  }
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i]; 
  }
  return result;
}
const result = multiply(100, 200, 83902, 1230);
console.log(result);
// В результате фукнции должно вернутся число, которое является результатом умножения всех аргументов переданых в функцию

// 3. У нас есть фукниця totalPrice, с помощью деструктуризации объекта сделать так, что б функция работала.
const product = {
  productName: 'Water',
  price: 20,
  count: 3
}
function totalPrice({ price, count }) {
  return price * count;
}
const resultat = totalPrice(product);
console.log(resultat);
// //4. написать объект в котором будет свойство items (изначально пустой массив), 
// // метод объекта setItems который принимает массив значений и устанавливает этот массив как значение свойста items
// // метод объекта sum котроый возвращает сумму всех элементов массива items 
// // метод maxValue который возвращает максимальное значение из массива items с использованием деструктуризации массива.
const myObject = {
  items: [],
  setItems(arr) {
    this.items = arr;
  },
  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  },
  maxValue() {
    if (this.items.length === 0) {
      return undefined; 
    }
    const [maxValue] = this.items.reduce(([max], val) => (val > max ? [val] : [max]), [-Infinity]);
    return maxValue;
  },
};

                                                        // Пример 
                                            // myObject.setItems([1, 2, 3, 4, 5]);
                                            // console.log(myObject.sum()); 
                                            // console.log(myObject.maxValue());

// // 5. Написать функционал что б при вызове showPrediction выводилась случайная фраза из массива predictsArr1 для predictions1 и predictsArr2 для predictions2

// const predictsArr1 = [
//     'Удача придет откуда не ждете.',
//     'Давние долги будут возвращены вам.',
//     'Вас ожидает неожиданное денежное поступление.',
//     'Все неоконченные дела будут завершены.',
//     'Яркое приключение уже поджидает вас.',
//     'Планирование времени поможет вам не опоздать на встречу.',
//     'Интуиция на этот раз не подведет вас. Используйте это.',
//     'Прислушайтесь к себе и ответ на вопрос будет найден.',
//     'Появится возможность отправиться в дорогу.',
//     'Ваш ценный опыт сможет кому-то помочь, если перестанете его прятать в себе.',
//     'Вам не удастся понравиться абсолютно всем, не тратьте на это энергию.',
//     'Одежда, которая вас старит, не достанется вам.'
//   ]
  
const predictsArr1 = [
  'Удача придет откуда не ждете.',
  'Давние долги будут возвращены вам.',
];

const predictsArr2 = [
  'Одежда, которая вас старит, не достанется вам.',
  'Еще одна фраза.',
];
const obj = {
  predictions1: [],
  predictions2: [],
  setPredictions(arr1, arr2) {
    this.predictions1 = arr1;
    this.predictions2 = arr2;
  },
  showPrediction() {
    const randomIndex1 = Math.floor(Math.random() * this.predictions1.length);
    const randomIndex2 = Math.floor(Math.random() * this.predictions2.length);
    const prediction1 = this.predictions1[randomIndex1];
    const prediction2 = this.predictions2[randomIndex2];
    console.log(`Prediction 1: ${prediction1}`);
    console.log(`Prediction 2: ${prediction2}`);
  },
};
obj.setPredictions(predictsArr1, predictsArr2);

obj.showPrediction();
