$(document).ready(function() {
	// target all relevant elements and assign variables

	var body = $("body");
	var messageInput = $("#message-input");
	var clearAllButton = $("#clear-all");
	var messageBoard = $("#message-board");
	var darkThemeCheckbox = $("#dark-theme");
	var largeTextCheckbox = $("#large-text");
	var container = $("#container");
	var namesButtons = $("#names");
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
	namesButtons.html(outputNames);

	// make function for #clear-all button to clear lower div
	function clearAllFunction () {
		messageBoard.html("");
		clearAllButton.attr("disabled", "disabled");
	}

	var output = "";

	// assign message value + delete button to div
	function addMessageToBoard () {
		if (mode === "create") {
			// this line below clears the ouput so messages cleared before aren't concatenated and shown again
			output = messageBoard.html();
			output += "<div class='message-text'>";
			output += "<b>";
			output += thisName;
			output += ":</b>";
			output += "<p class='text'>";
			output += messageInput.val();
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
			messageBoard.html(output);
			messageInput.val("");
			clearAllButton.removeAttr("disabled");
			if ($(messageBoard).children().length > 20) {
				$(messageBoard).children()[0].remove();
			}
		} else if (mode === "edit") {
			targetText.html(messageInput.val());
			targetText.removeClass("disappear");
			messageInput.val("");
			clearAllButton.removeAttr("disabled");
			mode = "create";
		}
	}

	function darkTheme () {
		body.toggleClass("dark-theme");
		container.toggleClass("container");
		container.toggleClass("dark-container");
		messageBoard.toggleClass("light-board");
		messageBoard.toggleClass("dark-board");
	}

	function largeText () {
		body.toggleClass("large-text");
	}

	//add all event listeners
	clearAllButton.click(clearAllFunction);

	darkThemeCheckbox.click(darkTheme);

	largeTextCheckbox.click(largeText);

	messageInput.keydown(function(event) {
		if (event.keyCode === 13) {
			addMessageToBoard();
		}
	});



	body.click(function(event) {
	  // console.log(event);
	  var thisElement = event.target;
	  // handle any click on .clear-message button
	  if ($(thisElement).hasClass("clear-message")) {
	    // console.log("You clicked on an delete button ");
	    //target parent div
	    $(thisElement).parent().remove();
	    if ($(messageBoard).html().length < 1) {
	    	$(clearAllButton).attr("disabled", "disabled");
	    }
	  } else if ($(thisElement).hasClass("edit-message")) {
	  	console.log("You click the edit button");
	  	mode = "edit";
	  	targetText = $(thisElement).prev();
	  	messageInput.val(targetText.html());
	  	targetText.addClass("disappear");
	  } else if ($(thisElement).attr("type") === "radio") {
	  	console.log($(thisElement).val());
	  	thisName = $(thisElement).val();
	  }
	});
});





