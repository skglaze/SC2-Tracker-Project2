const winArr = document.getElementsByClassName('winOrLoss')
for (let i = 0; i < winArr.length; i++) {
    if (winArr[i].innerHTML === "win" || winArr[i].innerHTML === "Win") {
        winArr[i].classList.add("win")
    }
    else {
        winArr[i].classList.add("loss")
    }
}