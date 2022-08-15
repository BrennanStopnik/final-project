let form1 = document.querySelector("#form1");
let form2 = document.querySelector("#form2");
let inputValue = document.querySelector("#store-input");
let storeSubmit = document.querySelector("#store-submit");
let storeList = document.querySelector("#ul");


form1.addEventListener('submit', function(e) {
    e.preventDefault();

    let storeName = document.createElement("ul");
    storeName.innerText = inputValue.value;
    storeName.classList.add("store");
    

    let storeInput = document.createElement("input");
    storeInput.setAttribute("type", "text");
    storeInput.setAttribute("id", "item-box");
    
    let submitItem = document.createElement("input");
    submitItem.setAttribute("type", "submit");
    submitItem.setAttribute("id", "sub-btn");
    submitItem.setAttribute("value", "Add Item");

    // let theItems = document.createElement("ul");
    // // theItems.innerText = storeInput.value;


    storeList.appendChild(storeName);
    storeList.appendChild(storeInput);
    storeList.appendChild(submitItem);

    form2.addEventListener('submit', function(e) {
        e.preventDefault();
        let listItems = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        listItems.innerText = storeInput.value;
        
        storeName.appendChild(listItems);
    })



});

// form2.addEventListener('submit', function(e) {
//     e.preventDefault();
//     let listItems = document.createElement("li");
//     let checkbox = document.createElement("input");
//     checkbox.setAttribute("type", "checkbox");
//     listItems.innerText = storeInput.value;
    
//     storeName.appendChild(listItems);
// });