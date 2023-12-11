import React from 'react';

function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Test layout</p>
      {children}
    </div>
  );
}

export default TestLayout;
