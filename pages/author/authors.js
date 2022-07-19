import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';
import { useAuth } from '../../utils/context/authContext';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getAuthors(user.uid).then(setAuthors);
  }, [user.uid]); // user.uid goes in the dependency b/c a different users can land on this page with routing without going through the login and whatnot, so whenever uid changes, I am telling this page to change to that user's authors.

  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add An Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} firstName={author.first_name} lastName={author.last_name} email={author.email} />
        ))}
      </div>
    </div>
  );
}
