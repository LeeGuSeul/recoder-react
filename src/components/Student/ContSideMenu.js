import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import JoinClass from "Components/Modal/JoinClass";
import DeleteClass from "Components/Modal/DeleteClass";

const ContSideMenu = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userClassInfo, setUserClassInfo] = useState([]);

  const readClass = () => {
    let userEmail;

    if (cookies.t_email) {
      userEmail = { t_email: cookies.t_email };
    } else if (cookies.s_email) {
      userEmail = { s_email: cookies.s_email };
    } else {
      return null;
    }
    console.log(userEmail);
    axios
      .post("classlist", userEmail)
      .then((res) => {
        setUserClassInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    readClass();
  }, []);

  const classListUpdate = userClassInfo.map((currElement) => (
    <li>
      <Link to="">
        {currElement.class_name} <span>{currElement.recognize === 0 ? "(가입승인중)" : ""} </span>
      </Link>
    </li>
  ));

  return (
    <div id="nav_menu">
      <ul>
        <li>
          <div className="nav_tit">
            <p>나의 클래스</p>
            <div className="nav_tit_btn">
              <JoinClass
                readClass={readClass}
                classListUpdate={classListUpdate}
                userClassInfo={userClassInfo}
              />
              <DeleteClass
                readClass={readClass}
                classListUpdate={classListUpdate}
                userClassInfo={userClassInfo}
              />
            </div>
          </div>
          <ul className="dep2">{classListUpdate}</ul>
        </li>
        <li>
          <Link to="">시험 통계</Link>
        </li>
      </ul>
    </div>
  );
};

export default ContSideMenu;
