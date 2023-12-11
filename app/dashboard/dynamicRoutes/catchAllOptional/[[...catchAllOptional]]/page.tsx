import React from 'react';

// will match its own route as well as dynamic routes

function CatchAllOptional({
  params,
}: {
  params: { CatchAllOptional: string[] };
}) {
  return (
    <div>
      CatchAllOptional
      {params?.CatchAllOptional &&
        params.CatchAllOptional.map((item) => <p key={item}>{item}</p>)}
    </div>
  );
}

export default CatchAllOptional;
