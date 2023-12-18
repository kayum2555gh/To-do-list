let inputs = document.getElementById("inpt");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Enter Your Task")
    }
    else
    {
        let newEle = document.createElement("li");
        newEle.innerHTML=`${inputs.value} <i class="fa-sharp fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" ,remove);
        function remove(){
            newEle.remove()
        }
        newEle.addEventListener('click',()=>{
            newEle.classList.toggle('active');
        })
    }
}

