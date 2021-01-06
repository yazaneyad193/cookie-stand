"use strict";
var parentElement = document.getElementById("kittenProfiles");
var table = document.createElement('table');
parentElement.appendChild(table);

//Lab 6B

//Here I will start to make function
var hours = ["6 am", "7 am", "8 am", " 9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"];

var locationArray =[];

function Shop(min, max, avg, locationName) {
    this.total = 0;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.avgcookiesPerHour = [];
    locationArray.push(this);
    this.locationName = locationName;
}


Shop.prototype.getRandomCustomerPerHour = function () {

    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}


Shop.prototype.getAvgcookiesPerHour = function () {
    for (let index = 0; index < hours.length; index++) {
        var calc = Math.floor(this.getRandomCustomerPerHour() * this.avg);
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
        tdelemnt.setAttribute('class','headOfHours');
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
function totalsRow() {
    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    /**Add attribuit */
    tableRow.setAttribute('id','TotalRow');
    var header = document.createElement("td");
    header.textContent = "Totals";
    tableRow.appendChild(header);

    var sum = 0;
    var totalForAllLocations = 0;

   /* for (let i = 0; i < hours.length; i++) {
        var td = document.createElement("td");
        sum = shopOne.calc+ shopTwo.calc + shopThree.calc+ shopFour.calc+ shopFive.calc;
        td.textContent = sum;
        tableRow.appendChild(td);
        totalForAllLocations = Math.floor( totalForAllLocations + sum);

        console.log(sum);
    }*/

    for (let i = 0; i < hours.length; i++) {
        var td = document.createElement("td");
        for (let index = 0; index < locationArray.length; index++) {
            sum += locationArray[index].avgcookiesPerHour[i];
        }
        td.textContent = sum;
        tableRow.appendChild(td);
        totalForAllLocations = Math.floor( totalForAllLocations + sum);
    }
     
    var td = document.createElement("td");
    td.textContent = totalForAllLocations;
    tableRow.appendChild(td);
}

console.log(locationArray);
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
totalsRow();
/*==============================*/


//var shopOne = new Shop(23, 65, 6.3, "Seattle");
//min, max, avg, locationName

var locatForm = document.getElementById('LocationForm');

locatForm.addEventListener('submit', function (event){
    // alert("form submitted!");
    event.preventDefault(); // preventing the default behavior of the form
    // console.log(event.target.name.value);
    var locatName = event.target.locationName.value;
    var minval = event.target.Minimum.value;
    var maxval = event.target.Maximum.value;
    var averageval = event.target.average.value;

    var newLocation = new Shop(minval, maxval, averageval, locatName);
    
    deleteRow();
    console.log(newLocation);
    newLocation.getRandomCustomerPerHour();
    newLocation.getAvgcookiesPerHour();
    newLocation.renderBodyTable();
    totalsRow();
});

function deleteRow() {
   
    
    document.getElementById("TotalRow").remove(); 
  }