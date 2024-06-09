let options = document.querySelectorAll(".option");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let msgCont = document.querySelector(".msgCont");
let msg = document.querySelector(".msg");







let userWinCount = 0;
let compWinCount = 0;




options.forEach((option) => {
    option.addEventListener("click", () => {
        let userOption = option.getAttribute("id");
        console.log(`your option is ${userOption}`);
        compChoice(userOption);
    })
})
const compChoice = ((userOption) => {
    let ids = ["rock", "papper", "scissor"];
    let compId = Math.floor(Math.random() * 3);
    let compOption = ids[compId];
    console.log(`computer's option is ${compOption}`);

    // checking condition
    if (compOption === userOption){
        msg.innerText = "Match is draw, computer's choice is also the same";
        msgCont.style.backgroundColor = "transparent";
    } else{
        let userWin = true;
        // rock ---- vs ------- scissor
        if (userOption === "rock"){
            userWin = compOption === "scissor" ? true : false;
            if (userWin == true){
                msg.innerText = "You Win! Rock can beat scissor.";
                msgCont.style.backgroundColor = "green";
            } else {
                msg.innerText = "You loose! Paper can hold rock.";
                msgCont.style.backgroundColor = "red";
            }
        }
                // paper ---- vs ------- rock

         else if (userOption === "paper"){
            userWin = compOption === "rock" ? true : false;
            if (userWin == true){
                msg.innerText = "You Win! Paper can hold rock.";
                msgCont.style.backgroundColor = "green";
            } else {
                msg.innerText = "You loose! Scissor can cut paper.";
                msgCont.style.backgroundColor = "red";
            }
        }
                // scissor ---- vs ------- paper

        else if (userOption === "scissor"){
            userWin = compOption === "paper" ? true : false;
            if (userWin == true){
                msg.innerText = "You Win! Scissor can cut paper";
                msgCont.style.backgroundColor = "green";
            } else {
                msg.innerText = "You loose! Rock can beat scissor.";
                msgCont.style.backgroundColor = "red";
            }
        }
        if (userWin == true){
            userWinCount ++;
            score1.innerText = userWinCount;
        } else{
            compWinCount ++;
            score2.innerText =compWinCount;
        }
    }
})


