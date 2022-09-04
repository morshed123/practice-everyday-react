import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ShoppingProductsPage = ({shopProducts}) => {
      // const history = useHistory();
      let navigate = useNavigate();
      const handleClick = id => {
          // history.push(`product/${id}`)
          navigate("/home");
        //   navigate(`shop-products/${id}`);
      };
      // function handleClick() {
      //     navigate("/home");
      //     // navigate(`${newRecord.id}`);
      // }


    return (
        <>
             <div  className="col-md-4">
                <div className="card text-center product">
                    <img src={shopProducts.category.image} className="card-img-top" alt="image" />
                    <div className="card-body mb-3">
                        <h5 className="card-title">{shopProducts.category.name}</h5>
                        <h6 className="card-title">{shopProducts.title}</h6>
                        <p className="card-text">{shopProducts.category.description}</p>
                        <p className="card-text">Price: $ {shopProducts.price}</p>
                        <div className="add_minus_quantity">
                            <i className="fa-solid fa-minus"></i>
                            <input type="text" className="mx-3" />
                            <i className="fa-solid fa-plus"></i>
                            <i className="fa-solid fa-trash-alt ms-3"
                            //  onClick={() => removeItem(id)}
                            ></i>
                        </div>
                        <div className="add_to_cart_btn pt-4">
                            <Link className="btn btn-sm btn-primary" onClick={() => handleClick(shopProducts._id)}>Add to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingProductsPage;