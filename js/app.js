"use strict";
var parentElement = document.getElementById("kittenProfiles");
var table = document.createElement('table');
parentElement.appendChild(table);

//Lab 6B

//Here I will start to make function
var hours = ["6 am", "7 am", "8 am", " 9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"];


function Shop(min, max, avg, locationName) {
    this.total = 0;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.avgcookiesPerHour = [];
    this.locationName = locationName;
}


Shop.prototype.getRandomCustomerPerHour = function () {

    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}


Shop.prototype.getAvgcookiesPerHour = function () {
    for (let index = 0; index < hours.length; index++) {
        var calc = this.getRandomCustomerPerHour() * this.avg;
        this.total = this.total + calc;
        this.avgcookiesPerHour.push(calc);

    }
    // console.log(this.avgcookiesPerHour);

}


var shopOne = new Shop(23, 65, 6.3, "Seattle");

var shopTwo = new Shop(3, 24, 1.2, "Tokyo");

var shopThree = new Shop(11, 38, 3.7, "Dubai");
var shopFour = new Shop(20, 38,2.3, "Paris");
var shopFive = new Shop(2,16, 4.6, "Lima");

//console.log("Hello "+shopOne);


Shop.prototype.renderHeaderTable = function () {
    
    var tHeader = document.createElement("thead");

    var emptycell = document.createElement("th");
    emptycell.textContent ='';
    tHeader.appendChild(emptycell);

    //3. creat ul 
    /** */
    for (var index = 0; index < hours.length; index++) {
        var tdelemnt = document.createElement('td');
        tdelemnt.textContent = hours[index];
        tHeader.appendChild(tdelemnt);
    }

    var totalCell = document.createElement("th");

    totalCell.textContent = 'Daily Location Total';
    tHeader.appendChild(totalCell);

    table.appendChild(tHeader);

}

Shop.prototype.renderBodyTable = function () {

    var tbody = document.createElement("tbody");
    var emptycell = document.createElement("td");
    emptycell.textContent = this.locationName;
    tbody.appendChild(emptycell);


    for (var index = 0; index < hours.length; index++) {
        var tdelemnt = document.createElement('td');
        tdelemnt.textContent = Math.floor(this.avgcookiesPerHour[index]);
        tbody.appendChild(tdelemnt);
        
       // this.total = this.total + Math.floor(this.avgcookiesPerHour[index]);
        
       
    } var totalcell = document.createElement("td");
    totalcell.textContent = Math.floor( this.total);
    tbody.appendChild(totalcell);
    table.appendChild(tbody);


}

shopOne.getRandomCustomerPerHour();
shopOne.getAvgcookiesPerHour();

shopOne.renderHeaderTable();

shopOne.renderBodyTable();

shopTwo.getRandomCustomerPerHour();
shopTwo.getAvgcookiesPerHour();
shopTwo.renderBodyTable();


shopThree.getRandomCustomerPerHour();
shopThree.getAvgcookiesPerHour();
shopThree.renderBodyTable();


shopFour.getRandomCustomerPerHour();
shopFour.getAvgcookiesPerHour();
shopFour.renderBodyTable();


shopFive.getRandomCustomerPerHour();
shopFive.getAvgcookiesPerHour();
shopFive.renderBodyTable();
