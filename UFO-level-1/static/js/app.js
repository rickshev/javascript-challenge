// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody");

// tableData.forEach(function(ufoReport) {
//     var row = tbody.append("tr");
//     Object.entries(ufoReport).forEach(function([key, value]) {
//         // console.log(key, value);
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

function fillTable(data) {
    tbody.text("");
    data.forEach(function(ufo) {
        row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var cell = row.append("td").text(value);
        });
    });
};

fillTable(tableData);

var button = d3.select("#filter-btn");
var inputElement = d3.select("#datetime");


function runEnter() {
    d3.event.preventDefault();

    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredUfo = tableData.filter(data => data.datetime === inputValue);
    
    fillTable(filteredUfo);
};

inputElement.on("change", runEnter);