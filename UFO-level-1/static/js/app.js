// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody");

tableData.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

    var filteredUfo = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredUfo);
}