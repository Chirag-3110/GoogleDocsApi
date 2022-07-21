import React,{useEffect,useState} from 'react'
import './App.css';


function App() {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [workflowList,setWorkFLowList]=useState([
    {id:1,name:"Pizza"},
    {id:2,name:"fries"},
    {id:3,name:"hello"},
    {id:4,name:"Hyy"},
    {id:5,name:"Byyyy"},
    {id:6,name:"Nice"},
    {id:7,name:"burger"},
  ])
  const searchData = (searchItem) => {
    setSearch(searchItem);
    if (search != "") {
      const searchedWorkflow = workflowList.filter((filteredWorkFLow) => {
        return Object.values(filteredWorkFLow)
          .join(" ")
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      });
      setSearchResult(searchedWorkflow);
    } else {
      setSearchResult(workflowList);
    }
  };
  return (
    <div className="App">
      <div>
          <input placeholder="Enter name" onChange={(search) => searchData(search.target.value)}/>
          {
            searchResult.length > 0 ? 
            searchResult.map((item)=>(
              <h1 key={item.id}>{item.name}</h1>
            )) 
            : 
            workflowList.map((item)=>(
              <h1 key={item.id}>{item.name}</h1>
            ))
          }
      </div>
    </div>
  );
}

export default App;
