import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.scss";
import { Button } from "react-bootstrap";

const Details = () => {
  const param = useParams();
  const [product, setProduct] = useState([]);
  // console.log(param.id * 1);
  const paramId = param.id * 1;
  // console.log(paramId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/" +
            paramId
        );
        setProduct([response.data]);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [paramId]);
  // //////////////////////////////////////////////

  // //////////////////////////////////////////////
  return (
    <section className="details-section">
      <div className="container-det">
        <div className="details-content">
          {product.map((el) => {
            return (
              <div className="details-card" key={el.id}>
                <img src={el.image} alt="" />
                <h1 className="i-1">Product Details</h1>
                <div className="i-2">
                  <p>Name:</p>
                  <h3 className="i-5">
                    <h6>{el.id}</h6>
                  </h3>
                  <h3>{el.name}</h3>
                </div>
                <div className="i-3">
                  <p>Brand:</p>
                  <h3>{el.brand}</h3>
                </div>
                <div className="i-3">
                  <p>Цена:</p>
                  <h3 className="rf">{el.price}$</h3>
                  <h4 className="rf">{el.priceSale}$</h4>
                </div>
                <div className="i-4">
                  <p>Description:</p>
                  <h5>{el.description}</h5>
                </div>
              </div>
            );
          })}
          <div className="back">
            <Link to={"/Home"}>
              <Button variant="secondary">
                <img src="/back.png" alt="" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
