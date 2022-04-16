import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledMatch = styled.div`
  .container {
    display: flex;
    justify-content: center;
  }

  .box {
    display: flex;
    width: 100rem;
    min-height: 50vmin;
  }

  .user {
    display: flex;
    flex-direction: column;
  }
`;

function Match(props) {
  const { testData } = props.setTest;
  const [matchData, setMatchData] = useState("");
  const userName = window.sessionStorage.getItem("name");
  const { name: expertName } = props.info;

  const handleClick = (event) => {
    event.preventDefault();

    window.location.href = "/result/{id)";
  };

  const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={startDate}
      />
    );
  };

  const handleSelect = (event) => {
    event.preventDefault();
    setMatchData(value);
  };

  return (
    <StyledMatch>
      <div className="container">
        <div className="box">
          <div className="user">
            <div className="title">내담자</div>
            <div className="name">{userName}</div>
          </div>
          <div className="expert">
            <div className="title">전문가</div>
            <div className="name">{expertName}</div>
          </div>
          <div className="purpose">
            <div className="title">상담목적</div>
            <select onSelect={handleSelect}>
              <option value="취업상담">취업상담</option>
              <option value="학업상담">학업상담</option>
              <option value="진로상담">진로상담</option>
            </select>
          </div>
          <div className="date">
            <div className="title">상담날짜</div>
            <Calendar />
          </div>
          <div className="means">
            <div className="title">상담방식</div>
            <select>
              <option value="화상상담">화상상담</option>
              <option value="채팅상담">채팅상담</option>
            </select>
          </div>
          <div className="button">
            <button type="submit" onClick={handleClick}>
              확정하기
            </button>
          </div>
        </div>
      </div>
    </StyledMatch>
  );
}

export default Match;
