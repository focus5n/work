// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header & Footer
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";

// Section Components
// 메인 화면
import Home from "./components/home/Home";
// 공감 일기장
import Diary from "./components/diary/Diary";
// 전문가 목록
import ExpertListService from "./services/expertService/ExpertListService";
// 전문가 상세정보
import ExpertDetailService from "./services/expertService/ExpertDetailService";
// 매칭
import Match from "./components/match/Match";
// 로그인
import SignIn from "./components/auth/SignIn";
// 회원가입
import SignUp from "./components/auth/SignUp";
// 로그인 콜백
import Login from "./components/auth/Login";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes path="/">
          {/* 메인화면 */}
          <Route index path="" element={<Home />} />
          {/* 일기장 */}
          <Route path="diary" element={<Diary />} />
          {/* 전문가 */}
          <Route path="expert" element={<ExpertListService />} />
          <Route path="detail/:id" element={<ExpertDetailService />} />
          {/* 매치 */}
          <Route path="match/:id" element={<Match />} />
          {/* 로그인 */}
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="callback/kakao" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
