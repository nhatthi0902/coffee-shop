import './banner.scss'

function Banner({type, content}){
    var classNames = require('classnames');
    const classese = classNames("banner",type)
    return(
        <section className={classese}>
        <div className="container">
          <h1>{content}</h1>
        </div>
      </section>
    );
}

export default Banner;