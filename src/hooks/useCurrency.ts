const useCurrency = () => {
	/**
	 * @param {number} unFormattedCurrency unformatted date
	 * @return {string} if unFormattedCurrency cannot be converted to `Date` than will return null else formattedDate
	 */
	return (unFormattedCurrency: string) => {
		const inputToNumber = parseInt(unFormattedCurrency);
		return new Intl.NumberFormat(navigator.language, {
			style: "currency",
			currency: "INR",
			maximumSignificantDigits: 3,
		}).format(inputToNumber);
	};
};

export default useCurrency;
