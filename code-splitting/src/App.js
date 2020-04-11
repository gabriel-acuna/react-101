import React, {useState, Suspense} from 'react';


const Surprise = React.lazy( ()=> import('./components/Surprise'));
function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  return (
    <div>
      <button onClick={()=>setShowSurprise(true)}>Show surprise</button>
      { showSurprise && <Suspense fallback={<p>Loading ...</p>}> <Surprise/> </Suspense>}
    </div>
  );
}

export default App;
