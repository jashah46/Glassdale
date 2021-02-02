import { saveNote } from "./noteDataProvider.js"
              

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        Notes
        <input type="date" id="noteDate"></input>                                   
        <input type="text" id="noteComment"></input>                   
        <input type="text" id="noteConclusion"></input>     
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}
const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        console.log(clickEvent)
        // Make a new object representation of a note  
        const date = document.querySelector("#noteDate").value 
        const comment = document.getElementById("noteComment").value 
        const conclusion = document.getElementById("noteConclusion").value 
       
            // Key/value pairs here
        const newNote = {
            "date": date, 
            "comment": comment,
            "conclusion": conclusion,
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

