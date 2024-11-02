import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import DashBroad from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/Bookdetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "books/:bookId",
      element: <BookDetails></BookDetails>,
      loader: () => fetch("/booksData.json")
    },
    {
      path: "dashboard",
      element: <DashBroad></DashBroad>
    }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
