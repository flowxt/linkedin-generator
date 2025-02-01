// // const form = document.querySelector("form");

// // function storeList() {
// //   window.localStorage.todoList = list.innerHTML;
// // }
// // function getTodos() {
// //   if (window.localStorage.todoList) {
// //     list.innerHTML = window.localStorage.todoList;
// //   } else {
// //     list.innerHTML = `<li>Cliquez sur le bouton pour ajouter un élément à la liste</li>`;
// //   }
// // }
// // window.addEventListener("load", getTodos);

// // form.addEventListener("submit", (e) => {
// //   e.preventDefault();
// //   list.innerHTML += `<li>${item.value}</li>`;
// //   item.value = "";
// //   storeList();
// // });

// // // Remover les éléments de la liste

// // list.addEventListener("click", (e) => {
// //   if (e.target.classList.contains("checked")) {
// //     e.target.remove();
// //   } else {
// //     e.target.classList.add("checked");
// //   }
// //   storeList();
// // });

// // --------------------------------------------------------------------------------
// // Partie 2
// // sotcker dans le local storage la liste des todos

// // Consulter le local storage au lancement de l'app pour rajouter les todos
// // --------------------------------------------------------------------------------

// // function changeColor() {
// //   const r = Math.floor(Math.random() * 255);
// //   const g = Math.floor(Math.random() * 255);
// //   const b = Math.floor(Math.random() * 255);
// //   const body = document.querySelector("body");
// //   body.style.backgroundColor = `rgb(${r},${g},${b})`;
// //   body.innerHTML = `rgb(${r},${g},${b})`;
// // }

// // // Jouer à interval de 1 seconde pour changer la couleur de fond
// // setInterval(() => {
// //   changeColor();
// // }, 2000);

// function sumArray(number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 10]));

// // Exercice 2 (guidé) : Trouver le plus grand nombre
// // Écris une fonction findMax qui prend un tableau de nombres et retourne le plus grand nombre du tableau.

// // 🛠 Piste :

// // Initialise une variable max avec la première valeur du tableau.
// // Parcours le tableau avec une boucle.
// // Si un élément est plus grand que max, mets à jour max.
// // Retourne max.

// function findMax(numbers) {
//   if (numbers.length === 0) return undefined; // Gérer le cas où le tableau est vide
//   let max = numbers[0]; // Initialise une variable max avec la première valeur du tableau
//   for (let i = 1; i < numbers.length; i++) {
//     // Parcours le tableau avec une boucle
//     if (numbers[i] > max) {
//       // Si un élément est plus grand que max
//       max = numbers[i]; // Mets à jour max
//     }
//   }
//   return max; // Retourne max
// }
// console.log(findMax([1, 2, 3, 43, 5, 10, 20]));

// // Exercice 3 (autonome) : Inverser une chaîne de caractères
// // Écris une fonction reverseString qui prend une chaîne de caractères et retourne la chaîne inversée.

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello"));
