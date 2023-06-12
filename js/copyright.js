const year = new Date().getFullYear();
// console.log(year);
// console.log(document.getElementById("copyright"));
document.getElementById("copyright").innerHTML += year;
let open = false;
let mobile = true;

document.getElementById("drop").addEventListener("click", 
    () => {
        console.log("Hey, you clicked on the dropdown menu for mobile view!");
        if (!open) {
            document.getElementById("header").style.width = "92%";
            document.getElementsByClassName("flex")[0].style.display = "flex";
            open = true;
        }
        else {
            document.getElementById("header").style.width = "30px";
            document.getElementsByClassName("flex")[0].style.display = "none";
            open = false;
        }
    }
);

document.getElementById("drop").addEventListener("keypress" , 
    (event) => {
        if (event.key === "Enter") {
            console.log("entered");
            if (!open) {
                document.getElementById("header").style.width = "92%";
                document.getElementsByClassName("flex")[0].style.display = "flex";
                open = true;
            }
            else {
                document.getElementById("header").style.width = "30px";
                document.getElementsByClassName("flex")[0].style.display = "none";
                open = false;
            }
        }
    }
);

window.addEventListener("resize",
    () => {
        // console.log(window.innerWidth);
        if (mobile && window.innerWidth >= 600) {
            mobile = false;
            document.getElementById("header").style.width = "98%";
            document.getElementsByClassName("flex")[0].style.display = "flex";
        }
        else if (!mobile && window.innerWidth < 600) {
            mobile = true;
            document.getElementById("header").style.width = "30px";
            document.getElementsByClassName("flex")[0].style.display = "none";
        }
    }
);