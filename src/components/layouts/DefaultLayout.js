import React, { useReducer, useState } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import getImageURL from "../../lib/queryClient";
import Sidebar from "./Sidebar";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

function DefaultLayout({ children }) {
  const [notification, setNotification] = useState(false);
  function handaleNotification(e) {
    e.preventDefault();
    setNotification(!notification);
  }
  const authUser = useAuthUser();
  const authHeader = useAuthHeader();
  const user = authUser();
  const {
    data: notificationData,
    isLoading,
    isSuccess: notificationDataIsSuccess,
  } = useFetch(
    ["notification_count"],
    `/notification-count`,
    {},
    { token: authHeader() }
  );

  const noteTypesId = [5, 6, 7, 8, 13, 14, 16, 19, 20, 23, 24];
  const {
    data: notifiactions,
    refetch,
    isLoading: notificationsIsLoading,
  } = useFetch(["notifications"], `/notifications?page=1`);
  return (
    <>
      <div className="dashboard_header">
        <div className="fluid_container">
          <div className="header_row">
            <a href="#" className="logo">
              <img src="images/logo.png" alt="" />
            </a>

            <div className="search_panel">
              <span
                className="search_btn m_srch_trigger_btn"
                id="m_srch_trigger"
              >
                <img src="images/search.svg" alt="" />
              </span>
              <div className="search_box_inner earch_box_desktop">
                <input type="text" placeholder="Search Here......" />
                <span className="search_btn">
                  <img src="images/search.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="search_box_mobile" id="m_srch_trigger_box">
              <div className="search_box_inner">
                <input type="text" placeholder="Search Here......" />
                <span className="search_btn">
                  <img src="images/search.svg" alt="" />
                </span>
              </div>
            </div>

            <div className="float_header_right">
              <div className="message_panel panel_inline">
                <a href="#" className="nof_btn">
                  <img src="images/msg.svg" alt="" />
                  {notificationDataIsSuccess ? (
                    notificationData?.messages ? (
                      <span className="bdg">{notificationData.messages}</span>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </a>
              </div>

              <div className="notification_panel panel_inline">
                <a
                  href="#"
                  onClick={handaleNotification}
                  className="nof_btn"
                  id="nof_btn"
                >
                  <img src="images/notification.svg" alt="" />
                  {notificationDataIsSuccess ? (
                    notificationData?.notifications ? (
                      <span className="bdg">
                        {notificationData.notifications}
                      </span>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </a>
                <div
                  className={
                    notification
                      ? "notification_box active"
                      : "notification_box "
                  }
                >
                  <div className="notification_box_inner">
                    <ul className="notify_list">
                      {notifiactions?.data
                        ? notifiactions.data.map((notification, index) => {
                            return notification.seen === 0 &&
                              notification.status === 0 ? (
                              <li key={index}>
                                <i className="nof_ico">
                                  <img src="images/rocket.svg" alt="" />
                                </i>
                                <p>{notification.title}</p>
                                {noteTypesId.includes(
                                  notification.notification_type_id
                                ) ? (
                                  <a href="#" className="nof_inline_btn">
                                    Reply Now
                                  </a>
                                ) : (
                                  ""
                                )}
                                <span className="nof_time">9.38 pm</span>
                              </li>
                            ) : (
                              ""
                            );
                          })
                        : ""}
                    </ul>
                  </div>
                  <Link to={`/notification`}>
                    <a className="nof_all">See All Notification</a>
                  </Link>
                </div>
              </div>

              <div className="admin_panel panel_inline">
                <span>
                  {user.name} {user.last_name}
                </span>
                <span className="nav_avatar">
                  <a href="#">
                    <img src={getImageURL(user.avater)} alt="" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_body">
        <div className="fluid_container">
          <div className="dashboard_body_inner">
            <Sidebar />

            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
