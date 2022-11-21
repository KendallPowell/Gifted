

export class Gift {
  constructor(data) {
    this.id = data.id
    this.opened = data.opened
    this.imgUrl = data.url || ''
    this.tag = data.tag || 'YOU NO HAVE ACCESS'
  }


  static ListTemplate(g) {
    if (g.opened == true) {
      return `
       <div class="col-3 my-3 bg-white elevation-2 rounded p-2 selectable">
       <img src="${g.imgUrl}" alt="" class="img-fluid">
       <p class="text-center">${g.tag}</p>
       </div>
       `
    } else {
      return `
            <div class="col-3 my-3 bg-white elevation-2 rounded p-2 selectable" onclick="app.giftsController.openPresent('${g.id}')">
            <img src="https://thumbs.gfycat.com/CheerfulDefensiveBoa-size_restricted.gif" alt="" class="img-fluid">
            <p class="text-center">${g.tag}</p>
            </div>
            `
    }
  }
}