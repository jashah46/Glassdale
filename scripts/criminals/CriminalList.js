import { getCriminals, useCriminals } from "./criminalsProvider.js"
import { Criminal } from "./Criminals.js"

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

  getCriminals()
    .then(() => {
      const criminalsArray = useCriminals()

      let criminalsHTMLRepresentations = ""

      for (const criminal of criminalsArray) {
        criminalsHTMLRepresentations += Criminal(criminal)
      }
      
      criminalsContainer.innerHTML = `
        <h3>Criminals</h3>
        <section class="criminalsList">
        ${criminalsHTMLRepresentations}
        </section>`
    })
}