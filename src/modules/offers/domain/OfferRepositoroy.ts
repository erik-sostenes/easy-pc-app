import { Offer } from "./Offer";

export interface OfferRepository {
    getByCategory: (categoryId: string) => Promise<Offer[] | undefined>;
    getByRating: (rating: Number) => Promise<Offer[] | undefined>; 
    getByPrice: (gte: Number, lte: Number) => Promise<Offer[] | undefined>;
} 