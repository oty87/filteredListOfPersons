import "./App.css";
import { useEffect, useState } from "react";
import PreviewListComponent from "./TableListComponent";
import SortButtonsComponent from "./TableListComponent/SortButtonsComponent";
import FiltersComponent from "./TableListComponent/FiltersComponent";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortBy, setSortBy] = useState("ascending");
  const [sortByValue, setSortByValue] = useState("id");
  const [view, setView] = useState("table");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilteredData(res);
      });
  }, []);

  useEffect(() => {
    sortByValueFunc(sortByValue);
  }, [sortBy]);

  const sortByValueFunc = (value) => {
    setSortByValue(value);
    const dataToReturn = [...filteredData];
    dataToReturn.sort((a, b) => {
      if (sortBy === "ascending") {
        return a[value] > b[value] ? 1 : -1;
      }
      return a[value] > b[value] ? -1 : 1;
    });
    setFilteredData(dataToReturn);
  };

  const setSortDirection = (value) => {
    setSortBy(value);
  };

  const filterOnChange = (event) => {
    const filteredValue = event.target.value.toLowerCase();
    const filteredDataToSet = data.filter((e) =>
      e.name.toLowerCase().includes(filteredValue)
    );
    setFilteredData(filteredDataToSet);
  };

  const toggleView = (e) => {
    setView(e.target.value);
  };

  return (
    <div className="App">
      <SortButtonsComponent
        sortByValue={sortByValueFunc}
        setSortDirection={setSortDirection}
        toggleView={toggleView}
      />
      <FiltersComponent onChange={filterOnChange} />
      <PreviewListComponent value={view} data={filteredData} />
    </div>
  );
}

export default App;
