import React from 'react';

//automatically memoize request to render dynamic routes as if its static route
// generate route at build time instead of on-demand request
export async function generateStaticParams() {
  return [
    {
      data: 'abc',
      slug: 'xyz',
    },
  ];
}

function page({ params }: { params: { data: string; slug: string } }) {
  return (
    <div>
      param data and slug:{params.data}:{params.slug}
    </div>
  );
}

export default page;
