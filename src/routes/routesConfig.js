import PeoplePage from "../containers/PeoplePage/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import HomePage from "../containers/HomePage/HomePage";
import FavoritePage from "../containers/FavoritePage/FavoritePage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";

const routesConfig = [
  {
    path: '/',
    exact: true,
    element: <HomePage/>
  },
  {
    path: '/people',
    exact: true,
    element: <PeoplePage/>
  },
  {
    path: '/favorites',
    exact: true,
    element: <FavoritePage/>
  },
  {
    path: '/people/:id',
    element: <PersonPage/>
  },
  {
    path: '/not-found',
    exact: true,
    element: <NotFoundPage/>
  },
  {
    path: '*',
    exact: false,
    element: <NotFoundPage/>
  },
]

export default routesConfig;