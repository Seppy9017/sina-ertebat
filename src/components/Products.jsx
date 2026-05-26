import Card from "./Card";
import React, { useState } from "react";

const Products = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageSrc: "",
    price: "",
  });
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const changeHandler = (event) => {
    const { id, value } = event.target;

    if (id === "imageSrc") {
      const file = event.target.files[0];
      if (file) {
        setImage(file);

        // Optional: Create a preview URL
        const previewURL = URL.createObjectURL(file);
        setPreview(previewURL);

        setFormData((prevData) => ({ ...prevData, imageSrc: previewURL }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now(),
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);

    setFormData({
      title: "",
      description: "",
      imageSrc: "",
      price: "",
    });
    // console.log(formData);
  };

  const deleteHandler = (product, box) => {
    const newProducts = [...products];
    const cardData = newProducts.findIndex((p) => p.id === product.id);
    (e) => e.preventDefault();
    newProducts.splice(cardData, 1);
    setProducts(newProducts);
  };

  return (
    <>
      <form id="card-maker" onSubmit={submitHandler}>
        <input type="file" onChange={changeHandler} id="imageSrc" />

        <input
          type="text"
          placeholder="نام محصول"
          id="title"
          onChange={changeHandler}
          value={formData.title}
          required
        />
        <input
          type="text"
          placeholder="توضیحات"
          id="description"
          onChange={changeHandler}
          value={formData.description}
        />
        <input
          type="number"
          placeholder="قیمت"
          id="price"
          onChange={changeHandler}
          value={formData.price}
          required
        />
        <button type="submit">اضافه کردن</button>
      </form>
      <div id="products">
        {products.map((product) => (
          <Card
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            desc={product.description}
            price={product.price}
            deleteBtn={
              <button
                className="deleteCard"
                onClick={() => deleteHandler(product)}
              >
                Delete
              </button>
            }
          />
        ))}
      </div>
    </>
  );
};
export default Products;
