import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

function Detail() {
  const history = useHistory();
  const location = useLocation();
  const { title } = location.state;

  useEffect(() => {
    if (!location) {
      history.push("/");
    }
  }, [location, history]);
  if (location.state) {
    return <h1>{title}</h1>;
  } else {
    return null;
  }
}

export default Detail;
