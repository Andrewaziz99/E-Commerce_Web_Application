import "../Style/Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import image from "../assets/profile.jpg";
import data from "../data.json";
interface Props {
  price: number;
  name: string;
  imgsrc: string;
}
const Item = ({ price, name, imgsrc }: Props) => {
  return (
    <div className="page-content">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-profile ">
            <div className="row">
              <div className="col-lg-4">
                <img src={imgsrc}></img>
              </div>
              <div className="col-lg-4 ">
                <div className="main-info header-text">
                  <h4>{name}</h4>
                  <p></p>
                </div>
              </div>
              <div className="col-lg-4">
                <h4>{price} $</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
