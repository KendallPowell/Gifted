import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";

export const giftsApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts'
})




class GiftsService {

  async acquirePresents() {
    const res = await giftsApi.get()
    console.log('got gifts', res.data);
    appState.gifts = res.data.map(g => new Gift(g))
  }

  async openPresent(id) {
    let selectedPresent = appState.gifts.find(g => g.id == id)
    // console.log('opening', selectedPresent);
    selectedPresent.opened = !selectedPresent.opened
    const res = await giftsApi.put(id, selectedPresent)
    let index = appState.gifts.findIndex(g => g.id == id)
    appState.gifts.splice(index, 1, new Gift(res.data))
    appState.emit('gifts')
  }

  async postGift(giftData) {
    const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/gifts', giftData)
    console.log('[post gift]', res.data);
    appState.gifts = [new Gift(res.data), ...appState.gifts]

    console.log(appState.gifts);
  }

}


export const giftsService = new GiftsService()