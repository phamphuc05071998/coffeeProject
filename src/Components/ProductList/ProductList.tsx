import React from 'react'
import styles from "./ProductList.module.scss"
import ProductItem from '../ProductItem/ProductItem'

const DUMMY_DATA = [

    {
        id: 'c1',
        title: "Red love cup",
        priceSale : 25.00,
        price: 37.00,
        image : require('./../../assets/img/product/trent-erwin-570303-unsplash.jpg')

    }, {
        id: 'c2',
        title: "Red love cup",
        priceSale : 25.00,
        price: 37.00,
        image : require('./../../assets/img/product/trent-erwin-570303-unsplash.jpg')
    },
    {
        id: 'c3',
        title: "Red love cup",
        priceSale : 25.00,
        price: 37.00,
        image : require('./../../assets/img/product/trent-erwin-570303-unsplash.jpg')
    },
    {
        id: 'c4',
        title: "Red love cup",
        priceSale : 25.00,
        price: 37.00,
        image : require('./../../assets/img/product/trent-erwin-570303-unsplash.jpg')
    },
    {
        id: 'c5',
        title: "Red love cup",
        priceSale : 25.00,
        price: 37.00,
        image : require('./../../assets/img/product/trent-erwin-570303-unsplash.jpg')
    },
    {
        id: 'c6',
        title: "Red love cup",
        priceSale : 25.00,
        price: 37.00,
        image : require('./../../assets/img/product/trent-erwin-570303-unsplash.jpg')
    },
    {
        id: 'c7',
        title: "Red love cup",
        priceSale : 25.00,
        price: 37.00,
        image : require('./../../assets/img/product/trent-erwin-570303-unsplash.jpg')
    },
    {
        id: 'c8',
        title: "Red love cup",
        priceSale : 25.00,
        price: 37.00,
        image : require('./../../assets/img/product/trent-erwin-570303-unsplash.jpg')
    }
    ,
    {
        id: 'c9',
        title: "Red love cup",
        priceSale : 25.00,
        price: 37.00,
        image : require('./../../assets/img/product/trent-erwin-570303-unsplash.jpg')
    }

]


const ProductList = () => {
  return (
    <div className={styles.productList}>{DUMMY_DATA.map((product) => <ProductItem title={product.title} image={product.image} salePrice={product.priceSale} price={product.price} size='small'/>)}</div>
  )
}

export default ProductList