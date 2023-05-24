import { useOffersGetByRatingRepositories } from "@/src/modules/offers/application/useOffersGetByRatingRepositories";
import styles from "./page.module.scss";
import { createApiOfferRepository } from "@/src/modules/offers/infrastructure/ApiOfferRepository";
import { OfferCard } from "@/src/components/OfferCard/OfferCard";
import { useOffersGetByCategoriesRepositories } from "@/src/modules/offers/application/useOffersGetByCategoriesRepositories";

export default async function OffersListPage({params}: {params: {id: string}}){
    const {id} = params;
    const store = await useOffersGetByCategoriesRepositories(createApiOfferRepository(), id)();

    return (
        <>
            <main className={styles.main}> 
               <article className={styles.main__offersList}>
                {
                    store?
                    store.map(({website, id, title, original_price, discount_price, discount_percentage, rating, is_offer_day, is_available, delivery_is_free, image, offer_url, category, sales}) => (
                        <OfferCard 
                        website={website}
                        id={id} 
                        title={title} 
                        original_price={original_price}
                        discount_price={discount_price}
                        offer_url={offer_url} 
                        is_offer_day={is_offer_day} 
                        is_available={is_available} 
                        delivery_is_free={delivery_is_free} 
                        discount_percentage={discount_percentage} 
                        category={category}
                        image={image} 
                        rating={rating} sales={sales}
                        ></OfferCard>
                    ))
                    : <h1>No hay productos</h1>
                }
                </article> 
            </main>
        </>
    );
}