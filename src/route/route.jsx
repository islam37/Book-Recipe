import { createBrowserRouter } from "react-router";
import LayOut from "../layout/LayOut";
import Signin from "../components/Signin";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import About from "../components/About";
import Profile from "../components/Profile";
import AddRecipes from "../components/AddRecipes";
import AllRecipes from "../components/AllRecipes";
import MyRecipes from "../components/MyRecipes";
import RecipeDetails from "../components/RecipeDetails"; 
import PrivateRoute from "../components/Context/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOut,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Signin,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/all-recipes",
        Component: AllRecipes,
      },
      {
        path: "/add-recipes",
        element: (
          <PrivateRoute>
            <AddRecipes />
          </PrivateRoute>
        )
      },
      {
        path: "/profile",
       element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        )
      },
      {
        path: "/my-recipes",
         element: (
          <PrivateRoute>
            <MyRecipes />
          </PrivateRoute>
        ),
      },
      {
        path: "/recipes/:id",   
        Component: RecipeDetails,
      },
    ],
  },
]);

export default router;
