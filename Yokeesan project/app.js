document.querySelector("#click").onclick = function (){

  

        let input = document.querySelector("#inputs").value;

        let box = document.querySelector(".sub-box");


        


       

       if(input == 0){
        alert("Please Enter the Value");
       }else{
        box.innerHTML +=`

        <div class="texts">
        <span id="letter">${input}</span>
        <div class="delete-button">
        <i class="fas fa-trash-alt"></i>
        </div>
        <div class="subjects">
        <div class="subject-one">
            <input type="text" placeholder="Enter your subject one">
            <input id="subject-one-marks" type="number" placeholder="Enter you Marks">
            <input id="subject-one-gpa" type="number" placeholder="Enter your Credits">
        </div>
        <div class="subject-two">
            <input type="text" placeholder="Enter your subject two">
            <input id="subject-two-marks" type="number" placeholder="Enter you Marks">
            <input id="subject-two-gpa" type="number" placeholder="Enter your Credits">
        </div>
        <div class="subject-three">
            <input type="text" placeholder="Enter your subject three">
            <input id="subject-three-marks" type="number" placeholder="Enter you Marks">
            <input id="subject-three-gpa" type="number" placeholder="Enter your Credits">
        </div>
        <div class="subject-four">
            <input type="text" placeholder="Enter your subject four">
            <input id="subject-four-marks" type="number" placeholder="Enter you Marks">
            <input id="subject-four-gpa" type="number" placeholder="Enter your Credits">
        </div>
        <div class="subject-five">
            <input type="text" placeholder="Enter your subject five">
            <input id="subject-five-marks" type="number" placeholder="Enter you Marks">
            <input id="subject-five-gpa" type="number" placeholder="Enter your Credits">
        </div>
        <div class="calculate-button">
            <button id="calculate-button" type="button">Calculate GPA</button>
        </div>
        <div class="display-box-gpa">
            <div class="gpa-text">
                <p>GPA</p>
            </div>
            <div class="gpa-count">

            </div>
        </div>
    </div>
        </div>
        
        `
       }

 var dele = document.querySelectorAll(".delete-button");

       
for(var i=0; i<dele.length; i++){
            dele[i].addEventListener("click",function (){
                this.parentNode.remove();
            })
               
            }



let lett = document.querySelectorAll(".texts");


for(let j=0; j<lett.length;j++){
    lett[j].addEventListener("click",function (){
        this.classList.toggle("active");
    })
}


/* get the inputs from gpa and marks */


var subjectOneMarks = document.querySelector("#subject-one-marks");
var subjectTwoMarks = document.querySelector("#subject-Two-marks");
var subjectThreeMarks = document.querySelector("#subject-Three-marks");
var subjectFourMarks = document.querySelector("#subject-Four-marks");
var subjectFiveMarks = document.querySelector("#subject-Five-marks");

var subjectOneGpa = document.querySelector("subject-one-gpa");

var subjectTwoGpa = document.querySelector("subject-Two-gpa");
var subjectThreeGpa = document.querySelector("subject-Three-gpa");
var subjectFourGpa = document.querySelector("subject-Four-gpa");
var subjectFiveGpa = document.querySelector("subject-Five-gpa");


const calculateButton = document.querySelector("#calculate-button");



        


       

       
   
   
  
    
}