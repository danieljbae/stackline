export interface Product {
	id: string;
	title: string;
	image: string;
	subtitle: string;
	brand: string;
	reviews: Review[];
	tags: string[];
}

export interface Review {
	customer: string;
	review: string;
	score: number;
}

export interface Sales {
	weekEnding: string;
	retailSales: number;
	wholesaleSales: number;
	unitsSold: number;
	retailerMargin: number;
}
