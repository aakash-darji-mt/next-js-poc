import React from 'react';

function layout({
  page1,
  page2,
}: {
  page1: React.ReactNode;
  page2: React.ReactNode;
}) {
  return (
    <div>
      <p>Conditional routes</p>
      <div>{false ? page1 : page2}</div>
    </div>
  );
}

export default layout;
