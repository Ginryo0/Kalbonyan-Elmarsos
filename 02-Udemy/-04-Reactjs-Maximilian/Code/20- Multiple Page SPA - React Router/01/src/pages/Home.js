import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  // Navigating programatically -> on timer or smth
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }

  return (
    <>
      <h1>This is home</h1>
      <p>
        Go to <Link to="products">Products</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}

export default HomePage;
