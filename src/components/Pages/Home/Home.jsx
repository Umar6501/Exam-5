import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Button, Form, InputGroup, NavLink } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  // PAGINATION
  let limit = 10;
  let numOfpages = Math.ceil(allPosts.length / limit);
  let arrBtns = [];
  for (let i = 1; i <= numOfpages; i++) {
    arrBtns.push(i);
  }

  const fetchPosts = async (page) => {
    try {
      const res = await axios.get(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products?limit=${limit}&page=${page}`
      );
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get(
          "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products"
        );
        setAllPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllPosts();
  }, []);
  useEffect(() => {
    fetchPosts(page);
  }, [page]);
  // ///////////////////////////////
  function deletePr(Id) {
    axios
      .delete(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/${Id}`
      )
      .catch((err) => console.log(err));
    setTimeout(() => {
      window.location.reload();
    }, 1050);
  }

  return (
    <section className="home-section">
      <div className="container-home">
        <div className="home-content">
          <div className="info-content">
            <h1>Все товары (7)</h1>
            <Form.Control
              className="search-form"
              type="text"
              placeholder="Seach..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="all-product">
            <div className="head-content">
              <p className="h-item">#</p>
              <p className="h-item1">Наименование</p>
              <p className="h-item2">Артикул</p>
              <p className="h-item3">Бренд</p>
              <p className="h-item4">Цена</p>
              <p className="h-item5">Оплачено</p>
              <p className="h-item6">Действие</p>
            </div>
            {/* ................................ */}
            {posts.map((post, index) => (
              <div key={index} className="d-flex flex-row b-content">
                <input
                  className="form-check-input b-item1"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <Link to={`/Details/${post.id}`}>
                  <p className="b-item2">Товар:{post.id}</p>
                </Link>
                <Link to={`/Details/${post.id}`}>
                  <p className="b-item3">{post.code}</p>
                </Link>
                <Link to={`/Details/${post.id}`}>
                  <p className="b-item4">{post.brand}</p>
                </Link>
                <Link to={`/Details/${post.id}`}>
                  <p className="b-item5">{post.price} $</p>
                </Link>
                <Link to={`/Details/${post.id}`}>
                  <p className="b-item6">{post.priceSale} $</p>
                </Link>

                <p className="b-item7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    // fill="none"
                  >
                    <g clipPath="url(#clip0_171_7786)">
                      <path
                        d="M15.5566 1.01258C16.148 1.60404 16.1415 2.56501 15.542 3.14832L8.93672 9.57508C8.65668 9.84755 8.28139 10 7.89068 10L5.99999 9.99999L5.99999 8.11441C5.99999 7.72067 6.15481 7.34272 6.43102 7.06213L12.8983 0.492289C13.4827 -0.101376 14.4389 -0.105136 15.0279 0.483912L15.5566 1.01258Z"
                        // fill="#9999EE"
                      />
                      <path
                        d="M7 1H4H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V10"
                        stroke="#5B5CE2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_171_7786">
                        <rect
                          width="16"
                          height="16"
                          //  fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    onClick={() => deletePr(post.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g clipPath="url(#clip0_171_7778)">
                      <path
                        d="M2 6V14.5C2 15.3284 2.67157 16 3.5 16H12.5C13.3284 16 14 15.3284 14 14.5V6H2Z"
                        // fill="#5B5CE2"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2V1C11 0.447715 10.5523 0 10 0H6C5.44772 0 5 0.447715 5 1V2H0.5C0.223858 2 0 2.22386 0 2.5V3.5C0 3.77614 0.223858 4 0.5 4H15.5C15.7761 4 16 3.77614 16 3.5V2.5C16 2.22386 15.7761 2 15.5 2H11Z"
                        // fill="#9999EE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_171_7778">
                        <rect
                          width="16"
                          height="16"
                          // fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
              </div>
            ))}
            <div className="btns">
              {arrBtns?.map((item) => (
                <button
                  className="pagination"
                  key={item}
                  onClick={() => setPage(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="bottom-content">
            <Link to="/AddCart">
              <Button variant="success"> + Новый Товар</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
