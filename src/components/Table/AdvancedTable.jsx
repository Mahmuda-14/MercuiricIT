
import React, { useEffect, useState } from 'react';
import "./AdvancedTable.css"
import { DiVim } from 'react-icons/di';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const AdvancedTable = () => {
    // pagination
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])
    const [realUsers, setRealUsers] = useState([])
    useEffect(() => {
        fetch("https://internship-task-merquireit-server.vercel.app/itemsCount")
            .then(res => res.json())
            .then(data => setCount(data))
        // console.log({count})
    }, [])
    const total = parseInt(count.count)

    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const numberOfPages = Math.ceil(total / itemsPerPage)
    console.log(numberOfPages)


    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    // console.log(pages)

    useEffect(() => {
        fetch(`https://internship-task-merquireit-server.vercel.app/items?page=${currentPage}&size=${itemsPerPage}`, {
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
    console.log("users", users)
    console.log("real users", realUsers)
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val)
        setItemsPerPage(val)
        setCurrentPage(0)
    }
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div>
            <SectionTitle subheading={"All User's Information"} heading={"Table"}></SectionTitle>
            <div className='space-y-12 bg-gray-50 p-10 ml-[52px] mt-[73px] mr-[85px]'>
                <div className="overflow-x-auto">
                    <table className="table  table-xs overflow-x-auto">
                        {/* head */}
                        <thead>
                            <tr className='text-sm font-medium leading-6 text-gray-900'>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Age</th>
                                <th>Company</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) =>
                                <tr key={user._id} className='text-xs bg-gray-100 p-5 font-medium leading-6 '>
                                    <th>{index + 1}</th>
                                    <td>{user?.fname}</td>
                                    <td>{user?.phone}</td>
                                    <td>{user?.age}</td>
                                    <td>{user?.company}</td>
                                    <td><Link to={`/dashboard/update/${user._id}`}><button className='btn bg-blue-200'>Edit</button></Link></td>
                                </tr>)}



                        </tbody>
                    </table>
                </div>

                {/* pagination */}
                <div className='pagination'>

                    <button onClick={handlePrevPage}>Prev</button>
                    {pages.map(page => <button
                        className={currentPage == page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
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
        </div>
    );
};

export default AdvancedTable;

