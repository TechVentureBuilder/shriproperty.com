/**
 * Format currency
 * @example
 * ```jsx
 *  const currency = useCurrency();
 *  <h1>{currency(500)}</h1>
 * ```
 */
function useFormatCurrency() {
	/**
	 * This function will format the currency according to the locale
	 * @param {number} unFormattedCurrency unformatted date
	 * @example
	 * ```jsx
	 *  const currency = useCurrency();
	 *  <h1>{currency(500)}</h1>
	 * ```
	 */
	return (unFormattedCurrency: number | string) => {
		const inputToNumber =
			typeof unFormattedCurrency === "string"
				? parseInt(unFormattedCurrency)
				: unFormattedCurrency;

		return new Intl.NumberFormat(navigator.language, {
			style: "currency",
			currency: "INR",
			maximumSignificantDigits: 3,
		}).format(inputToNumber);
	};
}

export default useFormatCurrency;
