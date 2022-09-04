import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodProductsPage = ({fdProducts}) => {
      // const history = useHistory();
      let navigate = useNavigate();
      const handleClick = idCategory => {
          // history.push(`product/${idCategory}`)
          // navigate("/home");
          navigate(`food-products/${idCategory}`)
      };
      // function handleClick() {
      //     navigate("/home");
      //     // navigate(`${newRecord.id}`);
      // }


    return (
        <>
             <div  className="col-md-4">
                <div className="card text-center product">
                    <img src={fdProducts.strCategoryThumb} className="card-img-top" alt="image" />
                    <div className="card-body mb-3">
                        <h5 className="card-title">{fdProducts.strCategory}</h5>
                        <p className="card-text">Reguler Price: {fdProducts.strCategoryDescription}</p>
                        <div className="add_minus_quantity">
                            <i className="fa-solid fa-minus"></i>
                            <input type="text" className="mx-3" />
                            <i className="fa-solid fa-plus"></i>
                            <i className="fa-solid fa-trash-alt ms-3"
                            //  onClick={() => removeItem(id)}
                            ></i>
                        </div>
                        <div className="add_to_cart_btn pt-4">
                            <a href="#" className="btn btn-sm btn-primary" onClick={() => handleClick(fdProducts._id)}>Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodProductsPage;