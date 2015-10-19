
// target all relevant elements and assign variables

var body = document.getElementsByTagName("body");
var messageInput = document.getElementById("message-input");
var clearAllButton = document.getElementById("clear-all");
var messageBoard = document.getElementById("message-board");
var darkThemeCheckbox = document.getElementById("dark-theme");
var largeTextCheckbox = document.getElementById("large-text");


// make function for #clear-all button to clear lower div
function clearAllFunction () {
	messageBoard.innerHTML = "";
}

var output = "";

// assign message value + delete button to div
function addMessageToBoard () {
	// this line below clears the ouput so messages cleared before aren't concatenated and shown again
	output = messageBoard.innerHTML;
	output += "<div class='message-text'>";
	output += "<p class='text'>";
	output += messageInput.value;
	output += "</p>";
	output += "<button class='clear-message'>";
	output += "Delete";
	output += "</button>";
	output += "</div>";
	messageBoard.innerHTML = output;
	messageInput.value = "";
}

function darkTheme () {
	body[0].classList.toggle("dark-theme");
}

function largeText () {
	body[0].classList.toggle("large-text");
}

//add all event listeners
clearAllButton.addEventListener("click", clearAllFunction);

darkThemeCheckbox.addEventListener("click", darkTheme);

largeTextCheckbox.addEventListener("click", largeText);

messageInput.addEventListener("keydown", function (event) {
	if (event.keyCode === 13) {
		addMessageToBoard();
	}
});

document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);
  // handle any click on .clear-message button
  if (event.target.className.toLowerCase() === "clear-message") {
    console.log("You clicked on an delete button ");
    //target button element
    var thisElement = event.target;
    console.log(thisElement);
    //target parent div
    thisElement.parentNode.classList.add("hide");
  }
});




















