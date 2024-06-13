'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import productData from '../../api/product.json';

interface Product {
    id: string;
    name: string;
    poster: string;
    before: string;
    sales: string;
    price: string;
    review: string;
    category: string;
}

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (query) {
            const results = productData.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(results);
        }
    }, [query]);

    return (
        <div>
            <h1>검색 결과</h1>
            {filteredProducts.length > 0 ? (
                <ul>
                    {filteredProducts.map(product => (
                        <li key={product.id}>
                            <img src={product.poster} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.price}원</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>검색 결과가 없습니다.</p>
            )}
        </div>
    );
}
