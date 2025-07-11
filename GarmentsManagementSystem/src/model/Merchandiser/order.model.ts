import { Bom } from "./bom.model";
import { OrderStatus } from "./orderStatus.model";

export class Order{

    id!: string;
    buyerOrganization!: string;
    shippingAddress!: string;
    orderDate!: Date;
    deliveryDate!: Date;
    smallSize!: number;
    sPrice!: number;
    mediumSize!: number;
    mPrice!: number;
    largeSize!: number;
    lPrice!: number;
    subTotal!:number;
    vat!: number;
    paidAmount!: number;
    dueAmount!: number;
    total!: number;
    remarks!: string;
    status!: OrderStatus;
    style!: Bom

    constructor(id: string, buyerOrganization:string, shippingAddress: string, orderDate: Date, deliveryDate:Date,
        smallSize: number,sPrice:number, mediumSize: number,mPrice:number,largeSize:number,lPrice: number,
        subTotal: number,vat:number, paidAmount:number, dueAmount: number,total:number, remarks:string){
            this.id = id;
            this.buyerOrganization = buyerOrganization;
            this.shippingAddress = shippingAddress;
            this.orderDate = orderDate;
            this.deliveryDate = deliveryDate;
            this.smallSize = smallSize;
            this.sPrice = sPrice;
            this.mediumSize = mediumSize;
            this.mPrice = mPrice;
            this.largeSize = largeSize;
            this.lPrice = lPrice;
            this.subTotal = subTotal;
            this.vat = vat;
            this.paidAmount = paidAmount;
            this.dueAmount = dueAmount;
            this.total = total;
            this.remarks = remarks;

            this.status = this.status;
            this.style = this.style;
        }

}