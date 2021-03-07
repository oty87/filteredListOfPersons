import "./App.css";
import { useEffect, useState } from "react";
import PreviewListComponent from "./TableListComponent";
import FilterButtonComponent from "./TableListComponent/FilterButtonComponent";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div className="App">
      <FilterButtonComponent />

      <PreviewListComponent data={data} />
    </div>
  );
}

export default App;
