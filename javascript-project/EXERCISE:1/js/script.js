let main = document.querySelector("main")
let TittleInput = document.querySelector("#listTittle-input");
let TittleBtn = document.querySelector(".addTittleBtn");
let TitleCreated = document.querySelector("#TitleCreated");

let ItemBtn = document.querySelector(".addItemBtn");
let itemsCover = document.querySelector(".itemsCover");
let itemInput = document.querySelector("#listItem-input");

let alertMsg = document.querySelector(".alertMsg");
let countDown = document.querySelector("#countDown")
let dltBtn = document.querySelector(".Dltbtn");



let itemBoxes = document.querySelector(".itemboxes")
let uniqueId = 0;
let listNo = 0;


TittleBtn.addEventListener("click", () => {
    if (TittleInput.value === "") {
        alertMsg.innerText = `* Sorry, Tittle can't be Empty !`
        main.style.boxShadow = "1px 1px 100px 20px red";
        TittleInput.value = "";
        alertMsg.style.color = ""
    } else {
        listNo++;
        TitleCreated.innerText = TittleInput.value;
        countDown.innerHTML = `List No-${listNo}`;
        TittleInput.value = "";
        alertMsg.innerText = `Sucessfully, Tittle added to list-${listNo}`;
        alertMsg.style.color = "green"
        main.style.boxShadow = "";
        itemsCover.innerHTML = "";
    }
});


ItemBtn.addEventListener("click", () => {

    if (TitleCreated.innerText === "List Tittle") {
        alertMsg.innerText = `* Sorry, Tittle can't be Empty !`
        main.style.boxShadow = "1px 1px 100px 20px red";
    } else if (itemInput.value === "") {
        alertMsg.innerText = `* Sorry, list can't be Empty !`
        main.style.boxShadow = "1px 1px 100px 20px red";
        itemInput.value = "";
        alertMsg.style.color = ""
    } else if (itemInput.value != "") {
        uniqueId++;
        itemsCover.insertAdjacentHTML(
            "afterbegin",
             ` <div class="itemBoxes">
            <input type="checkbox" id="item-${uniqueId}">
            <label for="item-${uniqueId}"  class="${uniqueId}"> ${itemInput.value}</label>
            <span class="DltBtn">❌</span>
        </div>`
        );

        itemInput.value = "";
        alertMsg.innerText = "Sucessfully, added to list👍";
        main.style.boxShadow = "";
        alertMsg.style.color = "green"
    }
});


itemsCover.addEventListener("click", (e) => {
    if (e.target.classList.contains("DltBtn")) {
        e.target.parentElement.remove();
    } else if (e.target.type === "checkbox") {
        const label = e.target.nextElementSibling;
        if (e.target.checked) {
            label.style.textDecoration = "line-through";
        } else if (e.target.style.textDecoration = "line-through") {
            label.style.textDecoration = "none";
        }
    }
});


itemsCover.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("DltBtn")) {
        e.target.parentElement.style.boxShadow = "0px 0px 10px 7px red";
        e.target.style.transform = "rotate(40deg)";
    }
})

itemsCover.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("DltBtn")) {
        e.target.parentElement.style.boxShadow = "";
        e.target.style.transform = "";
    }
});
