"use strict";



var shopOne = {
    min: 23,
    max: 65,
    avg: 6.3,
    hours: ["6 am", "7 am", "8 am", " 9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"],
    location: "Seattle",
    getRandomCustomerPerHour: function () {
        this.min = Math.ceil(this.min);
        this.max = Math.floor(this.max);
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getAvgcookiesPerHour: function () {
        for (let index = 0; index < this.hours.length; index++) {

            this.avgcookiesPerHour.push(this.getRandomCustomerPerHour() * this.avg);

        }
        console.log(this.avgcookiesPerHour);
    },

    avgcookiesPerHour: [],
};


shopOne.getAvgcookiesPerHour();






var shopTwo = {
    min: 3,
    max: 24,
    avg: 1.2,
    hours: ["6 am", "7 am", "8 am", " 9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"],
    location: "Tokyo",
    getRandomCustomerPerHourOne: function () {
        this.min = Math.ceil(this.min);
        this.max = Math.floor(this.max);
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getAvgcookiesPerHourOne: function () {
        for (let index = 0; index < this.hours.length; index++) {

            this.avgcookiesPerHour.push(this.getRandomCustomerPerHourOne()* this.avg);

        }
        console.log(this.avgcookiesPerHour);
    },

    avgcookiesPerHour: [],
};


shopTwo.getAvgcookiesPerHourOne();

var paretnElement = document.getElementById("mySeattle");
var article = document.createElement('article');paretnElement.appendChild(article);
var list = document.createElement('ul');
article.appendChild(list);
//console.log(shopOne.avgcookiesPerHour.length);
var sumTwo = 0;
for (let index = 0; index < shopTwo.hours.length; index++) {
    
    var ListONE = document.createElement('li');

    ListONE.textContent = shopTwo.hours[index] + " " + parseInt(shopTwo.avgcookiesPerHour[index])  + " cookies";
     
    list.appendChild(ListONE);
    sumTwo +=shopTwo.avgcookiesPerHour[index];
}
document.getElementById("sumOne").innerHTML = "The Total is "+sumTwo;




/*

var  shopThree = {
  min : 11,
  max  : 38,
  avg :3.7,
  location : "Dubai",
   getRandomCustomerPerHour  :function (this) {
      this.min = Math.ceil(this.min);
      this.max = Math.floor(this.max);
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
    },
};
*/










var paretnElement = document.getElementById("mySeattle");
var article = document.createElement('article');paretnElement.appendChild(article);
var list = document.createElement('ul');
article.appendChild(list);
//console.log(shopOne.avgcookiesPerHour.length);
var sum = 0;
for (let index = 0; index < shopOne.hours.length; index++) {
    
    var ListONE = document.createElement('li');

    ListONE.textContent = shopOne.hours[index] + " " + shopOne.avgcookiesPerHour[index] + " cookies";
     
    list.appendChild(ListONE);
    sum +=shopOne.avgcookiesPerHour[index];
}
document.getElementById("sum").innerHTML = "The Total is "+sum;
console.log(sum);

/* mySeattle1 */


/*var paretnElementOne = document.getElementById("mySeattle1");
var articleOne = document.createElement('article');



paretnElementOne.appendChild(article);
var list = document.createElement('ul');

article.appendChild(list);


console.log(shopOne.avgcookiesPerHour.length);

for (let index = 0; index < shopTwo.avgcookiesPerHour.length; index++) {

    var ListONE = document.createElement('li');

    ListONE.textContent = shopTwo.hours[index] + " "+ shopTwo.avgcookiesPerHour[index] +" cookies";

    list.appendChild(ListONE);
    console.log(list);
}*/














var shopThree = {
    min: 11,
    max: 38,
    avg: 3.7,
    hours: ["6 am", "7 am", "8 am", " 9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"],
    location: "Dubai",
    getRandomCustomerPerHourOne: function () {
        this.min = Math.ceil(this.min);
        this.max = Math.floor(this.max);
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getAvgcookiesPerHourOne: function () {
        for (let index = 0; index < this.hours.length; index++) {

            this.avgcookiesPerHour.push(this.getRandomCustomerPerHourOne()* this.avg);
        }
        console.log(this.avgcookiesPerHour);
    },

    avgcookiesPerHour: [],
};

shopThree.getAvgcookiesPerHourOne();


var paretnElement = document.getElementById("mySeattleTwo");
var article = document.createElement('article');paretnElement.appendChild(article);
var list = document.createElement('ul');
article.appendChild(list);
//console.log(shopOne.avgcookiesPerHour.length);
var sum = 0;
for (let index = 0; index < shopThree.hours.length; index++) {
    
    var ListONE = document.createElement('li');

    ListONE.textContent = shopThree.hours[index] + " " + shopThree.avgcookiesPerHour[index] + " cookies";
     
    list.appendChild(ListONE);
    sum +=shopThree.avgcookiesPerHour[index];
}
document.getElementById("sumTwo").innerHTML = "The Total is "+sum;
console.log(sum);


/*Four */


var shopFour = {
    min: 20,
    max: 38,
    avg: 3.7,
    hours: ["6 am", "7 am", "8 am", " 9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"],
    location: "Paris",
    getRandomCustomerPerHourOne: function () {
        this.min = Math.ceil(this.min);
        this.max = Math.floor(this.max);
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getAvgcookiesPerHourOne: function () {
        for (let index = 0; index < this.hours.length; index++) {

            this.avgcookiesPerHour.push(this.getRandomCustomerPerHourOne()* this.avg);
        }
        console.log(this.avgcookiesPerHour);
    },

    avgcookiesPerHour: [],
};

shopFour.getAvgcookiesPerHourOne();


var paretnElement = document.getElementById("mySeattleThree");
var article = document.createElement('article');paretnElement.appendChild(article);
var list = document.createElement('ul');
article.appendChild(list);
//console.log(shopOne.avgcookiesPerHour.length);
var sum = 0;
for (let index = 0; index < shopFour.hours.length; index++) {
    
    var ListONE = document.createElement('li');

    ListONE.textContent = shopFour.hours[index] + " " + shopFour.avgcookiesPerHour[index] + " cookies";
     
    list.appendChild(ListONE);
    sum +=shopFour.avgcookiesPerHour[index];
}
document.getElementById("sumThree").innerHTML = "The Total is "+sum;
console.log(sum);


