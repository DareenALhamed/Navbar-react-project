import { useEffect, useState } from "react";

function Navbar() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        "https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data.categories);
    };
    getProduct();
  }, []);

  console.log(products);

  return (
    <>
      <nav className="nav">
        <a className="nav-title">Ecommerce App</a>
        <ul className="nav-list">
          <li>
            <svg
              className="nav-sign"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
          </li>
          <li>
            <svg
              className="nav-fav"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          </li>
          <li>
            <svg
              className="nav-bag"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
            </svg>
          </li>
          <li>
            <div className="modal-dialog modal-dialog-centered">
              <svg
                className="nav-search"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
          </li>
        </ul>
      </nav>

      <ul className="catagorie justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            men's fashion
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            appliances
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            women's fashion
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            mobiles
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            electronics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            laptops & accessories
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            home & kitchen
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            fragrances
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            beauty
          </a>
        </li>
      </ul>

      <div className="products">
        {products.map((p) => (
          <div className="product" key={p.id}>
            <h2> {p.name}</h2>
            <img src={p.image.secure_url} alt={p.name} variant="top" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
