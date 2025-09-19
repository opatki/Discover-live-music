async function renderShows() {
    const response = await fetch('/shows')
    const data = await response.json()
}

const mainContent = document.getElementById('main-content')

if (data) {
    data.map(show => {
        const card = document.createElement('div')
        card.classList.add('card')
        
        
    // eventName: "Acoustic Night Under the Stars",
    // artists: ["Maya Torres"],
    // dateTime: "2025-09-20T19:30:00",
    // venue: "Sudwerk Brewing Co.",
    // genre: "Acoustic / Folk",
    // ticketPrice: 0
    })
}
else {
    const message = document.createElement('h2')
    message.textContent = 'No Shows Available 😞'
    mainContent.appendChild(message)
}