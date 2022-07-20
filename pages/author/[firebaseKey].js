import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div className="text-white ms-5 details">
      <h5>
        {authorDetails.first_name} {authorDetails.last_name}{' '}
        {authorDetails.favorite ? (
          <span className="badge bg-danger favorite-badge">
            <i className="fa fa-heart" aria-hidden="true" />
            Favorite
          </span>
        ) : (
          ''
        )}
      </h5>
      Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
      {authorDetails.books?.map((book) => (
        <BookCard key={book.firebaseKey} bookObj={book} />
      ))}
    </div>
  );
}
