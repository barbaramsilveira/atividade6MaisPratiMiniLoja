import { createBrowserRouter } from "react-router-dom";

import CssGlobal from "./01-css-global/App";
import CssModules from "./02-css-modules/App";
import Tailwind from "./03-tailwind/App";
import StyledComponents from "./04-styled-components/App";

const router = createBrowserRouter([
  { path: "/", element: <CssGlobal /> },
  { path: "/global", element: <CssGlobal /> },
  { path: "/modules", element: <CssModules /> },
  { path: "/tailwind", element: <Tailwind /> },
  { path: "/styled-components", element: <StyledComponents /> }, // <- mudar aqui
  { path: "*", element: <CssGlobal /> }
]);

export default router;