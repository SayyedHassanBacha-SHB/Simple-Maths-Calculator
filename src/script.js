let calculation = localStorage.getItem("lastCalculation") || "";
// console.log(`Last calculation result : ${calculation} `);

const paraElm = document.querySelector(".show-calculation");
paraElm.innerText = `Last calculation result : ${calculation} `;

function appendtoCaculation(str){
    calculation += str;
    // console.log(calculation);
}

function calculate(){
    calculation = eval(calculation)
    // console.log(calculation);
    localStorage.setItem("lastCalculation",calculation); 
}

function reset(){
    localStorage.removeItem('lastCalculation');
    calculation = "";
    paraElm.innerText = "0";
}

function print(){
    paraElm.innerText = calculation;
}