import { AppState } from "../AppState.js"
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

function _showCreateHouseForm(){
    if(AppState.user){document.getElementById('createHouse').classList.remove('d-none')}
}

export class HouseController{
    constructor(){
        
        AppState.on('houses', _drawHouses)
        AppState.on('user',_showCreateHouseForm)
        AppState.on('account', _drawHouses)
        _showCreateHouseForm()
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
        await houseService.addHouse(formData)
        form.reset()
    }
    catch(error){console.log(error)}
}

    async removeHouse(id){
        console.log(id)
        try{await houseService.removeHouse(id)
        Pop.toast('House Deleted')}
        catch(error){console.log(error)}
    }



}