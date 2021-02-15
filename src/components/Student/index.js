import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import ContSideMenu from "./ContSideMenu";
import ContTitle from "./ContTitle";
import TestList from "./TestList";

const index = () => {
  return (
    <>
      <Header />
      <div id="wrapper">
        <div id="container">
          <ContSideMenu />
          <div id="contents">
            <div className="cont_visual">
              <p className="eng small">Welcome.</p>
              <p className="eng big">Re:Coder</p>
              <p className="kor">
                공정한 시험 문화를 위한 코딩 테스트 프로그램
              </p>
            </div>
            <ContTitle />
            <div className="cont_wrap">
              <TestList />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
