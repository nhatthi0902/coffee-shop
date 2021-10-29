import "./footer.scss";
import Navigation from "../Navigation";
import FooterLogo from "./FooterLogo";
import Container from "../Grid/Container";
function Footer() {
  return (
   <Container>
      <footer className="footer">
      <FooterLogo />
      <div className="content-wrapper">
        <nav>
          <Navigation />
          <ul className="social-list">
            <li className="social">
              <a>
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li className="social">
              <a>
                <i className="fab fa-twitter-square" />
              </a>
            </li>
            <li className="social">
              <a>
                <i className="fab fa-google-plus-square" />
              </a>
            </li>
            <li className="social">
              <a>
                <i className="fab fa-instagram-square" />
              </a>
            </li>
          </ul>
        </nav>
        <p>
          This website template has been designed by Free Website Templates for
          you, for free. You can replace all this text with your own text. You
          can remove any link to our website from this website template, you're
          free to use this website template without linking back to us. If
          you're having problems editing this website template, then don't
          hesitate to ask for help on the Forums.
        </p>
      </div>
    </footer>
   </Container>
  );
}

export default Footer;
