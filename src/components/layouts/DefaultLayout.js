import React from 'react'
import Sidebar from './Sidebar'

function DefaultLayout({children}) {
  return (
<>
<div class="dashboard_header">
    <div class="fluid_container">
        <div class="header_row">
 
            <a href="#" class="logo">
                <img src="images/logo.png" alt="" />
            </a>

            <div class="search_panel">
                <span class="search_btn m_srch_trigger_btn" id="m_srch_trigger"><img src="images/search.svg"
                        alt="" /></span>
                <div class="search_box_inner earch_box_desktop">
                    <input type="text" placeholder="Search Here......" />
                    <span class="search_btn"><img src="images/search.svg" alt="" /></span>
                </div>
            </div>
            <div class="search_box_mobile" id="m_srch_trigger_box">
                <div class="search_box_inner">
                    <input type="text" placeholder="Search Here......" />
                    <span class="search_btn"><img src="images/search.svg" alt="" /></span>
                </div>
            </div>

            <div class="float_header_right">
                <div class="message_panel panel_inline">
                    <a href="#" class="nof_btn">
                        <img src="images/msg.svg" alt="" />
                        <span class="bdg">2</span>
                    </a>
                </div>

                <div class="notification_panel panel_inline">
                    <a href="#" class="nof_btn" id="nof_btn">
                        <img src="images/notification.svg" alt="" />
                        <span class="bdg">2</span>
                    </a>
                    <div class="notification_box">
                        <div class="notification_box_inner">
                            <ul class="notify_list">
                                <li>
                                    <i class="nof_ico"><img src="images/rocket.svg" alt="" /></i>
                                    <p>Your video submission (<a href="#">VSID</a> 1523) has been approved.....</p>
                                    <span class="nof_time">9.38 pm</span>
                                </li>
                                <li>
                                    <i class="nof_ico"><img src="images/work.svg" alt="" /></i>
                                    <p>Your video submission (<a href="#">VSID</a> 356) has been rejected...</p>
                                    <span class="nof_time">9.38 pm</span>
                                </li>
                                <li>
                                    <i class="nof_ico"><img src="images/rocket.svg" alt="" /></i>
                                    <p>A bonus of $35 has been applied to your account......</p>
                                    <span class="nof_time">9.38 pm</span>
                                </li>
                                <li>
                                    <i class="nof_ico"><img src="images/rocket.svg" alt="" /></i>
                                    <p>You have received a new note from (<a href="#">VSID</a> 750) for your
                                        video.....
                                    </p>
                                    <a href="#" class="nof_inline_btn">Reply Now</a>
                                    <span class="nof_time">9.38 pm</span>
                                </li>
                                <li>
                                    <i class="nof_ico"><img src="images/rocket.svg" alt="" /></i>
                                    <p>You have received a new note from (<a href="#">VSID</a> 3241) for your
                                        ........
                                    </p>
                                    <a href="#" class="nof_inline_btn">Reply Now</a>
                                    <span class="nof_time">9.38 pm</span>
                                </li>
                            </ul>
                        </div>
                        <a href="#" class="nof_all">See All Notification</a>
                    </div>
                </div>

                <div class="admin_panel panel_inline">
                    <span>jhon morrison</span>
                    <span class="nav_avatar">
                        <a href="#">
                            <img src="images/avatar.png" alt=""/>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="dashboard_body">
        <div class="fluid_container">
            <div class="dashboard_body_inner">
              <Sidebar/>

                {children}
            </div>
        </div>
    </div>
</>
  )
}

export default DefaultLayout
