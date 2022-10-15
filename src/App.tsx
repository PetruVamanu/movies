import React, { useState } from 'react';
import { getAllMovies } from 'services/getAllMovies';

function App() {

  const [page, setPage] = React.useState(1);

  
  return (
    <div>
      <button disabled={page === 1} onClick={() => setPage( (prev) => prev - 1)}>Prev</button>
      {page}
      <button onClick={() => setPage( (prev) => prev + 1)}>Next</button>
    </div>
  );
}

export default App;
