import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {data && <div>{data.message}</div>}
    </div>
  );
};

export default App;
