import React from 'react';

function layout(props: {
  children: React.ReactNode;
  parallel1: React.ReactNode;
  parallel2: React.ReactNode;
}) {
  return (
    <div>
      <h6>Parallel routes</h6>
      <div>{props.children}</div>
      <div>{props.parallel1}</div>
      <div>{props.parallel2}</div>
    </div>
  );
}

export default layout;
