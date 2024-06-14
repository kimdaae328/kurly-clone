'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CiSearch } from "react-icons/ci";
import productData from '../../api/product.json';
import styles from '../../styles/search/search.module.css';

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

function SearchResults() {
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
        <div className={styles.productContent}>
            <h2 className={styles.productTitle}><span>{query}</span>검색 결과</h2>
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
                <div className={styles.notataWrap}>
                    <CiSearch className={styles.searchIcon} />
                    <p className={styles.nodata}>검색된 상품이 없습니다.<br/>다른 검색어를 입력해 주세요.</p>
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResults />
        </Suspense>
    );
}
