import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios(`/api/products?id=${productId}`);
      setProduct(data);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <section className="section section-center">
        <h2>Loading ....</h2>
      </section>
    );
  }

  const { fields } = product;
  const { name, desc, price, img } = fields;
  console.log(fields);
  return (
    <section className="section section-center">
      <Link className="link" to="/">
        Back Home
      </Link>
      <div>
        <div className="title">
          <h2>{name}</h2>
          <div className="title-underline"></div>
        </div>
        <div className="single-product">
          <img src={img[0].url} alt={name} className="single-product-img" />
          <div>
            <h5>{name}</h5>
            <h5 className="price">{price}</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;
