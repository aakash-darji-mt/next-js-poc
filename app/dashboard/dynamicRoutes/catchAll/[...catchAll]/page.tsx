import React from 'react';

function CatchAll({ params }: { params: { catchAll: string[] } }) {
  return (
    <div>
      CatchAll abc
      {params.catchAll.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
}

export default CatchAll;
