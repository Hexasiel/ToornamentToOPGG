var arr = document.getElementsByClassName("fas fa-gamepad")

var team1 = "https://www.op.gg/multisearch/euw?summoners="
var team2 = "https://www.op.gg/multisearch/euw?summoners="

var readDiscordTags = 0
for (let i = 0; i < arr.length; i++) {

    var textContent = arr[i].parentElement.lastChild.textContent
    if (textContent.includes("Ansprechpartner"))
        readDiscordTags++

    if (textContent.includes("Summoner Name:")) {

        var snString = textContent
        snString = snString.replace("Summoner Name:", " ")
        snString = snString.trim()
        if (readDiscordTags == 1) {
            team1 += snString + "%2C"
        }
        if (readDiscordTags == 2) {
            team2 += snString + "%2C"
        }
    }
    else {
        var btn = document.createElement("button")
        btn.classList.add("copy_code_button")
        btn.appendChild(document.createTextNode("OPGG->"))
        arr[i].appendChild(btn)
    }
}

var button = document.querySelectorAll(".copy_code_button")
var btncount = 0
button.forEach((elm) => {
    if (btncount === 0) {
        elm.addEventListener('click', (e) => {
            window.open(team1)
        })
    }
    else {
        elm.addEventListener('click', (e) => {
            window.open(team2)
        })
    }
    btncount++
})
