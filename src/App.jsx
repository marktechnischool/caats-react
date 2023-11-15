import {
  createBrowserRouter,
} from "react-router-dom";

import { RouterProvider, useRouteError } from 'react-router'
import ImagesPage from "./images/ImagesPage";
import AboutPage from "./about/About";
import ImageTest from "./images/image/Image";
import { HAKUNA_MATATA as HAKUNA_MATATAA } from "./images/image/Image";
import { Provider } from "react-redux";
import store from "./store";

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return <h1>PZW nie ma takiej strony {HAKUNA_MATATAA}</h1>
}

const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AboutPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/images",
        element: <ImagesPage />,
      },
      {
        path: "/images/:imgId",
        element: <ImageTest />,
      }
    ]
)

const App = () => <Provider store={store} ><RouterProvider router={router} /></Provider>

export default App;