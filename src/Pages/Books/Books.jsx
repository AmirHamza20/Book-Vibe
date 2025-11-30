// import React, { useEffect, useState } from 'react';

import Book from "../Book/Book";

const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(()=>{
    //     fetch("../../../public/Data.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
            
    //     })
    // }, [])


    return (
        <div>
            
            <div className="grid grid-cols-1 m-2.5 md:grid-cols-2 lg:grid-cols-3 my-5 gap-15">
                {
                    data.map((singleBook)=> <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;