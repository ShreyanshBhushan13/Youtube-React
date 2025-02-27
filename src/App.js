import "./App.css"
import Head from "./component/Head";
 import Body from "./component/Body";
 import { Provider } from "react-redux";
 import Store from "./utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";
import Demo from  "./component/Demo"
import Demo2 from "./component/Demo2";

const appRouter=createBrowserRouter([{
path:"/",
element:<Body/>,
children:[
  {
  path:"/",
  element:<MainContainer/>
  },
  {
    path:"watch",
    element:<WatchPage/>
  },
  {
    path:"demo",
    element:(
    <>
    <Demo/>
    <Demo2/>
    </>
    ),
  },
 
]
}]);

function App() {
  return (
   <Provider store={Store}>
    <div>
   <Head/>
   <RouterProvider router={appRouter}/>
   </div>
   </Provider>
)};

export default App;
