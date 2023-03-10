import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { AuthContextProvider } from "./contexts/auth-context";
import AddMoviePage from "./pages/AddMoviePage/AddMoviePage";
import EditMoviePage from "./pages/EditMoviePage/EditMoviePage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Navigate to={'/movies?page=1'} /> },
      // { path: '', element: <HomePage /> },
      { path: 'movies', element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'add-movie', element: <AddMoviePage /> },
      { path: 'movie/:movieId/details', element: <MovieDetailsPage /> },
      { path: 'movie/:movieId/edit', element: <EditMoviePage /> },
    ]
  }
]);


function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
