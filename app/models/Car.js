import { AppState } from "../AppState.js"


// REVIEW when working with an API that you want to send data too, always check their documentation for a guide or 'model' that they use. In this case they make the rules and will only store what they specify
export class Car{
  constructor(data){
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.engineType = data.engineType
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    console.log('✨🚗', this); // 🧪
    // TODO creator info
    this.creator = data.creator
    this.creatorId = data.creatorId
  }

  get CarCard(){
    // return `${this.make} ${this.model}`// 🧪 test small template first
    return `<div class="col-6 col-md-4 my-2">
    <div class="h-100 w-100 card d-flex justify-content-center align-items-center text-center w-10 p-0 m-3 bg-dark text-light border-greg">

        <div class="w-75 h-50 house-listing p-1  border-greg">
            <img class="img-fluid rounded h-100 w-100" src="${this.imgUrl}" alt="">
        </div>
        
        <div class="w-75 p-2 d-flex justify-content-center flex-column align-items-center">
            <h5>${this.year} ${this.make} Bed ${this.model} Bath</h3>
            <h6>${this.description}</h4>
            <h6 class="d-flex justify-content-between"><span class="m-1">Price: $${this.price}</span> <p class="m-1">Listed by <br><i>${this.creator.name}</i></p></h4>
        </div>

        <div class="d-flex justify-content-evenly w-75 pb-2">
            ${this.RemoveCarButton} 
        </div>
    </div>
    </div>` //🧪 tested as we added more to the template that the draw still worked
  }

  get RemoveCarButton(){
    if(this.creatorId == AppState.account?.id){ //only tries to access id if there is an account, otherwise will leave null
      return `<button onclick="app.CarsController.removeCar('${this.id}')" title="delete the ${this.make} ${this.model}class="btn btn-outline-danger w-25"> <i <i class="mdi mdi-trash-can-outline"></i></button>`
    }
    return '' //🧪 if you're not the creator, return nothing
  }
}
