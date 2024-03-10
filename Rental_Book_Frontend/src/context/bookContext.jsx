import React, { createContext, useContext, useState , useEffect } from "react";

const BookContext = createContext();

function BookProvider({ children }) {
  const [rentedBooksCount, setRentedBooksCount] = useState(0);
  const [booksRented , setBooksRented] = useState(0);

  const incrementRentedBooksCount = () => {
    setRentedBooksCount((prevCount) => prevCount + 1);
    console.log(rentedBooksCount);
  };

  const BooksPutOnRent = ()=>{
    setBooksRented((prevCount) => prevCount +1);
    console.log(booksRented);
  }
  useEffect(() => {
    console.log(booksRented);
  }, [booksRented]);
  return (
     <BookContext.Provider value={{ rentedBooksCount, incrementRentedBooksCount , booksRented , BooksPutOnRent}}>
      {children}
    </BookContext.Provider>
  );
};
export const useBookContext = () => useContext(BookContext);
export default BookProvider;



