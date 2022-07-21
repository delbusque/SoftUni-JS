import { useParams } from 'react-router-dom';

import styles from './Product.module.css'

export default function Product() {
    const { productId } = useParams();

    return (
        <h2 className={styles.product}>Product {productId}</h2>
    )
}