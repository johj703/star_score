import React, { useState } from "react";
import styled from "styled-components";
import { useNavigator } from "react-router-dom";
// import Score from "./Score";

const App = (props) => {
  const week = ["월", "화", "수", "목", "금", "토", "일"];
  let nowDate = new Date().getDay();
  const [week_day, setWeek] = useState([...week.slice(nowDate - 1, 7), ...week.slice(0, nowDate - 1)])
  let navigate = useNavigator();
  const star_count = Array.from({ length: 5}, (v, i) => i);

  return (
    <Container>
      <Title>내 일주일은?</Title>
      <ListStyle>
        {week_day.map((day, Index) => {
          let random = Math.floor(Math.random() * 5 + 1);
          // Math.floor 소수점 아래 버림(Math.random이 부동 소수점 난수를 생성하기 때문)
          // Math.floor(Math.random() * 5)는 0~4.999... , 0~4 범위의 정수
          // 평점은 1부터 시작하니 +1을 해준다.
          return (
            <ItemStyle key={index}>
                <span>{day}</span>
                <div>
                    {star_count.map((num, idx) => {
                        return (
                            <Star
                              key={idx}
                              style={
                                  idx < random
                                  ? {backgroundColor: "#AD9AEE"}
                                  : {backgroundColor: "#F9FFFF"}
                              }
                            ></Star>
                        );
                    })}
                </div>
                <Button
                    onClick={() =>{
                        navigate(`./Detail/${day}`);
                        // 페이지 이동
                    }}
                ></Button>
            </ItemStyle>
          );
        })}
      </ListStyle>
    </Container>
  );
}

const Container = styled.div`

`;

const Title = styled.h3`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`
const ListStyle = styled.div`

`;

const ItemStyle = styled.div`

`;

export default App;
