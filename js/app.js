'use strict';

var array = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var parent = document.getElementById('table');
function headerTable() {
    var trElem = document.createElement('tr');
    parent.appendChild(trElem);

    var header = document.createElement('th');
    trElem.appendChild(header);

    for (var i = 0; i < array.length; i++) {
        header = document.createElement('th');

        header.textContent = array[i];
        trElem.appendChild(header);

    }
    header = document.createElement('th');
    header.textContent = " Total";
    trElem.appendChild(header);
}

headerTable();

function Branch( brach, max, min, avCookies) {
    this.hours = array;
    this.branch = brach;
    this.max = max;
    this.min = min;
    this.avCookies = avCookies;
    this.total=0

}
Branch.prototype.render = function () {

    var trElem = document.createElement('tr');
    
    parent.appendChild(trElem);

    var header = document.createElement('td');
    header.textContent = this.branch
    trElem.appendChild(header);

    var cookiesHourly = ranNum(this.min, this.max, this.avCookies);

    for (var i = 0; i < array.length; i++) {
        header = document.createElement('td');
        this.total+=this.costomer();
        header.textContent=this.costomer()
        trElem.appendChild(header);

    }
    header = document.createElement('td');
    header.textContent = this.total;
    trElem.appendChild(header);
}

Branch.prototype.costomer = function() {
    var cookiesHourly = ranNum(this.min, this.max, this.avCookies);
    //  console.log(cookiesHourly)

    return cookiesHourly;

}
var Seatel =new Branch('Seatle',65,23,6.3);
var Tokio =new Branch('Tokyo',3,24,1.2);
var Dubai =new Branch('Dubai',11,38,3.7);
var Paris =new Branch('Paris',20,38,2.3);
var Lima =new Branch('Lima',2,16,4.6);
Seatel.render();
Tokio.render();
Dubai.render();
Paris.render();
Lima.render();

function ranNum(min, max, avCookies) {
    // console.log(max, min, avCookiesPurchased)
    var random = Math.floor(Math.random() * (max - min + 1) + min); // 0 - 1
    var secondRandom = Math.ceil(random * avCookies);
    // console.log(secondRandom)
    return secondRandom;
}
// var Seattle = {
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     brach: 'Seattle',
//     max: 65,
//     min: 23,
//     avCookiesPurchased: 6.3,


//     getRandomCostomer: function() {
//         var randomCostomerNom = getRandomNumber(this.min, this.max, this.avCookiesPurchased);
//         //  console.log(randomCostomerNom)

//         return randomCostomerNom;

//     }

//     render: function() {
//         var main = document.getElementById('main');
//         var ul = document.createElement('ul');
//         main.appendChild(ul);
// for (let i = 0; i < this.hours.length; i++) {

//     var liEle = document.createElement('li');
//     liEle.textContent = this.hours[i]
//     ul.appendChild(liEle)

//     var spanEle = document.createElement('span');
//     spanEle.textContent = ' : ' + this.getRandomCostomer() + ' cookies';
//     liEle.appendChild(spanEle);
//     // console.log(typeof(Number(spanEle)));
// }
// var arrayEle = document.createElement('array');
// arrayEle.textContent = this.spanEle;
// main.appendChild(arrayEle);


//         var pEle = document.createElement('p');
//         pEle.textContent = ' total cookies for ' + this.brach + ' is : ';
//         main.appendChild(pEle)


//     }

// };
// Seattle.getRandomCostomer()
// Seattle.render()

// var tokyo = {
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     brach: 'tokyo',
//     max: 24,
//     min: 3,
//     avCookiesPurchased: 1.2,


//     getRandomCostomer: function() {
//         var randomCostomerNom = getRandomNumber(this.min, this.max, this.avCookiesPurchased);
//         //  console.log(randomCostomerNom)

//         return randomCostomerNom;

//     },

//     render: function() {
//         var main = document.getElementById('main');
//         var ul = document.createElement('ul');
//         main.appendChild(ul);
//         for (let i = 0; i < this.hours.length; i++) {

//             var liEle = document.createElement('li');
//             liEle.textContent = this.hours[i]
//             ul.appendChild(liEle)

//             var spanEle = document.createElement('span');
//             spanEle.textContent = ' : ' + this.getRandomCostomer() + ' cookies';
//             liEle.appendChild(spanEle);
//             //console.log(typeof(Number(spanEle)));
//         }
//         var arrayEle = document.createElement('array');
//         arrayEle.textContent = this.spanEle;
//         main.appendChild(arrayEle);


//         var pEle = document.createElement('p');
//         pEle.textContent = ' total cookies for ' + this.brach + ' is : ';
//         main.appendChild(pEle)


//     }

// };
// // Seattle.cookiesForHOurs()
// tokyo.getRandomCostomer()
// tokyo.render()


// var Dubai = {
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     brach: 'Dubai',
//     max: 38,
//     min: 11,
//     avCookiesPurchased: 3.7,


//     getRandomCostomer: function() {
//         var randomCostomerNom = getRandomNumber(this.min, this.max, this.avCookiesPurchased);
//         //  console.log(randomCostomerNom)

//         return randomCostomerNom;

//     },

//     render: function() {
//         var main = document.getElementById('main');
//         var ul = document.createElement('ul');
//         main.appendChild(ul);
//         for (let i = 0; i < this.hours.length; i++) {

//             var liEle = document.createElement('li');
//             liEle.textContent = this.hours[i]
//             ul.appendChild(liEle)

//             var spanEle = document.createElement('span');
//             spanEle.textContent = ' : ' + this.getRandomCostomer() + ' cookies';
//             liEle.appendChild(spanEle);
//             // console.log(typeof(Number(spanEle)));
//         }
//         var arrayEle = document.createElement('array');
//         arrayEle.textContent = this.spanEle;
//         main.appendChild(arrayEle);


//         var pEle = document.createElement('p');
//         pEle.textContent = ' total cookies for ' + this.brach + ' is : ';
//         main.appendChild(pEle)


//     }

// };
// // Seattle.cookiesForHOurs()
// Dubai.getRandomCostomer()
// Dubai.render()



// var Paris = {
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     brach: 'Paris',
//     max: 38,
//     min: 20,
//     avCookiesPurchased: 2.3,


//     getRandomCostomer: function() {
//         var randomCostomerNom = getRandomNumber(this.min, this.max, this.avCookiesPurchased);
//         //  console.log(randomCostomerNom)

//         return randomCostomerNom;

//     },

//     render: function() {
//         var main = document.getElementById('main');
//         var ul = document.createElement('ul');
//         main.appendChild(ul);
//         for (let i = 0; i < this.hours.length; i++) {

//             var liEle = document.createElement('li');
//             liEle.textContent = this.hours[i]
//             ul.appendChild(liEle)

//             var spanEle = document.createElement('span');
//             spanEle.textContent = ' : ' + this.getRandomCostomer() + ' cookies';
//             liEle.appendChild(spanEle);
//             // console.log(typeof(Number(spanEle)));
//         }
//         var arrayEle = document.createElement('array');
//         arrayEle.textContent = this.spanEle;
//         main.appendChild(arrayEle);


//         var pEle = document.createElement('p');
//         pEle.textContent = ' total cookies for ' + this.brach + ' is : ';
//         main.appendChild(pEle)


//     }

// };
// // Seattle.cookiesForHOurs()
// Paris.getRandomCostomer()
// Paris.render()



// var Lima = {
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     brach: 'Lima',
//     max: 16,
//     min: 2,
//     avCookiesPurchased: 4.6,


//     getRandomCostomer: function() {
//         var randomCostomerNom = getRandomNumber(this.min, this.max, this.avCookiesPurchased);
//         //  console.log(randomCostomerNom)

//         return randomCostomerNom;

//     },

//     render: function() {
//         var main = document.getElementById('main');
//         var ul = document.createElement('ul');
//         main.appendChild(ul);
//         for (let i = 0; i < this.hours.length; i++) {

//             var liEle = document.createElement('li');
//             liEle.textContent = this.hours[i]
//             ul.appendChild(liEle)

//             var spanEle = document.createElement('span');
//             spanEle.textContent = ' : ' + this.getRandomCostomer() + ' cookies';
//             liEle.appendChild(spanEle);
//             // console.log(typeof(Number(spanEle)));
//         }
//         var arrayEle = document.createElement('array');
//         arrayEle.textContent = this.spanEle;
//         main.appendChild(arrayEle);


//         var pEle = document.createElement('p');
//         pEle.textContent = ' total cookies for ' + this.brach + ' is : ';
//         main.appendChild(pEle)


//     }

// };
// // Seattle.cookiesForHOurs()
// Lima.getRandomCostomer()
// Lima.render()
