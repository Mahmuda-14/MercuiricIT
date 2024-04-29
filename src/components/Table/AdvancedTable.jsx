
import React, { useEffect, useState } from 'react';
import "./AdvancedTable.css"

const AdvancedTable = () => {
    // pagination
    const [count,setCount]=useState(0)
    const [users,setUsers]=useState([])
    const [realUsers,setRealUsers]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/itemsCount")
        .then(res=>res.json())
        .then(data=>setCount(data))
        // console.log({count})
    },[])
   const total=parseInt(count.count)

    const[itemsPerPage,setItemsPerPage]=useState(5)
    const[currentPage,setCurrentPage]=useState(0)
   const numberOfPages=Math.ceil(total/itemsPerPage)
   console.log( numberOfPages)


const pages=[]
for(let i=0;i < numberOfPages;i++){
pages.push(i)
}
// console.log(pages)

useEffect(() => {
    fetch(`http://localhost:5000/items?page=${currentPage}&size=${itemsPerPage}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        setRealUsers(data);
        setUsers(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        
    });
}, [currentPage, itemsPerPage]);
console.log("users",users)
console.log("real users",realUsers)
    const handleItemsPerPage=e=>{
        const val=parseInt(e.target.value);
        console.log(val)
        setItemsPerPage(val)
        setCurrentPage(0)
    }
    const handlePrevPage=()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNextPage=()=>{
        if(currentPage<pages.length-1){
            setCurrentPage(currentPage+1)
        }
    }

    return (
            <div>
            <div className="overflow-x-auto">
  <table className="table  table-xs overflow-x-auto">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Age</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
       {users.map((user,index)=>
      <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user?.name}</td>
        <td>{user?.phone}</td>
        <td>{user?.age}</td>
        <td>{user?.company}</td>
      </tr>)}
      
     
    
    </tbody>
  </table>
</div>

{/* pagination */}
<div className='pagination'>
              
              <button onClick={handlePrevPage}>Prev</button>
               {pages.map(page=> <button
               className={currentPage==page ? 'selected' :undefined}
               onClick={()=>setCurrentPage(page)}
                key={page}>{page}</button>)}
                <button onClick={handleNextPage}>Next</button>
              
            <select value={itemsPerPage}
            onChange={handleItemsPerPage}
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="50">50</option>
            </select>
            
            </div>
            </div>
    );
};

export default AdvancedTable;

