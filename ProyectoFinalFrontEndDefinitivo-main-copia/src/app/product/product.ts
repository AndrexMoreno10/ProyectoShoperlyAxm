import { Category } from "../category/category"
import { Supplier } from "../supplier/supplier"

export interface Product{

    id?: number;
	name?: string; 
    description?: string; 
	price?: number;
    supplier?: Supplier|undefined;
    category?: Category|undefined;
    state?: string;
    url?: string;
    quantity?: number; //cantidad en stock
    quantityclient?: number;
    

}

export interface UrlResponse{
    url: string;
}