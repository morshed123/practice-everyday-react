import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FoodProductsPage from './FoodProductsPage';

const FoodProducts = () => {
    const [foodPrt, setFoodPrt] = useState([]);
    // const {setDeleteProduct} = useContext(UserContext);
    const { idCategory } = useParams();

    const productsData1 = `https://jsonplaceholder.typicode.com/users`;

    const productsData2 = `https://api.escuelajs.co/api/v1/products`;

    const productsData3 = `https://www.themealdb.com/api/json/v1/1/categories.php`;

    const productsData4 = `https://jsonplaceholder.typicode.com/users`;
    const productsData5 = `https://jsonplaceholder.typicode.com/users`;


    useEffect(() => {
        fetch(productsData3)
            .then((response) => response.json())
            .then((foodData) => {
                console.log("foodData", foodData.categories);
                setFoodPrt(foodData.categories);
                // setDeleteProduct(foodData.categories);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div className="container">
            <div className="row g-3 pt-4">
                {
                    foodPrt.map(fdProducts => <FoodProductsPage fdProducts={fdProducts} key={fdProducts.idCategory}></FoodProductsPage>)
                    // products.map(products => <FoodProductsPage products={products} key={products._id}></FoodProductsPage>)
                }
            </div>
        </div>
    );
};

export default FoodProducts;