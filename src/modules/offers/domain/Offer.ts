import { Category } from "./Category";
import { Rating } from "./Rating";
import { Sales } from "./Sales";

export interface Offer{
    website: string;
    id: string;
    title: string;
    original_price: number;
    discount_price: number;
    offer_url: string;
    is_offer_day: boolean;
    is_available: boolean;
    delivery_is_free: string;
    discount_percentage: string;
    image: string;
    category: Category;
    rating: Rating;
    sales: Sales;
}