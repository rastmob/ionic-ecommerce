export class Cart{
    public id: number;
    public imgUrl: string;
    public price: string;
    public size: string;
    
    public description:string;
    public isChecked: boolean;
    public quantity: number;
    public name: string;

    public constructor(model) {
        this.id = model.id;
        this.description = model.description;
        this.isChecked = model.isChecked;
        
        this.size = model.size;
        this.quantity = model.quantity || 0;
        this.name = model.name;
        this.imgUrl = model.imgUrl;
        this.price = model.price;
    }

}