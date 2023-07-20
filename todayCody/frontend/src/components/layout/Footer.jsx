import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="top">
        <div className="item">
          <Link to="#">Terms & Conditions</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
        <div className="logo">
          <Link to="/">
            <img src="/assets/icon/footer-logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="item">
          <Link to="#">Cookies</Link>
          <Link to="#">Refunds</Link>
          <Link to="#">License</Link>
        </div>
      </div>
      <div className="border"></div>
      <div className="bottom">CopyRight 2023</div>
    </footer>
  );
}
