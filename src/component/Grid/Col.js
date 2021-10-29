import "./grid.scss";

export default function Col({ auto, xs, sm, md, lg, xl, xxl, children }) {
  function sizeMapping(type, size) {
    return size === xs ? `col-${size}` : `col-${type}-${size}`;
  }

  function createClassName() {
    let classNameArr = [];
    if (auto) {
      classNameArr.push("col");
    }
    if (xs) {
      classNameArr.push(sizeMapping("xs", xs));
    }
    if (sm) {
      classNameArr.push(sizeMapping("sm", sm));
    }
    if (md) {
      classNameArr.push(sizeMapping("md", md));
    }
    if (lg) {
      classNameArr.push(sizeMapping("lg", lg));
    }
    if (xl) {
      classNameArr.push(sizeMapping("xl", xl));
      
    }
    if (xxl) {
      classNameArr.push(sizeMapping("xxl", xxl));
    }

    return classNameArr.join(" ");
  }

  const classese = createClassName();

  return <div className={classese}>{children}</div>;
}
