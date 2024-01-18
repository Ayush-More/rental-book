import React, { createContext, useContext, useState } from "react";

const BookContext = createContext();

function BookProvider({ children }) {
  const [rentedBooksCount, setRentedBooksCount] = useState(0);
  const [booksRented , setbooksRented] = useState(0);

  const incrementRentedBooksCount = () => {
    setRentedBooksCount((prevCount) => prevCount + 1);
  };

  const BooksPutOnRent = ()=>{
    setbooksRented((prevCount) => prevCount +1);
  }
  return (
     <BookContext.Provider value={{ rentedBooksCount, incrementRentedBooksCount , booksRented , BooksPutOnRent}}>
      {children}
    </BookContext.Provider>
  );
};
export const useBookContext = () => useContext(BookContext);
export default BookProvider;



