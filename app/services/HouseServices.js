import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"



class HouseService{

    async getHouses(){
        const response = await (fetch('https://bcw-sandbox.herokuapp.com/api/houses'))
        const houseData = await response.json()
        const houses = houseData.map(data => new House(data))
        AppState.houses = houses
    }

    async addHouse(formData){
        const response = await api.post('api/houses', formData)
        const newHouse = (new House(response.data))
        console.log(newHouse)
        AppState.houses.push(newHouse)
    }

    async removeHouse(id){
        await api.delete(`api/houses/${id}`)
        const ind = AppState.houses.findIndex(house => house.id == id)
        AppState.houses.splice(ind, 1)
    }


    
    
}




export const houseService = new HouseService()