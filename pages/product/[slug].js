import React from 'react'
import { useRouter } from 'next/router';
import data from '../../utils/data';

export default function ProductScreen() {
    const router = useRouter();
    const { slug } = router.query;
    const product = data.products.find((a) => a.slug === slug);

    if (!product) {
        return (<div>product not foound</div>)
    }

    return (
        <div>
            <h1>{product.name} page</h1>
        </div>
    )
}
