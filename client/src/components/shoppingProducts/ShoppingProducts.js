import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShoppingProductsPage from './ShoppingProductsPage';

const ShoppingProducts = () => {
    const [shopPrt, setShopPrt] = useState([]);
    // const {setDeleteProduct} = useContext(UserContext);
    const { id } = useParams();

    const productsData1 = `https://jsonplaceholder.typicode.com/users`;

    const productsData2 = `https://api.escuelajs.co/api/v1/products`;

    const productsData3 = `https://www.themealdb.com/api/json/v1/1/categories.php`;

    const productsData4 = `https://jsonplaceholder.typicode.com/users`;
    const productsData5 = `https://jsonplaceholder.typicode.com/users`;


    useEffect(() => {
        fetch(productsData2)
            .then((response) => response.json())
            .then((shopData) => {
                console.log("shopData", shopData);
                setShopPrt(shopData);
                // setDeleteProduct(shopData.categories);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div className="container">
            <div className="row g-3 pt-4">
                {
                    shopPrt.map(shopProducts => <ShoppingProductsPage shopProducts={shopProducts} key={shopProducts.id}></ShoppingProductsPage>)
                    // products.map(products => <ShoppingProductsPage products={products} key={products._id}></ShoppingProductsPage>)
                }
            </div>
        </div>
    );
};

export default ShoppingProducts;