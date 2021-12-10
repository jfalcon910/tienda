export interface SuplierInterface{
    state?: number;
    _id?: string;
    created_at?: string;
    name: string;
    phone: string;
    minimum_amount: number;
    visit_date: string;
}

export interface SuplierProductInterface{
    _id?: string;
    name: string;
}