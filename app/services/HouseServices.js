import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { loadState, saveState } from "../utils/Store.js"



class HouseService{

    async getHouses(){
        const response = await (fetch('https://bcw-sandbox.herokuapp.com/api/houses'))
        const houseData = await response.json()
        const houses = houseData.map(data => new House(data))
        AppState.houses = houses
    }


    
    
}




export const houseService = new HouseService()