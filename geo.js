//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{
var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
    
alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
	" and the perimeter is " + rectPer (floatRectWidth,floatRectHeight) + 
	"\n\n" + "The Triangle area is " + 	triArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
	" and the perimeter is " + triPer(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
	"The Circle area is " + circleArea(floatRadius) + 
	" and the circumference is " + circleCircum(floatRadius));
};

var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);
	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}

var calcCircleArea = function()
{
    var floatRadius = parseFloat($("radius").value);
    alert ("The circle area is " + circleArea(floatRadius));
};

function circleArea(floatRadius)
{
    var floatArea = parseFloat(Math.PI * Math.pow(floatRadius, 2));
    return floatArea.toFixed(2);
}

var calcTriArea = function ()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);
    alert ("The Triangle area is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triArea(floatTriSide1, floatTriSide2, floatTriSide3)
{
    var floatHeron = parseFloat((floatTriSide1 + floatTriSide2 + floatTriSide3)/2);
    var floatTriArea = parseFloat(Math.sqrt(floatHeron * (floatHeron - floatTriSide1) * (floatHeron - floatTriSide2) * (floatHeron - floatTriSide3)));
    return floatTriArea.toFixed(2);
}

var calcTriPer = function ()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);
    alert ("The Triangle perimeter is " + triPer(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triPer(floatTriSide1, floatTriSide2, floatTriSide3)
{
    var floatTriPer = parseFloat(floatTriSide1 + floatTriSide2 + floatTriSide3);
    return floatTriPer.toFixed(2);
}


var calcRectArea = function()
{
	var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
	alert ("The rectangle area is " + rectArea(floatRectWidth, floatRectHeight));	
};


function rectArea(floatRectWidth_par, floatRectHeight_par)
{
    var floatRectArea = floatRectWidth_par * floatRectHeight_par;
    return floatRectArea.toFixed(2);
}

var calcRectPer = function ()
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
	alert ("The rectangle perimeter is " + rectPer(floatRectWidth, floatRectHeight));
}

function rectPer(floatRectWidth, floatRectHeight)
{
    var floatRectPer = (2 * floatRectWidth) + (2 * floatRectHeight);
    return floatRectPer.toFixed(2);

}

window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_circle_area").onclick = calcCircleArea; // runs the calcCircleArea function when clicked
    $("calc_tri_area").onclick = calcTriArea; // runs the calcTriArea function when clicked
    $("calc_tri_perim").onclick = calcTriPer; // runs the calcTriPer function when clicked
    $("calc_rect_area").onclick = calcRectArea; // runs the calcRectArea function when clicked
    $("calc_rect_perim").onclick = calcRectPer; // runs the calcRectPer function when clicked
    
};