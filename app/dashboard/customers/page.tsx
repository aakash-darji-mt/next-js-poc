import Link from 'next/link';
import React from 'react';

const Customers = () => {
  return (
    <div>
      Customers
      <Link href={`/dashboard/photo/1234`}>intercepting route</Link>
    </div>
  );
};

export default Customers;
