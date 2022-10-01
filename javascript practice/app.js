
function changeTitleToRed(){
    console.log(`click`)
    document.querySelector('.title').style.color = "red"
}
function  toggleDarkTheme(){
    document.querySelector('body').classList.toggle("dark-theme")
    console.log(`click`)
}