let ques = ["who is the president of india?", "what is the national animal of india?",
    "what is the name of prime minister of india?", "where is ram mandir located in india?", "what is a black person called"];

let options1 = ["manmohan singh", "Rahul gandhi", "yogi adityanath", "soniya gandhi"];
let options2 = ["elephant", "Tiger", "giraffe", "ant"];
let options3 = ["manmohan singh", "Rahul gandhi", "yogi adityanath", "modi sarkar"];
let options4 = ["delhi", "kerala", "kashmir", "ayodhaya"];
let options5 = ["nigga", "black", "kalu", "damar"];


let i = 0;
let getQues = document.getElementById("questionBox");
getQues.innerText = ques[i];
const labelTexts = document.querySelectorAll(".label");
labelTexts.forEach((labelText, index) => {
    labelText.innerText = options1[index];
})

const loadQues = () => {
    getQues.innerText = ques[i];

    if (i == 1) {
        labelTexts.forEach((labelText, index) => {
            labelText.innerText = options2[index];
        })
    } else if (i == 2) {
        labelTexts.forEach((labelText, index) => {
            labelText.innerText = options3[index];
        });
    } else if (i == 3) {
        labelTexts.forEach((labelText, index) => {
            labelText.innerText = options4[index];
        });
    } else if (i == 4) {
        labelTexts.forEach((labelText, index) => {
            labelText.innerText = options5[index];
        });
    } else {
        alert("quiz completed");
        let newPara = document.createElement("p");
        newPara.innerText = `your final score is ${score}`;
        newPara.setAttribute("id", "submit");
        submitBtn.parentNode.replaceChild(newPara, submitBtn);
    }
}

let score = 0;

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
    const selectedRadioButton = document.querySelector('input[name="option"]:checked');  //to check which radio button is checked

    if (selectedRadioButton) {
        const selectedLabelText = document.querySelector(`label[for="${selectedRadioButton.id}"]`) // to get selected label value of that radio button
            .innerText;
        if (selectedLabelText === options1[1]) {
            score++
            console.log(score);

        }
        else if (selectedLabelText === options2[1]) {
            score++
            console.log(score);
        }
        else if (selectedLabelText === options3[1]) {
            score++
            console.log(score);
        }
        else if (selectedLabelText === options4[3]) {
            score++
            console.log(score);
        }
        else if (selectedLabelText === options5[0]) {
            score++
            console.log(score);
        }
        i++;
        loadQues();
    } else {
        alert("Please select an option before submitting.");
    }
});

