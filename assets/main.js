const originContent = document.querySelector(".active")
const getKey = document.querySelector(".key")


document.body.addEventListener("keydown", (event) => {
    getKey.innerHTML = `
        <div>
            <h3>Key</h3>
            <span>${event.key === " " ? "space" : event.key}</span>
        </div>
        <div>
            <h3>KeyCode</h3>
            <span>${event.keyCode}</span>
        </div>
        <div>
            <h3>Code</h3>
            <span>${event.code}</span>
        </div>
    `
    console.log(event);
})
