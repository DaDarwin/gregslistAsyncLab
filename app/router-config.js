import { AccountController } from "./controllers/AccountController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HouseController } from "./controllers/HouseController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController],
    view: 'd'
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/houses',
    controllers: [HouseController],
    view: 'app/views/HouseView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])



