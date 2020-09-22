function panggilFilterParameters(value) {
	var arr = [
	{negara: 'Indonesia', benua: 'Asia'},
	{negara: 'Jerman', benua: 'Eropa'},
	{negara: 'Spanyol', benua: 'Eropa'},
	{negara: 'Korea', benua: 'Asia'},
	{negara: 'Portugal', benua: 'Eropa'},
	{negara: 'Amerika Serikat', benua: 'Amerika'},
	];

	var panggil= arr.filter(function(item) {
		return item.benua == value;
	});
	console.log(panggil);
}

console.log("Negara di Benua Eropa")
panggilFilterParameters("Eropa")

console.log("Negara di Benua Asia")
panggilFilterParameters("Asia")