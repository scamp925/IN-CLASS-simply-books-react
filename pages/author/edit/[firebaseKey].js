import { useRouter } from 'next/router';
import React from 'react';

export default function EditAuthor() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  return (
    <div>
      { firebaseKey }
    </div>
  );
}
