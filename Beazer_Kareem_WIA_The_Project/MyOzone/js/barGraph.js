$(document).ready(function(){
	var graphCanvas1 = document.getElementById('graphSpace1');
	// Ensure that the element is available within the DOM
	if (graphCanvas1 && graphCanvas1.getContext) {
	  // Open a 2D context within the canvas
	  var context = graphCanvas1.getContext('2d');

	  // Bar chart data
	  var data = new Array(5);
	  data[0] = "Popularity,200";
	  data[1] = "Expense,120";
	  data[2] = "Rating,80";
	  data[3] = "Capacity,230";
	  data[4] = "Performances,340";

	  // Draw the bar chart
	  drawBarChart1(context, data, 50, 70, (graphCanvas1.height - 20), 50);
	}

	function drawBarChart1(context, data, startX, barWidth, chartHeight, markDataIncrementsIn) {
	  // Draw the x and y axes
	  context.lineWidth = "1.0";
	  var startY = 380;
	  drawLine1(context, startX, startY, startX, 30); 
	  drawLine1(context, startX, startY, 570, startY);			
	  context.lineWidth = "0.0";
	  var maxValue = 0;
	  for (var i=0; i < data.length; i++) {
	    // Extract the data
	    var values = data[i].split(",");
	    var name = values[0];
	    var height = parseInt(values[1]);
	    if (parseInt(height) > parseInt(maxValue)) maxValue = height;
		
	    // Write the data to the chart
	    context.fillStyle = "#ec4955";  
	    drawRectangle1(context,startX + (i * barWidth) + i,(chartHeight - height),barWidth,height,true);
		
	    // Add the column title to the x-axis
	    context.textAlign = "left";
	    context.fillStyle = "#000";
	    context.fillText(name, startX + (i * barWidth) + i, chartHeight + 10, 200);		
	  }
	  // Add some data markers to the y-axis
	  var numMarkers = Math.ceil(maxValue / markDataIncrementsIn);
	  context.textAlign = "right";
	  context.fillStyle = "#000";
	  var markerValue = 0;
	  for (var i=0; i < numMarkers; i++) {		
	    context.fillText(markerValue, (startX - 5), (chartHeight - markerValue), 50);
	    markerValue += markDataIncrementsIn;
	  }
	}

		// drawLine - draws a line on a canvas context from the start point to the end point 
	function drawLine1(contextO, startx, starty, endx, endy) {
	  contextO.beginPath();
	  contextO.moveTo(startx, starty);
	  contextO.lineTo(endx, endy);
	  contextO.closePath();
	  contextO.stroke();
	}

	// drawRectangle - draws a rectangle on a canvas context using the dimensions specified
	function drawRectangle1(contextO, x, y, w, h, fill) {			
	  contextO.beginPath();
	  contextO.rect(x, y, w, h);
	  contextO.closePath();
	  contextO.stroke();
	  if (fill) contextO.fill();
	}

	var graphCanvas2 = document.getElementById('graphSpace2');
	// Ensure that the element is available within the DOM
	if (graphCanvas2 && graphCanvas2.getContext) {
	  // Open a 2D context within the canvas
	  var context = graphCanvas2.getContext('2d');

	  // Bar chart data
	  var data = new Array(5);
	  data[0] = "Popularity,100";
	  data[1] = "Expense,20";
	  data[2] = "Rating,150";
	  data[3] = "Capacity,100";
	  data[4] = "Performances,350";

	  // Draw the bar chart
	  drawBarChart2(context, data, 50, 70, (graphCanvas2.height - 20), 50);
	}

	function drawBarChart2(context, data, startX, barWidth, chartHeight, markDataIncrementsIn) {
	  // Draw the x and y axes
	  context.lineWidth = "1.0";
	  var startY = 380;
	  drawLine2(context, startX, startY, startX, 30); 
	  drawLine2(context, startX, startY, 570, startY);			
	  context.lineWidth = "0.0";
	  var maxValue = 0;
	  for (var i=0; i < data.length; i++) {
	    // Extract the data
	    var values = data[i].split(",");
	    var name = values[0];
	    var height = parseInt(values[1]);
	    if (parseInt(height) > parseInt(maxValue)) maxValue = height;
		
	    // Write the data to the chart
	    context.fillStyle = "#ef8b3a";  
	    drawRectangle2(context,startX + (i * barWidth) + i,(chartHeight - height),barWidth,height,true);
		
	    // Add the column title to the x-axis
	    context.textAlign = "left";
	    context.fillStyle = "#000";
	    context.fillText(name, startX + (i * barWidth) + i, chartHeight + 10, 200);		
	  }
	  // Add some data markers to the y-axis
	  var numMarkers = Math.ceil(maxValue / markDataIncrementsIn);
	  context.textAlign = "right";
	  context.fillStyle = "#000";
	  var markerValue = 0;
	  for (var i=0; i < numMarkers; i++) {		
	    context.fillText(markerValue, (startX - 5), (chartHeight - markerValue), 50);
	    markerValue += markDataIncrementsIn;
	  }
	}

		// drawLine - draws a line on a canvas context from the start point to the end point 
	function drawLine2(contextO, startx, starty, endx, endy) {
	  contextO.beginPath();
	  contextO.moveTo(startx, starty);
	  contextO.lineTo(endx, endy);
	  contextO.closePath();
	  contextO.stroke();
	}

	// drawRectangle - draws a rectangle on a canvas context using the dimensions specified
	function drawRectangle2(contextO, x, y, w, h, fill) {			
	  contextO.beginPath();
	  contextO.rect(x, y, w, h);
	  contextO.closePath();
	  contextO.stroke();
	  if (fill) contextO.fill();
	}

	var graphCanvas3 = document.getElementById('graphSpace3');
	// Ensure that the element is available within the DOM
	if (graphCanvas3 && graphCanvas3.getContext) {
	  // Open a 2D context within the canvas
	  var context = graphCanvas3.getContext('2d');

	  // Bar chart data
	  var data = new Array(5);
	  data[0] = "Popularity,50";
	  data[1] = "Expense,100";
	  data[2] = "Rating,90";
	  data[3] = "Capacity,100";
	  data[4] = "Performances,300";

	  // Draw the bar chart
	  drawBarChart3(context, data, 50, 70, (graphCanvas3.height - 20), 50);
	}

	function drawBarChart3(context, data, startX, barWidth, chartHeight, markDataIncrementsIn) {
	  // Draw the x and y axes
	  context.lineWidth = "1.0";
	  var startY = 380;
	  drawLine3(context, startX, startY, startX, 30); 
	  drawLine3(context, startX, startY, 570, startY);			
	  context.lineWidth = "0.0";
	  var maxValue = 0;
	  for (var i=0; i < data.length; i++) {
	    // Extract the data
	    var values = data[i].split(",");
	    var name = values[0];
	    var height = parseInt(values[1]);
	    if (parseInt(height) > parseInt(maxValue)) maxValue = height;
		
	    // Write the data to the chart
	    context.fillStyle = "#e8e982";  
	    drawRectangle3(context,startX + (i * barWidth) + i,(chartHeight - height),barWidth,height,true);
		
	    // Add the column title to the x-axis
	    context.textAlign = "left";
	    context.fillStyle = "#000";
	    context.fillText(name, startX + (i * barWidth) + i, chartHeight + 10, 200);		
	  }
	  // Add some data markers to the y-axis
	  var numMarkers = Math.ceil(maxValue / markDataIncrementsIn);
	  context.textAlign = "right";
	  context.fillStyle = "#000";
	  var markerValue = 0;
	  for (var i=0; i < numMarkers; i++) {		
	    context.fillText(markerValue, (startX - 5), (chartHeight - markerValue), 50);
	    markerValue += markDataIncrementsIn;
	  }
	}

		// drawLine - draws a line on a canvas context from the start point to the end point 
	function drawLine3(contextO, startx, starty, endx, endy) {
	  contextO.beginPath();
	  contextO.moveTo(startx, starty);
	  contextO.lineTo(endx, endy);
	  contextO.closePath();
	  contextO.stroke();
	}

	// drawRectangle - draws a rectangle on a canvas context using the dimensions specified
	function drawRectangle3(contextO, x, y, w, h, fill) {			
	  contextO.beginPath();
	  contextO.rect(x, y, w, h);
	  contextO.closePath();
	  contextO.stroke();
	  if (fill) contextO.fill();
	}

	var graphCanvas4 = document.getElementById('graphSpace4');
	// Ensure that the element is available within the DOM
	if (graphCanvas4 && graphCanvas4.getContext) {
	  // Open a 2D context within the canvas
	  var context = graphCanvas4.getContext('2d');

	  // Bar chart data
	  var data = new Array(5);
	  data[0] = "Popularity,300";
	  data[1] = "Expense,250";
	  data[2] = "Rating,200";
	  data[3] = "Capacity,350";
	  data[4] = "Performances,150";

	  // Draw the bar chart
	  drawBarChart4(context, data, 50, 70, (graphCanvas4.height - 20), 50);
	}

	function drawBarChart4(context, data, startX, barWidth, chartHeight, markDataIncrementsIn) {
	  // Draw the x and y axes
	  context.lineWidth = "1.0";
	  var startY = 380;
	  drawLine4(context, startX, startY, startX, 30); 
	  drawLine4(context, startX, startY, 570, startY);			
	  context.lineWidth = "0.0";
	  var maxValue = 0;
	  for (var i=0; i < data.length; i++) {
	    // Extract the data
	    var values = data[i].split(",");
	    var name = values[0];
	    var height = parseInt(values[1]);
	    if (parseInt(height) > parseInt(maxValue)) maxValue = height;
		
	    // Write the data to the chart
	    context.fillStyle = "#66c464";  
	    drawRectangle4(context,startX + (i * barWidth) + i,(chartHeight - height),barWidth,height,true);
		
	    // Add the column title to the x-axis
	    context.textAlign = "left";
	    context.fillStyle = "#000";
	    context.fillText(name, startX + (i * barWidth) + i, chartHeight + 10, 200);		
	  }
	  // Add some data markers to the y-axis
	  var numMarkers = Math.ceil(maxValue / markDataIncrementsIn);
	  context.textAlign = "right";
	  context.fillStyle = "#000";
	  var markerValue = 0;
	  for (var i=0; i < numMarkers; i++) {		
	    context.fillText(markerValue, (startX - 5), (chartHeight - markerValue), 50);
	    markerValue += markDataIncrementsIn;
	  }
	}

		// drawLine - draws a line on a canvas context from the start point to the end point 
	function drawLine4(contextO, startx, starty, endx, endy) {
	  contextO.beginPath();
	  contextO.moveTo(startx, starty);
	  contextO.lineTo(endx, endy);
	  contextO.closePath();
	  contextO.stroke();
	}

	// drawRectangle - draws a rectangle on a canvas context using the dimensions specified
	function drawRectangle4(contextO, x, y, w, h, fill) {			
	  contextO.beginPath();
	  contextO.rect(x, y, w, h);
	  contextO.closePath();
	  contextO.stroke();
	  if (fill) contextO.fill();
	}

	var graphCanvas5 = document.getElementById('graphSpace5');
	// Ensure that the element is available within the DOM
	if (graphCanvas5 && graphCanvas5.getContext) {
	  // Open a 2D context within the canvas
	  var context = graphCanvas5.getContext('2d');

	  // Bar chart data
	  var data = new Array(5);
	  data[0] = "Popularity,300";
	  data[1] = "Expense,180";
	  data[2] = "Rating,80";
	  data[3] = "Capacity,200";
	  data[4] = "Performances,300";

	  // Draw the bar chart
	  drawBarChart5(context, data, 50, 70, (graphCanvas5.height - 20), 50);
	}

	function drawBarChart5(context, data, startX, barWidth, chartHeight, markDataIncrementsIn) {
	  // Draw the x and y axes
	  context.lineWidth = "1.0";
	  var startY = 380;
	  drawLine5(context, startX, startY, startX, 30); 
	  drawLine5(context, startX, startY, 570, startY);			
	  context.lineWidth = "0.0";
	  var maxValue = 0;
	  for (var i=0; i < data.length; i++) {
	    // Extract the data
	    var values = data[i].split(",");
	    var name = values[0];
	    var height = parseInt(values[1]);
	    if (parseInt(height) > parseInt(maxValue)) maxValue = height;
		
	    // Write the data to the chart
	    context.fillStyle = "#4cc2e4";  
	    drawRectangle5(context,startX + (i * barWidth) + i,(chartHeight - height),barWidth,height,true);
		
	    // Add the column title to the x-axis
	    context.textAlign = "left";
	    context.fillStyle = "#000";
	    context.fillText(name, startX + (i * barWidth) + i, chartHeight + 10, 200);		
	  }
	  // Add some data markers to the y-axis
	  var numMarkers = Math.ceil(maxValue / markDataIncrementsIn);
	  context.textAlign = "right";
	  context.fillStyle = "#000";
	  var markerValue = 0;
	  for (var i=0; i < numMarkers; i++) {		
	    context.fillText(markerValue, (startX - 5), (chartHeight - markerValue), 50);
	    markerValue += markDataIncrementsIn;
	  }
	}

		// drawLine - draws a line on a canvas context from the start point to the end point 
	function drawLine5(contextO, startx, starty, endx, endy) {
	  contextO.beginPath();
	  contextO.moveTo(startx, starty);
	  contextO.lineTo(endx, endy);
	  contextO.closePath();
	  contextO.stroke();
	}

	// drawRectangle - draws a rectangle on a canvas context using the dimensions specified
	function drawRectangle5(contextO, x, y, w, h, fill) {			
	  contextO.beginPath();
	  contextO.rect(x, y, w, h);
	  contextO.closePath();
	  contextO.stroke();
	  if (fill) contextO.fill();
	}

	var graphCanvas6 = document.getElementById('graphSpace6');
	// Ensure that the element is available within the DOM
	if (graphCanvas6 && graphCanvas6.getContext) {
	  // Open a 2D context within the canvas
	  var context = graphCanvas6.getContext('2d');

	  // Bar chart data
	  var data = new Array(5);
	  data[0] = "Popularity,350";
	  data[1] = "Expense,120";
	  data[2] = "Rating,100";
	  data[3] = "Capacity,200";
	  data[4] = "Performances,50";

	  // Draw the bar chart
	  drawBarChart6(context, data, 50, 70, (graphCanvas6.height - 20), 50);
	}

	function drawBarChart6(context, data, startX, barWidth, chartHeight, markDataIncrementsIn) {
	  // Draw the x and y axes
	  context.lineWidth = "1.0";
	  var startY = 380;
	  drawLine6(context, startX, startY, startX, 30); 
	  drawLine6(context, startX, startY, 570, startY);			
	  context.lineWidth = "0.0";
	  var maxValue = 0;
	  for (var i=0; i < data.length; i++) {
	    // Extract the data
	    var values = data[i].split(",");
	    var name = values[0];
	    var height = parseInt(values[1]);
	    if (parseInt(height) > parseInt(maxValue)) maxValue = height;
		
	    // Write the data to the chart
	    context.fillStyle = "#a87caf";  
	    drawRectangle6(context,startX + (i * barWidth) + i,(chartHeight - height),barWidth,height,true);
		
	    // Add the column title to the x-axis
	    context.textAlign = "left";
	    context.fillStyle = "#000";
	    context.fillText(name, startX + (i * barWidth) + i, chartHeight + 10, 200);		
	  }
	  // Add some data markers to the y-axis
	  var numMarkers = Math.ceil(maxValue / markDataIncrementsIn);
	  context.textAlign = "right";
	  context.fillStyle = "#000";
	  var markerValue = 0;
	  for (var i=0; i < numMarkers; i++) {		
	    context.fillText(markerValue, (startX - 5), (chartHeight - markerValue), 50);
	    markerValue += markDataIncrementsIn;
	  }
	}

		// drawLine - draws a line on a canvas context from the start point to the end point 
	function drawLine6(contextO, startx, starty, endx, endy) {
	  contextO.beginPath();
	  contextO.moveTo(startx, starty);
	  contextO.lineTo(endx, endy);
	  contextO.closePath();
	  contextO.stroke();
	}

	// drawRectangle - draws a rectangle on a canvas context using the dimensions specified
	function drawRectangle6(contextO, x, y, w, h, fill) {			
	  contextO.beginPath();
	  contextO.rect(x, y, w, h);
	  contextO.closePath();
	  contextO.stroke();
	  if (fill) contextO.fill();
	}

	var graphCanvas7 = document.getElementById('graphSpace7');
	// Ensure that the element is available within the DOM
	if (graphCanvas7 && graphCanvas7.getContext) {
	  // Open a 2D context within the canvas
	  var context = graphCanvas7.getContext('2d');

	  // Bar chart data
	  var data = new Array(5);
	  data[0] = "Popularity,150";
	  data[1] = "Expense,50";
	  data[2] = "Rating,200";
	  data[3] = "Capacity,100";
	  data[4] = "Performances,320";

	  // Draw the bar chart
	  drawBarChart7(context, data, 50, 70, (graphCanvas7.height - 20), 50);
	}

	function drawBarChart7(context, data, startX, barWidth, chartHeight, markDataIncrementsIn) {
	  // Draw the x and y axes
	  context.lineWidth = "1.0";
	  var startY = 380;
	  drawLine7(context, startX, startY, startX, 30); 
	  drawLine7(context, startX, startY, 570, startY);			
	  context.lineWidth = "0.0";
	  var maxValue = 0;
	  for (var i=0; i < data.length; i++) {
	    // Extract the data
	    var values = data[i].split(",");
	    var name = values[0];
	    var height = parseInt(values[1]);
	    if (parseInt(height) > parseInt(maxValue)) maxValue = height;
		
	    // Write the data to the chart
	    context.fillStyle = "#4b4744";  
	    drawRectangle7(context,startX + (i * barWidth) + i,(chartHeight - height),barWidth,height,true);
		
	    // Add the column title to the x-axis
	    context.textAlign = "left";
	    context.fillStyle = "#000";
	    context.fillText(name, startX + (i * barWidth) + i, chartHeight + 10, 200);		
	  }
	  // Add some data markers to the y-axis
	  var numMarkers = Math.ceil(maxValue / markDataIncrementsIn);
	  context.textAlign = "right";
	  context.fillStyle = "#000";
	  var markerValue = 0;
	  for (var i=0; i < numMarkers; i++) {		
	    context.fillText(markerValue, (startX - 5), (chartHeight - markerValue), 50);
	    markerValue += markDataIncrementsIn;
	  }
	}

		// drawLine - draws a line on a canvas context from the start point to the end point 
	function drawLine7(contextO, startx, starty, endx, endy) {
	  contextO.beginPath();
	  contextO.moveTo(startx, starty);
	  contextO.lineTo(endx, endy);
	  contextO.closePath();
	  contextO.stroke();
	}

	// drawRectangle - draws a rectangle on a canvas context using the dimensions specified
	function drawRectangle7(contextO, x, y, w, h, fill) {			
	  contextO.beginPath();
	  contextO.rect(x, y, w, h);
	  contextO.closePath();
	  contextO.stroke();
	  if (fill) contextO.fill();
	}

	var theCanvas1 = document.getElementById('Canvas1');
	if (theCanvas1 && theCanvas1.getContext) {
	var ctx = theCanvas1.getContext("2d");
	if (ctx) {

			//Create a variable to hold our image
			var  srcImg1 = document.getElementById("img1");
			
			//Draw an image directly onto the canvas
			ctx.drawImage(srcImg1, 0,0);

		}
	}
	var theCanvas2 = document.getElementById('Canvas2');
	if (theCanvas2 && theCanvas2.getContext) {
	var ctx = theCanvas2.getContext("2d");
	if (ctx) {

			//Create a variable to hold our image
			var  srcImg2 = document.getElementById("img2");
			
			//Draw an image directly onto the canvas
			ctx.drawImage(srcImg2, 0,0);

		}
	}
	var theCanvas3 = document.getElementById('Canvas3');
	if (theCanvas3 && theCanvas3.getContext) {
	var ctx = theCanvas3.getContext("2d");
	if (ctx) {

			//Create a variable to hold our image
			var  srcImg3 = document.getElementById("img3");
			
			//Draw an image directly onto the canvas
			ctx.drawImage(srcImg3, 0,0);

		}
	}
	var theCanvas4 = document.getElementById('Canvas4');
	if (theCanvas4 && theCanvas4.getContext) {
	var ctx = theCanvas4.getContext("2d");
	if (ctx) {

			//Create a variable to hold our image
			var  srcImg4 = document.getElementById("img4");
			
			//Draw an image directly onto the canvas
			ctx.drawImage(srcImg4, 0,0);

		}
	}
	var theCanvas5 = document.getElementById('Canvas5');
	if (theCanvas5 && theCanvas5.getContext) {
	var ctx = theCanvas5.getContext("2d");
	if (ctx) {

			//Create a variable to hold our image
			var  srcImg5 = document.getElementById("img5");
			
			//Draw an image directly onto the canvas
			ctx.drawImage(srcImg5, 0,0);

		}
	}
	var theCanvas6 = document.getElementById('Canvas6');
	if (theCanvas6 && theCanvas6.getContext) {
	var ctx = theCanvas6.getContext("2d");
	if (ctx) {

			//Create a variable to hold our image
			var  srcImg6 = document.getElementById("img6");
			
			//Draw an image directly onto the canvas
			ctx.drawImage(srcImg6, 0,0);

		}
	}
	var theCanvas7 = document.getElementById('Canvas7');
	if (theCanvas7 && theCanvas7.getContext) {
	var ctx = theCanvas7.getContext("2d");
	if (ctx) {

			//Create a variable to hold our image
			var  srcImg7 = document.getElementById("img7");
			
			//Draw an image directly onto the canvas
			ctx.drawImage(srcImg7, 0,0);

		}
	}
});