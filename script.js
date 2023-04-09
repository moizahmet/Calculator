let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        // Function for = btn
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value = string;
        }

        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }

        // Function for AC btn
        if(e.target.innerHTML == "Clear"){
            string = "";
            document.querySelector("input").value = string;
        }

        // Function For C btn
        if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
    })
})