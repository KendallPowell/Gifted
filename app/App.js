import { GiftsController } from "./Controllers/GiftsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  giftsController = new GiftsController()
  // valuesController = new ValuesController();
}

window["app"] = new App();
