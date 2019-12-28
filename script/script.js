var imagePath;
var title;
var want;
var price;
var deliveryTime;
var description;
var url;

function load() {
	var mydata = JSON.parse(data);
	
	var index;
	var code = "<table id=\"dataTable\"><tr id=\"heading\"><th></th><th style=\"width:15%;\" onclick=\"sortTable(1)\">Title</th><th style=\"width:5%;\" onclick=\"sortTable(2)\">Want Rating</th><th style=\"width:5%;\" onclick=\"sortTable(3)\">Price</th><th style=\"width:5%;\" onclick=\"sortTable(4)\">Delivery Time</th><th style=\"width:20%;\">Description</th></tr>";
	for (index = 0; index < mydata.length; index++)
	{
		code += "<tr><td><a href=\"" + mydata[index].url + "\" target=\"_blank\"><img src=\"img\\" + mydata[index].imageTitle + ".png\" style=\"width=100%;\"></a></td>";
		code += "<td style=\"width:15%;\">" + mydata[index].title + "</td>";
		code += "<td style=\"width:5%;\">" + mydata[index].want + "</td>";
		code += "<td style=\"width:5%;\">" + mydata[index].price + "</td>";
		code += "<td style=\"width:5%;\">" + mydata[index].deliveryTime + "</td>";
		code += "<td style=\"width:20%;\">" + mydata[index].description + "</td></tr>";
	}
	
	code += "</table>";
	document.getElementById("data").innerHTML = code;
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("dataTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  if (n == 2)
	  dir = "desc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() && n == 1) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
		else if (Number(x.innerHTML) > Number(y.innerHTML)) {
			shouldSwitch = true;
			break;
		}
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() && n == 1) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
		else if (Number(x.innerHTML) < Number(y.innerHTML)) {
			shouldSwitch = true;
			break;
		}
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}