import React, { useEffect, useState } from "react";
import "./AddCart.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form, InputGroup } from "react-bootstrap";

const Edit = () => {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    brand: "",
    code: "",
    comment: "",
    price: "",
    priceSale: "",
  });

  useEffect(() => {
    axios
      .get("https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put(
        "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/" + id,
        values
      );
      console.log(res);
      toHome("/Home");
    } catch (err) {
      console.log(err);
    }
  };
  const toHome = useNavigate();
  return (
    <section className="addCart-section">
      <div className="container-ad">
        <div className="add-content">
          <button className="p1">Основные</button>
          <div className="inputs">
            <div className="top-inputs">
              <Form className="form" onSubmit={handleEdit}>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Название *
                  </InputGroup.Text>
                  <Form.Control
                    name="name"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    required
                    value={values.name}
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                  />
                </InputGroup>
                <InputGroup size="lg" className="d-flex input-group">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Бренд *
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    className="brend-input-group"
                    name="brand"
                    required
                    value={values.brand}
                    onChange={(e) =>
                      setValues({ ...values, brand: e.target.value })
                    }
                  />
                  <InputGroup.Text id="label inputGroup-sizing-lg">
                    Артикул *
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    name="code"
                    required
                    value={values.code}
                    onChange={(e) =>
                      setValues({ ...values, code: e.target.value })
                    }
                  />
                </InputGroup>
                <InputGroup className="last-input">
                  <InputGroup.Text>Описание *</InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    name="comment"
                    required
                    value={values.description}
                    onChange={(e) =>
                      setValues({ ...values, description: e.target.value })
                    }
                  />
                </InputGroup>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Цена
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    name="price"
                    className="brend-input-group"
                    required
                    value={values.price}
                    onChange={(e) =>
                      setValues({ ...values, price: e.target.value })
                    }
                  />
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Цена со скидкой
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    name="priceSale"
                    value={values.priceSale}
                    onChange={(e) =>
                      setValues({ ...values, priceSale: e.target.value })
                    }
                  />
                </InputGroup>
                <div className="btns">
                  <button
                    className="Save-btn btn btn-success mx-1"
                    type="submit"
                  >
                    Edit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="bottom-content">
          <Link to={"/Home"}>
            <Button variant="secondary">
              <img src="/back.png" alt="" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Edit;
