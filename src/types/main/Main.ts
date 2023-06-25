interface MainHomePage {
    title: string;
    description: string;
    featuredProducts: Product[];
    latestNews: NewsItem[];
}

interface Product {
    name: string;
    price: number;
    imageUrl: string;
    category: string;
}

interface NewsItem {
    title: string;
    date: Date;
    content: string;
    imageUrl?: string;
}

export type {
    MainHomePage,
    Product,
    NewsItem,
}