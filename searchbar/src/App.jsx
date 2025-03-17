import { useState } from "react"

const usersData = [
  { id: 1, name: "Vinod Kumar" },
  { id: 2, name: "Rahul Sharma" },
  { id: 3, name: "Priya Singh" },
  { id: 4, name: "Amit Verma" },
  { id: 5, name: "Sonia Mehta" },
  { id: 6, name: "Ravi Kapoor" },
  { id: 7, name: "Neha Gupta" },
  { id: 8, name: "Arjun Das" },
  { id: 9, name: "Pooja Malhotra" },
  { id: 10, name: "Suresh Chandra" }
];

function App() {
  const [isSearch, setSearch]=useState("");

const filterData = isSearch.trim() === "" ? [] : usersData.filter((item)=>{
  return item.name.toLowerCase().includes(isSearch.toLowerCase());
})


  console.log(isSearch);
  return (
    <>
<div>
  <input type="text" value={isSearch} onChange={(e)=>{setSearch(e.target.value)}} placeholder="search..."/>

<ul>
  {
    filterData.length > 0 ?(
      filterData.map((item)=>{
        return (
          <div  key={item.id}>
          <li>{item.name}</li>
          </div>
        )
      })
    ) : (
      <li>No results found</li>
    )
  }
</ul>

</div>
    </>
  )
}

export default App
