import MongoCRUD from "../../CRUD/mongo";

export default class Menu {
    private mongo
    constructor(){
        this.mongo = new MongoCRUD()
    }
    public async createMenu(doc:any) {
        let menuItem = await this.mongo.save('Menu',doc)
        if (menuItem?.MENU_ID) return {status:201,data:{message:'successfully added food'}}
        else throw new Error('error while saving data')
    }
    public async getMenuList(doc:any) {
        let a = await this.mongo.save('Users',doc)
        console.log(a);
    }
    public async getMenuById(doc:any) {
        let a = await this.mongo.save('Users',doc)
        console.log(a);
    }
    public async updateMenu(doc:any) {
        let a = await this.mongo.save('Users',doc)
        console.log(a);
    }
}