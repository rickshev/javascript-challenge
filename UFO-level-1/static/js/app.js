// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody");

tableData.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});