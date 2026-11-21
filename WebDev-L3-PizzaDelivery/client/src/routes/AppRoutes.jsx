import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div className='min-h-screen flex items-center justify-center'>
              <h1 className='text-3xl font-bold text-primary'>
                Pizza Delivery Application
              </h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
