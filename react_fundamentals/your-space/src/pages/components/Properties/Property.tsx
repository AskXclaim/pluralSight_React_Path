import {useEffect, useState} from "react";
import {formatPriceToLocaleDisplayCurrency} from "@/helpers";

const Property = ({property}) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
            setIsClient(true);
        }
        , [])
    return ( 
        <tr>    
            <td> {property.address}</td>
            <td> {isClient ? formatPriceToLocaleDisplayCurrency(property.price) : "...loading"}</td>
        </tr>
    )
}

export default Property;