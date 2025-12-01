import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../Utility/addToDb";
import Book from "../Book/Book"; // <-- MUST ADD THIS

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map(id => parseInt(id));

    const myReadList = data.filter(book =>
      ConvertedStoredBooks.includes(book.bookId) // FIXED booId → bookId
    );

    setReadList(myReadList);
  }, [data]);

  return (
    <div>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Book List"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          My wish List
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Book I Read"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Read List: {readList.length}

          {readList.map(b => (
            <Book key={b.bookId} singleBook={b} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadList;
