import { Offer } from "../domain/Offer";
import { OfferRepository } from "../domain/OfferRepositoroy";

export function useOffersGetByCategoriesRepositories(offerRepository: OfferRepository, categoryId: string) {
    return async(): Promise<Offer[] | undefined> => {
        return await offerRepository.getByCategory(categoryId);
    }
}