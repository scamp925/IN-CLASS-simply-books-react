/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getBooks } from '../api/bookData';
import { useAuth } from '../utils/context/authContext';
import BookCard from '../components/BookCard';

function Home() {
  // Set a state for books
  const [books, setBooks] = useState([]);

  // Get user ID using useAuth Hook
  const { user } = useAuth();

  // Create a function that makes the API call to get all the books
  const getAllTheBooks = () => {
    getBooks(user.uid).then(setBooks);
  };

  // Make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheBooks();
  }, [user]);

  return (
    <div className="text-center my-4">
      <Link href="/book/new" passHref>
        <Button>Add A Book</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* map over books here using BookCard component */}
        {books.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAllTheBooks} />
        ))}
      </div>

    </div>
  );
}

export default Home;
