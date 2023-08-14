import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    const response = await axios.get('');
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App;
