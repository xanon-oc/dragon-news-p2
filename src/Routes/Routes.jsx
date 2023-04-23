import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import NewsLayout from "../Layout/NewsLayout";
import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "categories/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5200/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <NewsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5200/news/${params.id}`),
      },
    ],
  },
]);

export default router;
