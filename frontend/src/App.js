import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Homepage from './checkPages/Homepage';
import Week1 from "./checkPages/Week1";
import Week2 from './checkPages/Week2';
import Week3 from './checkPages/Week3';
import Week4 from './checkPages/Week4';
import Layout from "./Layout";
import LoginSignup from "./checkPages/LoginSignup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "week1",
        element: <Week1 />,
      },
      {
        path: "week2",
        element: <Week2 />,
      },
      {
        path: "week3",
        element: <Week3 />,
      },
      {
        path: "week4",
        element: <Week4 />,
      },
      {
        path: "login",
        element: <LoginSignup />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
