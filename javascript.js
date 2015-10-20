
// target all relevant elements and assign variables

var body = document.getElementsByTagName("body");
var messageInput = document.getElementById("message-input");
var clearAllButton = document.getElementById("clear-all");
var messageBoard = document.getElementById("message-board");
var darkThemeCheckbox = document.getElementById("dark-theme");
var largeTextCheckbox = document.getElementById("large-text");
var container = document.getElementById("container");
var namesButtons = document.getElementById("names");
var mode = "create";
var targetText = "";
var users = {
  names: ["Emma", "Red", "Nathan"]
};
var thisName = "";

//add users names to radio buttons
var outputNames = "";
for (var i = 0; i < users.names.length; i++) {
	outputNames += "<input type='radio' name='users' value='"
	outputNames += users.names[i];
	outputNames += "'>";
	outputNames += users.names[i];
}
namesButtons.innerHTML = outputNames;

// make function for #clear-all button to clear lower div
function clearAllFunction () {
	messageBoard.innerHTML = "";
	clearAllButton.setAttribute("disabled", "disabled");
}

var output = "";

// assign message value + delete button to div
function addMessageToBoard () {
	if (mode === "create") {
		// this line below clears the ouput so messages cleared before aren't concatenated and shown again
		output = messageBoard.innerHTML;
		output += "<div class='message-text'>";
		output += "<b>";
		output += thisName;
		output += ":</b>";
		output += "<p class='text'>";
		output += messageInput.value;
		output += "</p>";
		output += "<button class='edit-message'>";
		output += "Edit";
		output += "</button>";
		output += "<button class='clear-message'>";
		output += "Delete";
		output += "</button>";
		output += "<p class='date'>";
		output += new Date();
		output += "</p>";
		output += "</div>";
		messageBoard.innerHTML = output;
		messageInput.value = "";
		clearAllButton.removeAttribute("disabled");
	} else if (mode === "edit") {
		targetText.innerHTML = messageInput.value;
		targetText.classList.remove("disappear");
		messageInput.value = "";
		clearAllButton.removeAttribute("disabled");
		mode = "create";
	}
}

function darkTheme () {
	body[0].classList.toggle("dark-theme");
	container.classList.toggle("container");
	container.classList.toggle("dark-container");
	messageBoard.classList.toggle("light-board");
	messageBoard.classList.toggle("dark-board");
}

function largeText () {
	body[0].classList.toggle("large-text");
}

//add all event listeners
clearAllButton.addEventListener("click", clearAllFunction);

darkThemeCheckbox.addEventListener("click", darkTheme);

largeTextCheckbox.addEventListener("click", largeText);

messageInput.addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
		addMessageToBoard();
	}
});



document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);
  var thisElement = event.target;
  // handle any click on .clear-message button
  if (thisElement.className.toLowerCase() === "clear-message") {
    // console.log("You clicked on an delete button ");
    //target parent div
    thisElement.parentNode.remove();
    if (messageBoard.innerHTML.length < 1) {
    	clearAllButton.setAttribute("disabled", "disabled");
    }
  } else if (thisElement.className.toLowerCase() == "edit-message") {
  	// console.log("You click the edit button");
  	mode = "edit";
  	targetText = thisElement.previousSibling;
  	messageInput.value = targetText.innerHTML;
  	targetText.classList.add("disappear");
  } else if (thisElement.type === "radio") {
  	console.log(thisElement.value);
  	thisName = thisElement.value;
  }
});









