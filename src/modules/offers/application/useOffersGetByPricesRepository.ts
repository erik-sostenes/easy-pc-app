import { Offer } from "../domain/Offer";
import { OfferRepository } from "../domain/OfferRepositoroy";

export function useOffersGetByPricesRepository(offerRepository: OfferRepository, greater: number, less: number) {
    return async (): Promise<Offer[] | undefined> => {
        return await offerRepository.getByPrice(greater, less);
    }
}