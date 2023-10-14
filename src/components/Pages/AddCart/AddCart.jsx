import { Button, Form, InputGroup } from "react-bootstrap";
import "./AddCart.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddCart = () => {
  const [values, setValues] = useState({
    name: "",
    brand: "",
    code: "",
    comment: "",
    price: "",
    priceSale: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    toHome("/home");
    try {
      const res = await axios.post(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products`,
        values
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const toHome = useNavigate();
  return (
    <section className="addCart-section">
      <div className="container-ad">
        <div className="add-content">
          <p className="p1">Основные</p>
          <div className="inputs">
            <div className="top-inputs">
              <Form className="form" onSubmit={handleSubmit}>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Название *
                  </InputGroup.Text>
                  <Form.Control
                    name="name"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    required
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
                    onChange={(e) =>
                      setValues({ ...values, comment: e.target.value })
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
                    required
                    onChange={(e) =>
                      setValues({ ...values, price: e.target.value })
                    }
                  />
                </InputGroup>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Цена со скидкой
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    name="priceSale"
                    onChange={(e) =>
                      setValues({ ...values, priceSale: e.target.value })
                    }
                  />
                </InputGroup>
                <button className="Save-btn btn btn-success">save</button>
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

export default AddCart;
