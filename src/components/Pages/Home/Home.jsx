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
                  <img src="/Редактировать.svg" alt="" />
                  <img onClick={() => deletePr(post.id)} src="/Корзина.svg" />
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
