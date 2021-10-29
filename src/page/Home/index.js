import "./home.scss";
import Banner from "../../component/Banner";
import Section from "../../component/Section";
function Home() {
  return (
    <>
      <Banner
        type="banner-home"
        content="Maecenas pharetra hendrerit eros sed laoreet."
      />
      <Section className="showcase hot-showcase">
        <div className="title">
          <img src="/images/whats-hot.jpg" />
          <a className="btn btn-hot">Find out more</a>
        </div>
        <ul>
          <li className="product">
            <a>
              <img src="/images/coffee1.jpg" />
            </a>
          </li>
          <li className="product">
            <a>
              <img src="/images/coffee2.jpg" />
            </a>
          </li>
          <li className="product">
            <a>
              <img src="/images/coffee3.jpg" />
            </a>
          </li>
        </ul>
      </Section>
      <Section className="showcase blogs-showcase">
        <ul className="hot-blogs">
          <li className="blog-showcase">
            <a className="img-wrapper">
              <img src="/images/coffee-ingredients.jpg" />
            </a>
            <div className="content">
              <a>
                <h2>Lorem ipsum</h2>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                in tellus id eros iaculis porttitor eget ultrices mauris. Nulla
                sodales congue ante, id
              </p>
            </div>
            <a className="read-more">Read more</a>
          </li>
          <li className="blog-showcase">
            <a className="img-wrapper">
              <img src="/images/black-coffee.jpg" />
            </a>
            <div className="content">
              <a>
                <h2>Lorem ipsum</h2>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                in tellus id eros iaculis porttitor eget ultrices mauris. Nulla
                sodales congue ante, id
              </p>
            </div>
            <a className="read-more">Read more</a>
          </li>
          <li className="blog-showcase">
            <a className="img-wrapper">
              <img src="/images/chocolate.jpg" />
            </a>
            <div className="content">
              <a>
                <h2>Lorem ipsum</h2>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                in tellus id eros iaculis porttitor eget ultrices mauris. Nulla
                sodales congue ante, id
              </p>
            </div>
            <a className="read-more">Read more</a>
          </li>
        </ul>
      </Section>
    </>
  );
}

export default Home;
