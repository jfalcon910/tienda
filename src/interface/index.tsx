export * from './loginInterface/login.interface';
export * from './userInterface/user.interface';
export * from './productInterface/product.interface';
export * from './supplierInterface/supplier.interface'

export interface GlobalRequestResult{
    result?: any;
    countRecords?: number;
    status?:boolean;
    request?: string; 
    message?: string;
}