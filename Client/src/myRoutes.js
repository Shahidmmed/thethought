import React, { useContext, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import history from "./utils/history";

import Context from "./utils/context";
import Header from "./hooks/header";
import Callback from "./hooks/callback";
/* import AuthCheck from "./utils/authcheck";

import Home from "./hooks/home";

import HooksContainer1 from "./hooks/hook1";

import HooksForm from "./hooks/hooks_form1";
import PrivateComponent from "./hooks/privatecomponent";
; */
import SignUp from "./hooks/signup";
/* import Profile from "./Profile/profile";
import ShowUser from "./Profile/showuser";
import SendMessage from "./Profile/sendmessage";
import ShowMessages from "./Profile/showmessages";
import ReplytoMessage from "./Profile/replytomessage";

import Posts from "./Blog/posts";

import ShowPost from "./Blog/showpost";
import EditPost from "./Blog/editpost"; */
import AddPost from "./components/Blog/addpost";
const PrivateRoute = ({ component: Component, auth }) => (
  <Route
    render={(props) =>
      auth === true ? (
        <Component auth={auth} {...props} />
      ) : (
        <Navigate to={{ pathname: "/signup" }} />
      )
    }
  />
);

const MyRoutes = () => {
  const context = useContext(Context);
  // const params = useParams();
  // useEffect(() => {
  //   /* If context is avialable here. */
  //   context.handleAuth(params);
  //   console.log("pp", params);
  //   console.log("yo");
  // }, []);

  return (
    <div>
      <BrowserRouter history={history}>
        <Header />
        <br />
        <br />
        <div>
          <Routes>
            <Route exact path="/add" element={AddPost} />
            <Route path="/signup" element={SignUp} />
            {/* <Route path="/hooksform" element={HooksForm} />

            <Route path="/hookscontainer" element={HooksContainer1} />
            <Route path="/authcheck" element={AuthCheck} />
            

            <Route path="/posts" element={Posts} />
            <Route path="/post/:pid" element={ShowPost} />
            <Route path="/editpost/:pid" element={EditPost} />
            <Route path="/addpost" element={AddPost} />

            <Route path="/user/:name" element={ShowUser} />

            <PrivateRoute
              path="/profile"
              auth={context.authState}
              element={Profile}
            />

            <PrivateRoute
              path="/sendmessage"
              auth={context.authState}
              element={SendMessage}
            />

            <PrivateRoute
              path="/showmessages/:id"
              auth={context.authState}
              element={ShowMessages}
            />
            <PrivateRoute
              path="/replytomessage"
              auth={context.authState}
              element={ReplytoMessage}
            />

            <PrivateRoute
              path="/privateroute"
              auth={context.authState}
              element={PrivateComponent}
            />
            <PrivateRoute
              path="/profile"
              auth={context.authState}
              element={Profile}
            />
             */}
            {/* <Route
              path="/callback"
              render={(props) => {
                context.handleAuth(props);
                return <Callback />;
              }}
            /> */}
            <Route path="/callback" element={<Callback />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default MyRoutes;
