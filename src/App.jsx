import { useState, useEffect } from 'react';
import Cards from './assets/cart';

import { ToastContainer } from 'react-toastify';

function App() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setCourseData(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <h1 className="text-[32px] m-auto text-center font-bold text-[#1C1B1B] my-4">
        Course Registration
      </h1>
      <Cards courseData={courseData} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
