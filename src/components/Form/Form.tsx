"use client"
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import styles from "./Form.module.scss";
import { Offer } from "@/src/modules/offers/domain/Offer";
import { OfferRepository } from "@/src/modules/offers/domain/OfferRepositoroy";
import { useOffersGetByPricesRepository } from "@/src/modules/offers/application/useOffersGetByPricesRepository";
import { createApiOfferRepository } from "@/src/modules/offers/infrastructure/ApiOfferRepository";

const rangePrices = [
    {value: "0 - 50"},
    {value: "50 - 100"},
    {value: "100 - 500"},
    {value: "500 - 1000"},
    {value: "1000 - 2000"},
    {value: "2000 - 5000"},
    {value: "5000 - 7500"},
    {value: "7500 - 10000"},
    {value: "10000 - 15000"},
    {value: "15000 - 17500"},
    {value: "17500 - 20000"}
];

interface IProps {
    setOffers: Dispatch<SetStateAction<Offer[] | undefined>>;
}

export function Form({setOffers}: IProps) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        const values = selectedOption.split(" - ")

        useOffersGetByPricesRepository(createApiOfferRepository(), Number.parseInt(values[0]), Number.parseInt(values[1]))()
        .then(v => setOffers(v))

    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className={styles.main}> 
                <form className={styles.main__form} onSubmit={handleSubmit}>

                    <div className={styles.main__form__containerSelect}>
                        <label htmlFor="prices">Filtrar entre rango de precios</label>
                        <select name="prices" id="prices" onChange={handleSelectChange}>
                            {
                                rangePrices.map(({value}) => (
                                <option value={value}>{value}</option>  
                                ))
                            }
                        </select> 
                    </div>
                    <div>
                        <input type="checkbox" id="deliveryFree" name="deliveryFree" value="true"/>
                        <label htmlFor="deliveryFree"> Envio gratis</label><br></br>
                    </div>
                    <div>
                        <input type="submit" value="Filtrar" />
                    </div> 
               </form>
        </div>
    );
}