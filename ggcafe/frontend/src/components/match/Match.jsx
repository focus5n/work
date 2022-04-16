import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  const { id } = useParams;
  const userName = window.sessionStorage.getItem("name");

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = "/result/{id)}";
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
          </div>
          <div className="purpose">
            <div className="title">상담목적</div>
          </div>
          <div className="date">
            <div className="title">상담날짜</div>
          </div>
          <div className="means">
            <div className="title">상담방식</div>
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
