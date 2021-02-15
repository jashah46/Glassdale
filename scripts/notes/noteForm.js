import { saveNote } from "./noteDataProvider.js"
import {getCriminals, useCriminals} from "./../criminals/criminalsProvider.js"
              

const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const arrayoOfCriminals = useCriminals()
        render(arrayoOfCriminals)
    })
    
}


const render = (criminalsArray) => {
    contentTarget.innerHTML = `
        Notes
        <label for="note-criminalId>Suspect:"> </label>
        <select class="dropdown" id="criminalSelect">
       
        <option value="0">Please select a criminal</option>
        ${criminalsArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")
}
</select>
        <input type="date" id="noteDate"></input>                                   
        <input type="text" id="noteComment"></input>                   
        <input type="text" id="noteConclusion"></input>     
        <button id="saveNote">Save Note</button>
    `
}


const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        console.log(clickEvent)
        // Make a new object representation of a note  
        // const date = document.getElementById("id").value 
        const date = document.querySelector("#noteDate").value 
        const comment = document.getElementById("noteComment").value 
        const conclusion = document.getElementById("noteConclusion").value 
        const criminalId = document.getElementById("criminalSelect").value  
       
        
            // Key/value pairs here
        const newNote = {
            "date": date, 
            "comment": comment,
            "conclusion": conclusion,
            "criminalId": parseInt(criminalId)
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

