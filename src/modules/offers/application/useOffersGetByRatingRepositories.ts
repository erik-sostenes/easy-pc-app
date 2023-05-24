import { Offer } from "../domain/Offer";
import { OfferRepository } from "../domain/OfferRepositoroy";

export function useOffersGetByRatingRepositories(offerRepository: OfferRepository, rating: number)  {
    return async (): Promise<Offer[] | undefined> => {
        return await offerRepository.getByRating(rating);
    }
}