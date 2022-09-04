import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../products/Products';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    // const {setDeleteProduct} = useContext(UserContext);
    const { id } = useParams();

    const productsData = `https://idbdev.com/motion2/public/api/product-is-here-caught-me`;


    useEffect(() => {
        fetch(productsData)
            .then((response) => response.json())
            .then((productData) => {
                console.log("productData", productData.data);
                setProducts(productData.data);
                // setDeleteProduct(productData.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div className="container">
            <div className="row g-3 pt-4">
                {
                    products.map(products => <Products products={products} key={products.id}></Products>)
                    // products.map(products => <Products products={products} key={products._id}></Products>)
                }
            </div>
        </div>
    );
};

export default HomePage;