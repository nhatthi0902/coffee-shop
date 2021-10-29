import React from "react";
import useTimeout from "../../utilities/useTimeout";
export default function Location(){
    const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);
    useTimeout(() => {
      setHasTimeElapsed(true);
    }, 5000);
    return (
      <p>
        {hasTimeElapsed
          ? '5 seconds has passed!'
          : 'The timer is running…'}
      </p>
    )
  }