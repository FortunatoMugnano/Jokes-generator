function jokes() {
    return fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })
        .then(result => result.json())
}


jokes().then(data => {
    jokeHTML(data)
})

const jokeContainer = document.querySelector("#jokes")

const jokeHTML = (data) => {
    jokeContainer.innerHTML +=
        `
    <h2>${data.joke}</h2>
    `
}

document.querySelector("#newJoke").addEventListener("click", event => {
    jokeContainer.innerHTML = ""
    jokes(event).then(data => {
        jokeHTML(data)
    })
})