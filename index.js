const winArr = document.getElementsByClassName('winOrLoss')
for (let i = 0; i < winArr.length; i++) {
    if (winArr[i] === "win" || winArr[i] === "Win") {
        winArr[i].classList.add("win")
    }
    else {
        winArr[i].classList.add("loss")
    }
}