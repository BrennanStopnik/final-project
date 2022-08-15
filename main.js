let form1 = document.querySelector("#form1");
let storesDiv = document.querySelector("#stores");
let inputValue = document.querySelector("#store-input");
let storeList = document.querySelector("#ul");


form1.addEventListener('submit', function(e) {
    e.preventDefault();

    let newForm = document.createElement("form");
    newForm.classList.add("store-form");

    let storeName = document.createElement("label");
    storeName.innerText = inputValue.value;
    storeName.classList.add("store");

    let storeInput = document.createElement("input");
    storeInput.setAttribute("type", "text");
    storeInput.setAttribute("id", "item-box");
    
    let submitItem = document.createElement("input");
    submitItem.setAttribute("type", "submit");
    submitItem.setAttribute("id", "sub-btn");
    submitItem.setAttribute("value", "Add Item");

    let theList = document.createElement("ul");
    theList.setAttribute("id", "the-list");

    storeList.appendChild(newForm);
    newForm.appendChild(storeName);
    newForm.appendChild(storeInput);
    newForm.appendChild(submitItem);
    newForm.appendChild(theList);

    newForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let listItems = document.createElement("li");
        listItems.innerText = storeInput.value;
        listItems.classList.add("items");
        storeInput.innerText.value = '';
        
        theList.appendChild(listItems);
    })

});

