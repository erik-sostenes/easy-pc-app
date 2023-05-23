import { Category } from "./Category";
import { Rating } from "./Rating";
import { Sales } from "./Sales";

export interface Offer{
    website: string;
    id: string;
    title: string;
    originalPrice: number;
    discountPrice: number;
    offerUrl: string;
    isOfferDay: boolean;
    isAvailable: boolean;
    deliveryIsFree: string;
    discountPercentage: string;
    image: string;
    category: Category;
    rating: Rating;
    sales: Sales;
}