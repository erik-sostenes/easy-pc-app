import { Offer } from "@/src/modules/offers/domain/Offer";
import styles from "./OfferCard.module.scss";

export function OfferCard({website, id, title, original_price, discount_price, discount_percentage, rating, is_offer_day, is_available, delivery_is_free, image, offer_url, sales}: Offer): JSX.Element {
    return (
        <section key={id} className={styles.main__productRatingCard}>
            <div className={styles.main__imageContainer}>
                <figure>
                    <img src={image} alt={title}/>
                </figure>
                <div className={styles.main__title}>
                    <span>{title}</span>
                </div>
            </div>
            {
                is_offer_day? 
                    <div className={styles.main__offerDay}>Oferta del día</div>
                    : <div></div>
            }
            {
                is_available? 
                    <div className={styles.main__isAvailable}>Esta disponible</div>
                    : <div>No esta disponible</div>
            }
            <div className={styles.main__body}>  
                <div className={styles.main__descriptionContainer}>
                    <span style={{fontWeight: "initial"}}><del>${original_price}</del></span>
                    <span>${discount_price} - {discount_percentage}</span>
                </div>
                <div className={styles.main__containerRating}>
                    <span>{rating.rating} - {rating.amount}</span>
                </div> 
            </div>
            <div>
            { 
                delivery_is_free? 
                    <span className={styles.main__deliveryIsFree}>{delivery_is_free}</span>
                    : <span></span>
            }
            </div>
            <div>
                <span style={{fontSize: "13px"}}>{sales.days} <strong>{sales.amount}</strong></span>
            </div>
            <div className={styles.main__button}>
                <a href={offer_url} target="_blank" rel="noopener noreferrer">Visitar Oferta</a>
            </div>
        </section>
    )
}