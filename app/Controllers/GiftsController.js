import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifts() {
  let gifts = appState.gifts
  let template = ''
  gifts.forEach(g => template += Gift.ListTemplate(g))
  setHTML('presents', template)
}

export class GiftsController {
  constructor() {
    console.log('gifts controller');
    this.acquirePresents()
    appState.on('gifts', _drawGifts)

  }

  async openPresent(id) {
    console.log("you want access? you have code?");
    try {
      await giftsService.openPresent(id)
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }

  }

  async acquirePresents() {
    try {
      await giftsService.acquirePresents()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  async postGift() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let giftData = getFormData(form)
      Pop.toast('created', 'success')
      form.reset()
      // console.log(giftData);
      await giftsService.postGift(giftData)
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }

  }

}