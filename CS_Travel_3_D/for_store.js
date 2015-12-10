/* playlist_store.js
 * 
 * Ready-bake code to store and retrieve playlist items
 */

function save(item) {
	var commentArray = getStoreArray("comment");
	commentArray.push(item);
	localStorage.setItem("comment", JSON.stringify(commentArray));
}

function loadComment() {
	var commentArray = getSavedComments();
	var ul = document.getElementById("comment");
	if (commentArray !== null) {
		for (var i = 0; i < commentArray.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = commentArray[i];
			ul.appendChild(li);
            
		}
    }
    
}

function getSavedComments() {
	
    return getStoreArray("comment");
}

function getStoreArray(key) {
	var commentArray = localStorage.getItem(key);
	if (commentArray == null || commentArray == "") {
		commentArray = new Array();
	}
	else {
		commentArray = JSON.parse(commentArray);
	}
	return commentArray;
}

