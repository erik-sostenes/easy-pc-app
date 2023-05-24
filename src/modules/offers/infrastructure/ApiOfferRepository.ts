import { Offer } from "../domain/Offer";
import { OfferRepository } from "../domain/OfferRepositoroy";
import { OFFER_LIST } from "./OffersData";

export function createApiOfferRepository(): OfferRepository {
    return {
        getByCategory,
        getByRating,
        getByPrice
    }
}

async function getByCategory(categoryId: string): Promise<Offer[] | undefined>{
    const products = await fetch(`/api/product/?category_id=${categoryId}`).then(
        (response) => response.json() as Promise<Offer[]>
    );

    return products;
}

async function getByRating(rating: Number): Promise<Offer[] | undefined> {
    const products = await fetch(`http://localhost:5000/api/v1/get-offers-by-rating?rating=${rating}`).then(
        (response) => response.json() as Promise<Offer[]>
    );

    return products;
   // return Promise.all(OFFER_LIST);
}

async function getByPrice(gte: Number, lte: Number): Promise<Offer[] | undefined>{
    const products = await fetch(`/api/product/?gte=${gte}&lte=${lte}`).then(
        (response) => response.json() as Promise<Offer[]>
    );

    return products;
}