import { getCriminals, useCriminals } from "./criminalsProvider.js"
import { Criminal } from "./Criminals.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

const eventHub = document.querySelector('.container')
const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

  getCriminals()
    .then(() => {
      const criminalsArray = useCriminals()
      renderToDom(criminalsArray)

    })
  }

  const renderToDom = criminalCollection => {
    let criminalsHTMLRepresentations = ""
  
    for (const criminal of criminalCollection) {
      criminalsHTMLRepresentations += Criminal(criminal)
    }

      
      criminalsContainer.innerHTML = `
        <h3>Criminals</h3>
        <section class="criminalsList">
        ${criminalsHTMLRepresentations}
        </section>`
    }

eventHub.addEventListener("crimeChosen", event => {
  if (event.detail.crimeThatWasChosen !== "0") {

    const convictionsArray = useConvictions()

    const convictionThatWasChosen = convictionsArray.find(convictionObj => {
      return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
    })
// console.log((convictionThatWasChosen))
 
    const criminalsArray = useCriminals()


    const matchingCriminalsArray = criminalsArray.filter(criminalObj => {
      return criminalObj.conviction === convictionThatWasChosen.name
    })

    renderToDom(matchingCriminalsArray)
  }
})