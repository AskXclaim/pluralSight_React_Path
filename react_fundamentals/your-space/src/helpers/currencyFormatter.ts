import {getDisplayLocale, getSystemLocale} from "../helpers";
import {getCurrency} from "locale-currency"

const getFormattedPriceBasedOnLocale = (price: number, locale: string = "en-GB"): string => {
    const currencyCode = getCurrency(locale);
    return Intl.NumberFormat(locale, {style: "currency", currency: currencyCode}).format(price);
}

const formatPriceToLocaleDisplayCurrency = (price: number): string => {
    const locale = getDisplayLocale();
    return getFormattedPriceBasedOnLocale(price, locale);
}

const formatPriceToLocaleSystemCurrency = (price: number): string => {
    const locale = getSystemLocale();
    return getFormattedPriceBasedOnLocale(price, locale);
}

export {formatPriceToLocaleDisplayCurrency, formatPriceToLocaleSystemCurrency};