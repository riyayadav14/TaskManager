
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#Tasklist")

btn.addEventListener("click" , () => {
    console.log("button clicked")
    let task = input.value;
   
    let li = document.createElement("li");
    li.innerText = task;
   
    let deletebtn =  document.createElement("button");
    deletebtn.innerText = "❌";
    deletebtn.classList.add("delete-btn");

    deletebtn.addEventListener("click" , () =>{
        li.remove();
    });

    li.appendChild(deletebtn);
    ul.appendChild(li);

    input.value = "";

})