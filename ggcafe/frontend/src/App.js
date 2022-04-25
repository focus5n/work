// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header & Footer
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";

// Section Components
// main section
// 메인 화면
import Home from "./components/home/Home";

// diary service
// 공감 일기장
import Diary from "./components/diary/Diary";

// expert service
// 전문가 목록
import ExpertListService from "../src/services/expertService/ExpertListService";
// 전문가 상세정보
import ExpertDetailService from "../src/services/expertService/ExpertDetailService";

// match service
// 매칭
import MatchService from "../src/services/matchService/MatchService";

// counsel service
// 상담 받기
import Counseling from "./components/counseling/Counseling";
// 상담 받은 이후 정리
import Counsel from "./components/counseling/AfterCounsel";
// 상담 기록 하기
import WriteCounselCard from "./components/counseling/WriteCounselCard";

// user service
// 로그인
import SignIn from "./components/auth/SignIn";
// 회원가입
import SignUp from "./components/auth/SignUp";
// 로그인 콜백
import Login from "./components/auth/Login";
// 로그아웃
import SignOut from "./components/auth/SignOut";
// 콜백
import Back from "./components/counseling/Back";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/expert" element={<ExpertListService />} />
          <Route path="/detail/:id" element={<ExpertDetailService />} />
          <Route path="/match/:id" element={<MatchService />} />
          <Route path="/counsel" element={<Counseling />} />
          <Route path="/writecounselcard" element={<WriteCounselCard />} />
          <Route path="/aftercounsel" element={<Counsel />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/callback/kakao" element={<Login />}></Route>
          <Route path="/back" element={<Back />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
