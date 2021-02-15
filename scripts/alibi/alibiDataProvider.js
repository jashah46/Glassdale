import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"

let _associates = []

    export const useAssociates = (criminalId) => {
        console.log("getting associates of criminal id", criminalId)

        return getCriminals()
            .then(( ) => {
                const crimaonsl = useCriminals()
                _associates = criminals.filter((criminal) => criminal.id === criminalId)
                return _associcates[0].known_associates
            })
    }
