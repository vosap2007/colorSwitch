// import colors from './src/colors';
// import randomIntegerFromInterval from './src/random';
// import changeBackground from './src/backgroundStyle';
// import {buttonEnable, buttonDisable} from './src/buttonActive';

const { reject } = require("q");

// const buttonStartEl = document.querySelector('[data-action="start"]');
// buttonStartEl.addEventListener('click', callbackButtonStart);

// const buttonStopEl = document.querySelector('[data-action="stop"]');
// buttonStopEl.addEventListener('click', callbackButtonStop);

// let idColorSetInterval = 0;

// function callbackButtonStart() {
//     idColorSetInterval = setInterval(() => {
//         let indexColor = randomIntegerFromInterval(colors.length, -1);
//     let color = colors[indexColor];
    
//     changeBackground(color);
//     }, 1000);

//     buttonEnable(buttonStartEl);
// };

// function callbackButtonStop() {
//     clearInterval(idColorSetInterval);

//     buttonDisable(buttonStartEl);
// };


// const delay = ms => {
//     return new Promise (resolved => {
//       setTimeout(() => {
//           resolved(ms);
//       }, ms);  
//     })
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms

// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];
  
//   const toggleUserState = (allUsers, userName) => {
//     const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user,
//       );

//       return new Promise((resolve, reject) => {
//           resolve(updatedUsers);
//           reject(updatedUsers);
//       })
//   };
  
//   const logger = updatedUsers => console.table(updatedUsers);
  
//   /*
//    * Сейчас работает так
//    */
// //   toggleUserState(users, 'Mango', logger);
// //   toggleUserState(users, 'Lux', logger);
  
//   /*
//    * Должно работать так
//    */
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);

// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const makeTransaction = (transaction) => {
//     const delay = randomIntegerFromInterval(200, 500);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//       const canProcess = Math.random() > 0.3;

//       if (canProcess) {
//         resolve(transaction.id, delay);
//       } else {
//         reject(transaction.id);
//       }
//     }, delay);
//     })
//   };
  
//   const logSuccess = (id, time) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
//   };
  
//   const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };
  
//   /*
//    * Работает так
//    */
// //   makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// //   makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// //   makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// //   makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
//   /*
//    * Должно работать так
//    */
//   makeTransaction({ id: 70, amount: 150 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  });