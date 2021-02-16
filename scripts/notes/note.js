export const NoteHTMLConverter = (noteObject, criminal) => {
    return `
        <section class="note">
            <div class="note__date">${noteObject.date}</div>
            <div class="note__suspect">Title: ${noteObject.comment}</div>
            <div class="note__author">Author: ${noteObject.conclusion}</div>
            <div class="note__timestamp">Timestamp: ${new Date(noteObject.timestamp).toLocaleDateString('en-US')}</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
            <select id="noteForm--criminal" class="criminalSelect">
               <option value='${criminal.id}'>${criminal.name}</option>
               </select>
            </section>
            `
}

