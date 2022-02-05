export class Quotes {
    public showDescription: boolean;
    constructor(public id: number,public name: string,public likes: number, public quote:string, public author:string, public dislike:number, public datePosted: Date){
      this.showDescription=false;
    }
}
