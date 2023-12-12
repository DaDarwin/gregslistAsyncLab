import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { loadState, saveState } from "../utils/Store.js"
import { api } from "./AxiosService.js"



class HouseService{

    async getHouses(){
        const response = await (fetch('https://bcw-sandbox.herokuapp.com/api/houses'))
        const houseData = await response.json()
        const houses = houseData.map(data => new House(data))
        AppState.houses = houses
    }

    async addHouse(){
        const response =await api.post('api/houses', FormData)
        AppState.houses.push(new House(response.data))
    }

    async removeHouse(id){
        const response = await api.delete(`api/cars/${id}`)
        const ind = AppState.houses.findIndex(house => house.id == id)
        AppState.houses.splice(ind, 1)
    }


    
    
}




export const houseService = new HouseService()