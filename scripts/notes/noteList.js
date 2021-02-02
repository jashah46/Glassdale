import { getNotes, useNotes } from "./noteDataProvider.js";
import { NoteHTMLConverter } from "./note.js";


// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

// convert the notes objects to HTML with NoteHTMLConverter
const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => 
        NoteHTMLConverter(noteObject)).join("")
        
    contentTarget.innerHTML = allNotesConvertedToStrings
}
    // `
    // <h3>Show Notes</h3>
    // <section class="noteList">
    // ${notesHTMLRepresentations}
    // </section>`
    // }
  


// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}