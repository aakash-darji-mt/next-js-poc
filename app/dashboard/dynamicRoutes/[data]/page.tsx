import React from 'react';

function page({ params }: { params: { data: string } }) {
  return <div>param data:{params.data}</div>;
}

export default page;
