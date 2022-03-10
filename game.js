function game(){
    document.getElementById(`outputBox`).style.display = `block`
    document.getElementById(`startGame`).style.display = `none`
    var outputBox = document.getElementById(`outputBox`)
    outputBox.innerHTML = `You are too weak for this adventure! Come back later when you're a little... Well... Stronger!`
}
