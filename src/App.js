import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/nice-select2.css";
import "./App.css";
import "./Override.css";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import DetailsLayout from "./components/layouts/DetailsLayout";

import Home from "./routes/Home";
import MyEearning from "./routes/MyEearning";

import Notifications from "./routes/Notifications";
import Setting from "./routes/Setting";
import Login from "./routes/Login";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import React, { createContext, Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Videos from "./Pages/Videos/Videos";
import Earnings from "./Pages/Earnings/Earnings";
import MyMessages from "./routes/MyMessages";
import VideoModal from "./components/videos/VideoModal";
import ForgotPassword from "./routes/ForgotPassword";
import Chat from "./routes/Chat";
import routes from "./routes";

export const VideoContext = createContext();

function App() {
  const [modal, setModal] = useState(false);

  const [videoDetails, setVideoDetails] = useState({});
  const toggle = (video) => {
    if (video) {
      setVideoDetails({ ...video });
    }
    setModal(!modal);
  };

  return (
    <div className="App">
      <VideoContext.Provider value={{ videoDetails, setVideoDetails, toggle }}>
        <Toaster />
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path ? route.path : "/"}
                element={
                  route.protected ? (
                    <RequireAuth loginPath="/login">
                      {route.layout === "default" ? (
                        <DefaultLayout>
                          <Suspense fallback={<div>Loading...</div>}>
                            <route.component />
                          </Suspense>
                        </DefaultLayout>
                      ) : route.layout === "detail" ? (
                        <DetailsLayout>
                          <Suspense fallback={<div>Loading...</div>}>
                            <route.component />
                          </Suspense>
                        </DetailsLayout>
                      ) : (
                        <Suspense fallback={<div>Loading...</div>}>
                          <route.component />
                        </Suspense>
                      )}
                    </RequireAuth>
                  ) : route.layout === "default" ? (
                    <DefaultLayout>
                      <Suspense fallback={<div>Loading...</div>}>
                        <route.component />
                      </Suspense>
                    </DefaultLayout>
                  ) : route.layout === "detail" ? (
                    <DetailsLayout>
                      <Suspense fallback={<div>Loading...</div>}>
                        <route.component />
                      </Suspense>
                    </DetailsLayout>
                  ) : (
                    <Suspense fallback={<div>Loading...</div>}>
                      <route.component />
                    </Suspense>
                  )
                }
              />
            );
          })}
        </Routes>
        {modal && (
          <VideoModal
            show={modal}
            toggle={toggle}
            videoDetails={videoDetails}
          />
        )}
        {/* {modal && <VideoDetailsModal toggle={toggle} videoDetails={videoDetails} />} */}
      </VideoContext.Provider>
    </div>
  );
}

export default App;
