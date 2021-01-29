import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import {useCookies} from 'react-cookie';
import axios from 'axios';
import CreateClass from 'components/modal/CreateClass';
import DeleteClass from 'components/modal/DeleteClass';

const NavMenu = () => {

    const [cookies, setCookie, removeCookie] = useCookies();
    const [userClassInfo, setUserClassInfo] = useState([]);

    const readClass =  () => {

        let userEmail;

        if(cookies.t_email) {
            userEmail = { t_email : cookies.t_email };
        } else if (cookies.s_email) {
            userEmail = { s_email : cookies.s_email };
        } else {
            return null;
        }
        // 클래스 정보
         axios.post('classinfo', userEmail).then(res => {
            setUserClassInfo(res.data);
        })
        .catch(err => {
            console.log("Asdasdasdasdasd");
            console.log(err);
        })
    }
    
    useEffect(() => {
        readClass();
    }, []);

    const classListUpdate  = userClassInfo.map(currElement => <li><Link to="">{currElement.class_name}</Link></li>);

    return (
        <div id="nav_menu">
            <ul>
                <li>
                    <div className="nav_tit">
                        <p>나의 클래스</p>
                        <div className="nav_tit_btn">
                            <CreateClass readClass={readClass} classListUpdate={classListUpdate}  />
                            <DeleteClass />
                        </div>
                    </div>
                    <ul className="dep2">
                        {classListUpdate}
                    </ul>
                </li>
                <li><Link to="">시험 통계</Link></li>
                <li><Link to="">시험 체험하기</Link></li>
            </ul>
        </div>
    )
}

export default NavMenu;
