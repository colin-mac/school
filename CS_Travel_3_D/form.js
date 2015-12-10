/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;

	loadComment();
}

function handleButtonClick(e) {
	var textInput = document.getElementById("commentTextInput");
	var comment = textInput.value;

	if (comment == "") {
		alert("Please enter a comment");
	}
	else {
		var li = document.createElement("li");
		li.innerHTML = comment;
		var ul = document.getElementById("comment");
		ul.appendChild(li);

		getLocation()
		save(comment);
	}
}
