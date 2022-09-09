import PeoplePage from "../containers/PeoplePage/PeoplePage";
import HomePage from "../containers/HomePage/HomePage";

const routesConfig = [
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/people',
    element: <PeoplePage/>
  },
]

export default routesConfig;