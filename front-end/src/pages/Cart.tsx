import { Fragment, useEffect, useState } from "react";

import "../Style/Cart.css";
import NavBar from "../component/NavBar";
function Cart() {

  const [cartData, setCartData] = useState({ total: 0, Products: [] });

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Check if token exists
        if (!token) {
          window.location.href = "/login";
          console.log("Token not found");
          return;
        }

        const response = await fetch("http://localhost:3003/cart", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
          },
        });

        if (response.ok) {
          console.log("Welcome to cart");
          const data = await response.json();
          // console.log(data.Products);
          setCartData(data);
        } else {
          // Check if token is invalid (e.g., expired or unauthorized)
          if (response.status === 401) {
            console.log("Invalid token");
            // Handle invalid token scenario (e.g., redirect to login page)
          } else {
            console.log("Failed to fetch cart data");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCartData();
  }, []);

  useEffect(() => {
    // Update total price when cartData changes
    if (cartData) {
      const totalPriceElement = document.getElementById("totalPrice");
      if (totalPriceElement) {
        totalPriceElement.innerHTML = "Total: $" + cartData.total;
      }
    }
  }, [cartData]);



  return (
    <Fragment>
      <div className="backgrounds">
        <div className="spacefo2">
          <div className="cart-page">
            <div className="cart-page-container">
              <div className="cart-page-header">
                <h2 className="cart-header-text">Your Games Cart</h2>
              </div>
              <div className="cart-page-table">
                <table className="cart-table-product">
                  <thead>
                    <tr className="cart-table-header">
                      <th className="cart-table-img">Product Image</th>
                      <th className="cart-table-desktop cart-table-payment">
                        Name
                      </th>
                      <th className="cart-table-desktop cart-table-size">
                        Category
                      </th>
                      <th className="cart-table-size right-text-mobile">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  {cartData.Products.map((product: any) => (
                    <tr className="cart-table-content" key={product._id}>
                      <td className="cart-table-image-info">
                        <img src={product.image} alt="Product Image"/>
                      </td>
                      <td className="bold-text">{product.name}</td>
                      <td>{product.category}</td>
                      <td>${product.price}</td>
                    </tr>
                  ))}

                  </tbody>
                </table>
              </div>
              <div className="cart-table-bill">
                {/* <div className="bill-sub">Subtotal: $104.97</div> */}
                <div className="bill-total bold-text">${cartData.total}</div>
              </div>
              <div className="cart-header-footer">
                <a href="/Checkout">
                  <button className="cart-header-cta red-bg" type="button">
                    Proceed to Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Cart;
