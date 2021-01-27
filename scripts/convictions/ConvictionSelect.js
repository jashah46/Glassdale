/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
  // Trigger fetching the API data and loading it into application state
  getConvictions()
    .then(() => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = convictionsCollection => {
  /*
      Use interpolation here to invoke the map() method on
      the convictionsCollection to generate the option elements.
      Look back at the example provided above.
  */
  // TO DO: FIGURE OUT WHAT THIS IS {something.map()}
  //  The convictionsCollection.map() will iterate through an array that looks like this:
  // [
  //   {
  //     name: "arson",
  //     id: 1
  //   }, {
  //     name: "murder",
  //     id: 2
  //   },
  //   ...
  // ]

  // The new array that .map() gives me will look like this:

  // [
  //   "<option value="1">arson</option>",
  //   "<option value="2">murder</option>",
  //   ...
  // ]
  //  debugger
  
contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(conviction => `<option value="${conviction.id}">${conviction.name}</option>`).join("")
    }
        </select>
    `
}