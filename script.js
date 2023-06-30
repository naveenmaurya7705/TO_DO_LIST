var about=document.getElementById('divabout');
     
/* Step 4 below here */
function addTask () {
  var input = document.getElementById("input");
  // get current text from input field
  var newTask = input.value;
  // only add new item to list if some text was entered
  if (newTask != "") {
    // create new HTML list item
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML = '<input type="checkbox" class="done" name="111" onclick="markDone(this.parentNode)" ;" /> ' + newTask +
    '<input type="button" name="222" class="remove" onclick="remove(this.parentNode)" value="&times;" /> ' 
    ;
    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item);  
    
    input.value="";
    input.placeholder="Enter new task....";
  }
  else{
    alert(" You have to write something in your to-do list.  The input box is empty. There is nothing to add here, you have to write something to create the To DO List.")
  }
}



// change styling used for given item
function markDone (item) { 
    item.className = 'finished';
}

/* Step 7 below here */
function remove (item) {
  // remove item completely from document
  if(item.className=="finished"){
    item.remove();
  }
}

/* Step 11 below here */
function doAbout() {
 
  about.innerHTML="This is page is created by Naveen Maurya";
  about.className="yellowbackground";
  
}

/* Step 14 below here */
function clearAbout() {
  about.innerHTML="";
}



