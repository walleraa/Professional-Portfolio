const expands = document.getElementsByClassName('expand');
const projects = document.getElementsByClassName('proj');
const blank = document.getElementById('blanket');
let expansion;
let target;
let num;
let focus;

//Created event listener for blanket to close
blank.addEventListener("click", 
    () => {
        //Setting all proj divs to no display since it's easier and quicker than checking all proj divs to see which one is in focus
        for (let i = 0; i < projects.length; ++i) {
            projects[i].style.display = "none";
        }//end for

        //Removing blanket until further notice
        blank.style.zIndex = -1;
    }
);

// Run through all expand divs and create event listeners
for (let i = 0; i < expands.length; ++i) {
    expansion = expands[i];
    // target = Math.floor(Math.random()*16777215).toString(16);
    // console.log(target);
    // expansion.style.backgroundColor = '#'+target;
    expansion.addEventListener("click", 
        (event) => {
            target = event.currentTarget; 
            console.log("Clicked on " + target.id);
            num = "p" + target.id.substring(1);
            // console.log(num);
            focus = document.getElementById(num);
            //-----Create background-----
            blank.style.zIndex = 1;
            
            //-----Create focus-----
            focus.style.display = "block";
            
        }
    );
}//end for