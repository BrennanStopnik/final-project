// Selecting the elements that are already on the HTML page 
let form1 = document.querySelector("#form1");
let storesDiv = document.querySelector("#stores");
let inputValue = document.querySelector("#store-input");
let storeList = document.querySelector("#ul");
let removeStores = document.querySelector("#remove-form");

// Adding an event listener to the "Store Name" input element to create the stores and the individual inputs and buttons.
form1.addEventListener('submit', function(e) {
    e.preventDefault();

    // Creating a new form to add an event listener later
    let newForm = document.createElement("form");
    newForm.classList.add("store-form");

    // Creating the label using the input from the value entered in the store name input
    let storeName = document.createElement("label");
    storeName.innerText = inputValue.value;
    storeName.classList.add("store");

    // Creating the input field where the specific items will be entered
    let storeInput = document.createElement("input");
    storeInput.setAttribute("type", "text");
    storeInput.setAttribute("id", "item-box");
    
    // Submit button for the items input field
    let submitItem = document.createElement("input");
    submitItem.setAttribute("type", "submit");
    submitItem.setAttribute("id", "sub-btn");
    submitItem.setAttribute("value", "Add Item");

    // Creating a new "ul" element for the list items that are entered in each stores input field below
    let theList = document.createElement("ul");
    theList.setAttribute("id", "the-list");

    // Appending new form to the store list "ul"
    storeList.appendChild(newForm);

    // Appending all the children to the new form created above 
    newForm.appendChild(storeName);
    newForm.appendChild(storeInput);
    newForm.appendChild(submitItem);
    newForm.appendChild(theList);

    // Clearing the input field next to Store Name
    inputValue.value = '';

    // Adding an event listener to the new form created above.
        // Needs to be nested to take advantage of the store name input value
    newForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Creating the "li" for each item that gets added in the new forms input 
        let listItems = document.createElement("li");
        listItems.innerText = storeInput.value;
        listItems.classList.add("items");
        
        // Appending to the "ul" created above
        theList.appendChild(listItems);

        // Clearing the input field for each store input
        storeInput.value = '';

        // Using querySelectorAll for each item in the list
        let eachItem = document.querySelectorAll("li");


        // For loop to go through each item to "check it off the list". Went with color changing because I like the way it looks.
        for (let i = 0; i < eachItem.length; i++){
            // Single click to change color
            eachItem[i].addEventListener('click', function(){
                // console.log(eachItem[i].innerText);
                if (eachItem[i].style.color === 'darkblue'){
                    eachItem[i].style.color = 'pink';
                } else {
                    eachItem[i].style.color = 'darkblue'
                }
            })
            // Double click to remove an item
            eachItem[i].addEventListener('dblclick', function(){
                eachItem[i].remove();
            })
        }
    })

});

removeStores.addEventListener('click', function(){
    let theStores = document.querySelectorAll("ul li");
    theStores.remove();
})


