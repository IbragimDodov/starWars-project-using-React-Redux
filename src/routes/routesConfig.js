import PeoplePage from "../containers/PeoplePage/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import HomePage from "../containers/HomePage/HomePage";
import FavoritePage from "../containers/FavoritePage/FavoritePage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";
import SearchPage from "../containers/SearchPage/SearchPage";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

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
    path: '/search',
    exact: true,
    element: <SearchPage/>
  },
  {
    path: '/people/:id',
    element: <PersonPage/>
  },
  {
    path: '/fail',
    exact: true,
    element: <ErrorMessage/>
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