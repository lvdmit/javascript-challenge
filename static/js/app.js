// from data.js
var tableData = data;

function createTable(data) {
  //Use d.3 to select table and create a bootstrap striped table
  var table = d3.select("table");
  table.attr("class", "table table-striped");

  //console.log the data from data.js
  var tbody = d3.select("tbody");
  // console.log("Data:", data);

  // Clear the table before rendering
  tbody.html("");

  //Use d3 to add rows and cells and fiil them with values
  data.forEach(function(ufoTable) {
      console.log(ufoTable);
      var row = tbody.append("tr");
      Object.entries(ufoTable).forEach(function([key, value]) { // [["weekday", "SUN"], ["data", "Jul 1"]]
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
      });
  });
}

createTable(tableData);

//Select the Filter Table button
var filter = d3.select("#filter-btn");

filter.on("click", function() 
{

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(dataEntry => dataEntry.datetime === inputValue);

  // console.log(filteredData);
  createTable(filteredData);
});

