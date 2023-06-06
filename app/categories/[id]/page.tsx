"use client"

import styles from "./page.module.scss";
import { createApiOfferRepository } from "@/src/modules/offers/infrastructure/ApiOfferRepository";
import { OfferCard } from "@/src/components/OfferCard/OfferCard";
import { useOffersGetByCategoriesRepositories } from "@/src/modules/offers/application/useOffersGetByCategoriesRepositories";
import { Form } from "@/src/components/Form/Form";
import { useEffect, useState } from "react";
import { Offer } from "@/src/modules/offers/domain/Offer";

export default function OffersListPage({params}: {params: {id: string}}){
    const[offers, setOffers] = useState<Offer[]>();

    const {id} = params;

    useEffect(() => {
        useOffersGetByCategoriesRepositories(createApiOfferRepository(), id)()
                .then(setOffers);
        
    }, [id])

    return (
        <>
            <main className={styles.main}> 
                <Form setOffers={setOffers}></Form>
               <article className={styles.main__offersList}>
                {
                    offers?
                    offers.map(({website, id, title, original_price, discount_price, discount_percentage, rating, is_offer_day, is_available, delivery_is_free, image, offer_url, category, sales}) => (
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
                    : <h1>No hay ofertas</h1>
                }
                </article> 
            </main>
        </>
    );
}