//get all required element 

const form = document.querySelector("form");
let statusText = form.querySelector(".button-area span");


form.onsubmit = (e)=>{
    e.preventDefault();
    statusText.style.display = "block";

    let xhr = new XMLHttpRequest();

    xhr.open("POST","message.php",true); 

    xhr.onload = ()=>{
        if(xhr.readyState == 4 && xhr.status== 200){
            let res = xhr.response;
            if(res.indexOf("Email and Message Field Are REQUIRED") != -1 || res.indexOf("Email and Message Field Are REQUIRED")!=-1 || res.indexOf("Email and Message Field Are REQUIRED") !=-1)  {
                statusText.style.color = "red";}
            else{
                form.reset();
                setTimeout(() => {
                    statusText.style.display = "none";
                }, 3000);
                

            }
            statusText.innerText = res;
        }
    
    }

    let formData = new FormData(form);

    xhr.send(formData);
}