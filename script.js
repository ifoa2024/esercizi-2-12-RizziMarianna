//ESERCIZIO 2
//   let list = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//   ];

// function addGreeting(list) {
//     return list.map(person => {
//       person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`;
//       return person;
//     });
//   }
//   let result = addGreeting(list);
//   console.log(result);

//------------------------------------------------------------------------------------------------------------------------------

// ESERCIZIO 3
//   let list = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
//   ];
// function GreenEyes(list) {
//     return list.some(person => person.eyes === 'Green');
//   }
//   console.log(GreenEyes(list));
//   let NoGreenEyes = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' }
//   ];
  
//   console.log(GreenEyes(NoGreenEyes));

//------------------------------------------------------------------------------------------------------------------------------

//ESERCIZIO 4
  
//   let list = [
//     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
//   ];
  
// function findPythonDeveloper(list) {
//     const developer = list.find(person => person.language === 'Python');
    
//     if (developer) {
//       return `${developer.firstName}, ${developer.country}`;
//     } else {
    
//       return 'Non ci sono sviluppatori Python';
//     }
//   }

//   console.log(findPythonDeveloper(list));

//------------------------------------------------------------------------------------------------------------------------------

//ESERCIZIO 5
// function checkUserStatus(list) {
//     list.forEach(person => {
//       // true
//       if (person.logged) {
//         alert(`${person.firstName} ${person.lastName}: L'utente è stato registrato.`);
//       } else {
//         //false
//         alert(`${person.firstName} ${person.lastName}: L'utente non è registrato.`);
//       }
//     });
//   }
  
//   let list = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
//   ];
  
//   checkUserStatus(list);

//------------------------------------------------------------------------------------------------------------------------------

//ESERCIZIO 6 (VEDI HTML e decommentalo )
// let text = prompt('Come ti chiami?');
// if (text) {
//   document.getElementById('welcomeMessage').innerText = `Ciao, ${text}! Benvenuto nel nostro sito.`;
// } else {
//   document.getElementById('welcomeMessage').innerText = 'Ciao, visitatore!';
// }

//------------------------------------------------------------------------------------------------------------------------------

//ESERCIZIO 7 (vedi HTML e decommentalo)

// let openingDays = [
//     { day: 'Lunedì', from: '9.00', to: '18.00' },
//     { day: 'Martedì', from: '9.00', to: '18.00' },
//     { day: 'Mercoledì', from: '9.00', to: '18.00' },
//     { day: 'Giovedì', from: '9.00', to: '18.00' },
//     { day: 'Sabato', from: '9.00', to: '18.00' },
//     { day: 'Domenica', from: '9.00', to: '18.00' }
//   ];
  
//   function OpeningHours() {
//     const ul = document.getElementById('openings');
    
//     openingDays.forEach(day => {
//       const li = document.createElement('li');
//       li.classList.add('p-4', 'bg-white', 'border', 'border-gray-300', 'rounded', 'shadow-sm');
//       li.innerText = `${day.day}: dalle ${day.from} alle ${day.to}`;
      
//       ul.appendChild(li);
//     });
//   }
  
//  OpeningHours();

//------------------------------------------------------------------------------------------------------------------------------

//ESERCIZIO 8 (vedi HTML e decommentalo)
// const title = document.getElementById('title');
// const button = document.getElementById('toggleButton');


// button.addEventListener('click', function() {
// //questo toggle servirà per cambiare il colorre al titolo
//   title.classList.toggle('text-red-500');
// });

//------------------------------------------------------------------------------------------------------------------------------

//ESERCIZIO 9 (vedi HTML e decommenta) 

// const list = [
//     { firstName: 'Harry', country: 'Stati Uniti d\'America', flag: 'us', age: 19, language: 'Python' },
//     { firstName: 'Kseniya', country: 'Francia', flag: 'fr', age: 29, language: 'JavaScript' },
//     { firstName: 'Jing', country: 'Spagna', flag: 'es', age: 39, language: 'Ruby' },
//     { firstName: 'Noa', country: 'Inghilterra', flag: 'gb', age: 40, language: 'Ruby' },
//     { firstName: 'Andrei', country: 'Germania', flag: 'de', age: 59, language: 'C' },
//     { firstName: 'Maria', country: 'Colombia', flag: 'co', age: 60, language: 'C' },
//     { firstName: 'Lukas', country: 'Giappone', flag: 'jp', age: 75, language: 'Python' },
//     { firstName: 'Chloe', country: 'Svizzera', flag: 'ch', age: 88, language: 'Ruby' },
//     { firstName: 'Viktoria', country: 'Argentina', flag: 'ar', age: 98, language: 'PHP' },
//     { firstName: 'Piotr', country: 'Italia', flag: 'it', age: 48, language: 'JavaScript' }
// ];
// console.log(list);
// // CREO CARD
// function createCard(person) {
//     const card = document.createElement('div');
//     card.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-lg', 'text-center', 'w-full', 'max-w-xs');

//     card.innerHTML = `
//         <div class="flex justify-center">
//             <i class="flag-icon flag-icon-${person.flag} text-4xl"></i>
//         </div>
//         <h3 class="mt-4 text-xl font-bold">${person.firstName}, ${person.age}</h3>
//         <p class="mt-2 text-gray-600">${person.language}</p>
//     `;

//     return card;
// }

// // metto cars in container
// const container = document.getElementById('cards-container');

// list.forEach(person => {
//     const card = createCard(person);
//     container.appendChild(card);
// });

//------------------------------------------------------------------------------------------------------------------------------

//ESERCIZIO 10 (vedi HTML e decommenta)
// const list = [
//     { id: 1, linkName: 'home', page: 'home.html', icon: 'bi bi-house-door' },
//     { id: 2, linkName: 'chi siamo', page: 'chi-siamo.html', icon: 'bi bi-people' },
//     { id: 3, linkName: 'servizi', page: 'servizi.html', icon: 'bi bi-bicycle' },
//     { id: 4, linkName: 'categorie', page: 'categorie.html', icon: 'bi bi-tag' },
//     { id: 5, linkName: 'blog', page: 'blog.html', icon: 'bi bi-newspaper' },
//     { id: 6, linkName: 'contatti', page: 'contatti.html', icon: 'bi bi-send' }
// ];

// function generateNavbar() {
//     const navbar = document.getElementById('navbar');

//     list.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.classList.add('flex', 'items-center', 'space-x-2');
    
//         const link = document.createElement('a');
//         link.href = item.page;
//         link.classList.add('flex', 'items-center', 'text-white', 'hover:text-gray-200', 'transition', 'duration-300');
        
//         const icon = document.createElement('i');
//         icon.setAttribute('class', item.icon); 
//         icon.classList.add('text-xl');
        
//         const linkText = document.createElement('span');
//         linkText.textContent = item.linkName;
        
    
//         link.appendChild(icon);
//         link.appendChild(linkText);
//         listItem.appendChild(link);
//         navbar.appendChild(listItem);
//     });
// }
// generateNavbar();

//------------------------------------------------------------------------------------------------------------------------------


//ESERCIZIO 11 (vedi HTML e CSS)

// let navbar = document.querySelector('.navbar');
// document.addEventListener('scroll', () => {
 
//   let scrolled = window.scrollY;

//   if (scrolled > 50) {
//     navbar.classList.add('scrolled'); 
//   } else {
//     navbar.classList.remove('scrolled');
//   }
// });

//------------------------------------------------------------------------------------------------------------------------------

//ESERCIZIO 12 (HTML E CSS)

// function calculate() {
//     // Ottieni i valori degli input
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const operation = document.getElementById('operation').value;

//     // Controlla se i numeri sono validi
//     if (isNaN(num1) || isNaN(num2)) {
//         alert('Per favore inserisci numeri validi.');
//         return;
//     }

//     let result;

//     // Esegui l'operazione selezionata
//     switch (operation) {
//         case 'sum':
//             result = num1 + num2;
//             break;
//         case 'subtraction':
//             result = num1 - num2;
//             break;
//         case 'multiplication':
//             result = num1 * num2;
//             break;
//         case 'division':
//             if (num2 === 0) {
//                 alert('Non puoi dividere per zero!');
//                 return;
//             }
//             result = num1 / num2;
//             break;
//         default:
//             alert('Seleziona un\'operazione!');
//             return;
//     }

//     // Mostra il risultato e aggiorna il campo num1 con il risultato
//     document.getElementById('result').innerText = 'Totale: ' + result;
    
//     // Imposta il risultato nel campo num1 per continuare con il calcolo
//     document.getElementById('num1').value = result;

//     // Svuota il campo num2 e resetta la selezione dell'operazione
//     document.getElementById('num2').value = '';
//     document.getElementById('operation').value = '';
// }