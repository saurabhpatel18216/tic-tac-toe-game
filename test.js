var is11Cross = false;
var is11Circle = false;
var is12Cross = false;
var is12Circle = false;
var is13Cross = false;
var is13Circle = false;
var is14Cross = false;
var is14Circle = false;
var is21Cross = false;
var is21Circle = false;
var is22Cross = false;
var is22Circle = false;
var is23Cross = false;
var is23Circle = false;
var is24Cross = false;
var is24Circle = false;
var is31Cross = false;
var is31Circle = false;
var is32Cross = false;
var is32Circle = false;
var is33Cross = false;
var is33Circle = false;
var is34Cross = false;
var is34Circle = false;
var is41Circle = false;
var is41Cross = false;
var is42Circle = false;
var is42Cross = false;
var is43Circle = false;
var is44Cross = false;
var is44Circle = false;

var isCircleAdded = false;
var isCrossAdded = false;


var d11 = document.getElementById("div11");
var d12 = document.getElementById("div12");
var d13 = document.getElementById("div13");
var d14 = document.getElementById("div14");
var d21 = document.getElementById("div21");
var d22 = document.getElementById("div22");
var d23 = document.getElementById("div23");
var d24 = document.getElementById("div24");
var d31 = document.getElementById("div31");
var d32 = document.getElementById("div32");
var d33 = document.getElementById("div33");
var d34 = document.getElementById("div34");
var d41 = document.getElementById("div41");
var d42 = document.getElementById("div42");
var d43 = document.getElementById("div43");
var d44 = document.getElementById("div44");
var positionsFilled = 0;

console.log(d11);

document.addEventListener("click", AddCircleOrCross);

function AddCircleOrCross(e){
	console.log(e.srcElement.attributes.id.value);
	let childNode;
	isCircleOrCross();
	if(e.srcElement.localName === "div")
	{
		if(isCircleAdded){
			e.srcElement.append(createCircle());
			setFlagsForCircle(e.srcElement.attributes.id.value);
		}
		else if(isCrossAdded){
			e.srcElement.append(createCross());
			setFlagsForCross(e.srcElement.attributes.id.value);
		}
		positionsFilled++;
		if(forXWin() || forCirleWin())
		{
			location.reload(); 
		}
		else
		{
			if(positionsFilled === 16)
			{
				alert(" Game TIE!");
			}
		}
		
	}
}



function setFlagsForCross(div){
	switch(div){
		case "div11":
			is11Cross = true;
			break;
		case "div12":
			is12Cross = true;
			break;
		case "div13":
			is13Cross = true;
			break;
        case "div14":
            is14Cross = true;
            break;
		case "div21":
			is21Cross = true;
			break;
		case "div22":
			is22Cross = true;
			break;
		case "div23":
			is23Cross = true;
			break;
        case "div24":
                is24Cross = true;
                break;
		case "div31":
			is31Cross = true;
			break;
		case "div32":
			is32Cross = true;
			break;
		case "div33":
			is33Cross = true;
			break;
        case "div34":
			is34Cross = true;
            case "div41":
			is41Cross = true;
			break;
		case "div42":
			is42Cross = true;
			break;
		case "div43":
			is43Cross = true;
			break;
        case "div44":
			is44Cross = true;
	}

}

function setFlagsForCircle(div){
	switch(div){
		case "div11":
			is11Circle = true;
			break;
		case "div12":
			is12Circle = true;
			break;
		case "div13":
			is13Circle = true;
			break;
            case "div14":
			is14Circle = true;
			break;
		case "div21":
			is21Circle = true;
			break;
		case "div22":
			is22Circle = true;
			break;
		case "div23":
			is23Circle = true;
			break;
        case "div24":
			is24Circle = true;
			break;
		case "div31":
			is31Circle = true;
			break;
		case "div32":
			is32Circle = true;
			break;
		case "div33":
			is33Circle = true;
			break;
        case "div34":
		   is34Circle = true;
			break;
        case "div41":
                is41Circle = true;
                break;
         case "div42":
                is42Circle = true;
                break;
        case "div43":
                is43Circle = true;
                break;
        case "div44":
               is44Circle = true;
                break;
	}
}

function forXWin()
{
	if((is11Cross && is12Cross && is13Cross && is14Cross) || (is21Cross && is22Cross && is23Cross && is24Cross) ||
		(is31Cross && is32Cross && is33Cross && is34Cross) || (is41Cross && is42Cross && is43Cross && is44Cross) ||(is11Cross && is22Cross && is33Cross) && is44Cross || 
		(is12Cross && is22Cross && is32Cross && is42Cross) || (is11Cross && is21Cross && is31Cross && is41Cross) ||
		(is13Cross && is23Cross && is33Cross && is43Cross) || (is14Cross && is24Cross && is34Cross && is44Cross) || (is14Cross && is23Cross && is32Cross && is41Cross))
	{		
		alert('X has won!!!');
		return true;
	}
}

function forCirleWin()
{
	if((is11Circle && is12Circle && is13Circle && is14Circle) || (is21Circle && is22Circle && is23Circle && is24Circle) ||
		(is31Circle && is32Circle && is33Circle && is34Circle ) || (is41Circle && is42Circle && is43Circle && is44Circle ) ||(is11Circle && is22Circle && is33Circle && is44Circle)  ||
		(is12Circle && is22Circle && is32Circle && is42Circle) || (is11Circle && is21Circle && is31Circle && is41Circle) ||
		(is13Circle && is23Circle && is33Circle && is43Circle) || (is14Circle && is24Circle && is34Circle && is44Circle) || (is14Circle && is23Circle && is32Circle && is41Circle))
	{
		alert('Circle has won!!!');
		return true;
	}
}

function isCircleOrCross(){
	if(!isCircleAdded && !isCrossAdded){
		isCircleAdded = true;
	}
	else if(isCircleAdded){
		isCrossAdded = true;
		isCircleAdded = false;
	}
	else if(isCrossAdded){
		isCircleAdded = true;
		isCrossAdded = false;
	}
}

function getChildNodeid(e){
	return e.srcElement.firstChild.id;
}

function getChildNode(e){
	return e.srcElement.firstChild;
}

function createCross(){
	var p = document.createElement("p");
	p.innerHTML = "&#10060;";
	return p;
}

function createCircle(){
	var circle = document.createElement("div");
	circle.setAttribute('id', 'circle');
	return circle;
}