'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var branch = [];
var parent = document.getElementById('table');

function headerTable() {
    var tr = document.createElement('tr');

    parent.appendChild(tr);

    var header = document.createElement('th');
    header.textContent = 'branch';
    tr.appendChild(header);

    for (var i = 0; i < hours.length; i++) {
        header = document.createElement('th');

        header.textContent = hours[i];
        tr.appendChild(header);

    }
    header = document.createElement('th');
    header.textContent = " Total";
    tr.appendChild(header);
}
headerTable();

function footerTable() {
    var tr = document.createElement('tr');
    parent.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = 'total : ';
    tr.appendChild(td);

    var finalTotal = 0;

    for (var i = 0; i < hours.length; i++) {
        td = document.createElement('td');

        var branchesTotal = 0;

        for (var j = 0; j < branch.length; j++) {
            branchesTotal += branch[j].cookiesPerHour[i];
            // td.textContent = branchesTotal //we need to ch
        }
        td.textContent = branchesTotal;
        finalTotal += branchesTotal;
        tr.appendChild(td);
    }
    td = document.createElement('td');
    td.textContent = finalTotal;
    tr.appendChild(td);
}

function Branch(brach, max, min, avCookies) {
    this.name = brach;
    this.max = max;
    this.min = min;
    this.avCookies = avCookies;
    this.total = 0;
    this.cookiesPerHour = [];
    branch.push(this);
}
Branch.prototype.cookiesHourly = function() {
    //  console.log(cookiesPerHour)
    var cookiesPerHourpPa;
    for (var i = 0; i < hours.length; i++) {
        cookiesPerHourpPa = ranNum(this.min, this.max, this.avCookies);

        this.cookiesPerHour.push(cookiesPerHourpPa);
        //  this.total = this.dailyTotal + cookiesPerHourpPa;
        // totalHours[i] += cookiesPerHourpPa;
    }
    // totalHours[totalHours.length - 1] += this.total;
}

Branch.prototype.render = function() {

    var tr = document.createElement('tr');

    parent.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);

    for (var i = 0; i < hours.length; i++) {
        td = document.createElement('td');
        this.total += this.cookiesPerHour[i];

        td.textContent = this.cookiesPerHour[i];
        // this.total += this.cookiesHourly();
        // td.textContent = this.cookiesHourly()
        tr.appendChild(td);

    }
    td = document.createElement('td');
    td.textContent = this.total;

    tr.appendChild(td);
}




var Seatel = new Branch('Seatle', 65, 23, 6.3);
var Tokio = new Branch('Tokyo', 3, 24, 1.2);
var Dubai = new Branch('Dubai', 11, 38, 3.7);
var Paris = new Branch('Paris', 20, 38, 2.3);
var Lima = new Branch('Lima', 2, 16, 4.6);

for (var i = 0; i < branch.length; i++) {
    branch[i].cookiesHourly();
    branch[i].render();
    // console.log(branch[i].cookiesHourly(), branch[i].render());

}
footerTable();

function ranNum(min, max, avCookies) {
    // console.log(max, min, avCookiesPurchased)
    var random = Math.ceil(Math.random() * (max - min + 1) + min); // 0 - 1
    var secondRandom = Math.ceil(random * avCookies);
    // console.log(secondRandom)
    return secondRandom;
}