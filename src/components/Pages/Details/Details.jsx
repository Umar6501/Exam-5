import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.scss";

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
    <div>
      {product.map((el) => {
        return (
          <div className="details-card" key={el.id}>
            <h1>{el.code}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
