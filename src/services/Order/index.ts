import MongoCRUD from "../../CRUD/mongo";

export default class Order {
    private mongo
    constructor(){
        this.mongo = new MongoCRUD()
    }
    public async getOrderList(doc:any) {
        const response = await this.mongo.find('Order',doc)
        if(response) return {status:200,data:{status: 200,data: response}}
        throw new Error('error while getting data')
    }
    public async updateOrder(filter:any,doc: any) {
        const response = await this.mongo.findOneAndUpdate('Order',filter,doc)
        if (response?._doc?.ORDER_ID) return {status:200,data:{status: 200,message:'successfully updated order status'}}
        throw new Error('error while updating status')
    }
}