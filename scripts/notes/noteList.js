import { getNotes, useNotes } from "./noteDataProvider.js";
import { NoteHTMLConverter } from "./note.js";
import {getCriminals, useCriminals} from "../criminals/criminalsProvider.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

// convert the notes objects to HTML with NoteHTMLConverter
const render = (noteArray, criminalArray) => {
    
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
        const relatedCriminalObject = criminalArray.find(criminal => criminal.id === noteObject.criminalId)
        NoteHTMLConverter(noteObject, relatedCriminalObject)
    }).join("")    
    contentTarget.innerHTML = allNotesConvertedToStrings
}
    // `
    // <h3>Show Notes</h3>
    // <section class="noteList">
    // ${notesHTMLRepresentations}
    // </section>`
    // }
  
// const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteNote(id).then(
            () => {
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
            }
        )
    }
})

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
    .then(getCriminals)
        .then(() => {
            const allNotes = useNotes()
            const allCriminals = useCriminals()
            render(allNotes, allCriminals)
        })
}