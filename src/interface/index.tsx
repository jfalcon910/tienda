export * from './loginInterface/login.interface';
export * from './userInterface/user.interface';
export * from './productInterface/product.interface';

export interface GlobalRequestResult{
    result?: any;
    countRecords?: number;
    status?:boolean;
    request?: string; 
}