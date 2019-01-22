var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");//.color1 is a type
var color2 = document.querySelector(".color2");//.color2 is a type
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomize");
var dec1, dec2, dec3;

/* - - - - - - - - Event Listeners - - - - - - - - - */

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomizeBGGradient);



/* Upon page load - initialize background to default color picker */
setGradient();


/* - - - - Function declarations - - - - - */

/* displays colors from color picker as background gradient */
/* this function is called by the event listener on the color pickers */
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", "
	+ color2.value
	+ ")";

	//textContent adds a string into css var
	css.textContent = body.style.background + ";";
}


/* generates 2 random rgb colors upon button click
	displays the random colors in gradient and h3 tag */
function randomizeBGGradient() {

	var randColor1 = createARandomRGB();
	var hexString1 = createHexString();

	var randColor2 = createARandomRGB();
	var hexString2 = createHexString();
	

	body.style.background = 
	"linear-gradient(to right, "
	+ randColor1
	+ ", "
	+ randColor2
	+ ")";

	css.textContent = body.style.background + ";";

	sendHexToColorPicker(hexString1, hexString2);
	//sendHexToColorPicker(hexString2);
}	


/* returns a random grb(X, X, X) */
function createARandomRGB() {
	dec1 = Math.floor(Math.random() * 255);
	dec2 = Math.floor(Math.random() * 255);
	dec3 = Math.floor(Math.random() * 255);
	
	// this block generates an rgb() string
	var randColor = "rgb(" 
	+ dec1
	+ ", " 
	+ dec2
	+ ", "
	+ dec3
	+")";
	
	return randColor;
}

function convertToHex(toHex) {

	var hexValue = toHex.toString(16);

	if (hexValue.length % 2) {
  		hexValue = '0' + hexValue;
	}

	return hexValue;
}

/* converts each decimal color value into a single hex value, sends hex string to randomizeBGGradient*/
function createHexString() {

	var hex1 = convertToHex(dec1);
	var hex2 = convertToHex(dec2);
	var hex3 = convertToHex(dec3);

	var hexString = "#" + hex1 + hex2 + hex3;

	return hexString;
}


/* displays the random hex values in each color picker 
this function is called by randomizeBGGradient*/
function sendHexToColorPicker(hexString1, hexString2) {

	color1.value = hexString1;
	color2.value = hexString2;
}

