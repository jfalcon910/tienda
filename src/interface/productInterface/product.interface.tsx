import { SuplierProductInterface } from '../supplierInterface/supplier.interface';

export interface ProductInterface{
    state?: number;
    _id?: string;
    created_at?: string;
    name: string;
    description: string;
    supplier: SuplierProductInterface;
    price: number;
    actualStock: number;
    photo: string;
}