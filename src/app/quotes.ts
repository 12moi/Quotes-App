export class Quotes {
    public showDescription!: boolean;
  showInfo: boolean;
    constructor(public id:number,public name:string, public title:string,public quote:string, public author:string,public likes:number, public dislikes:number, public datePosted: Date){
      this.showInfo=false;
    }
}
