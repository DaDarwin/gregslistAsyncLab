import { AppState } from "../AppState.js"
import { carsService } from "../services/CarsService.js"
import { houseService } from "../services/HouseServices.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"

function _drawHouses(){
    console.log('Draw Houses', AppState.houses)
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.houseListing)
    document.getElementById('house-list').innerHTML = content
}
export class HouseController{
    constructor(){
        
        AppState.on('houses', _drawHouses)

        this.getHouses()
    }


    async getHouses(){
        try{ await houseService.getHouses()}
        catch(error){console.log(error)}
    }

    async addHouse(){
        try{event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        

        form.reset()
    }
    catch(error){console.log(error)}
}



}