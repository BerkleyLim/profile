import React, { useEffect, useState, useCallback } from "react";
import "./introduction.css";
import IntroductionService from "../../service/IntroductionService";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IntroductionFormComponent from "./IntroductionFormComponent";

import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { useSelector, useDispatch } from 'react-redux'


export default function IntroductionComponent({ isLogin }) {
  const [introductions, setIntroductions] = useState([]);
  const [inputs, setInputs] = useState();

  let navigate = useNavigate();

  // 리덕스 프로젝트 : state값을 미리 저장 시, 초기 설정부터 할것
  // 지금으 ㄴ불렁다.
  // const career = useSelector(state => state);
  // console.log(career)
  useEffect(() => {
    IntroductionService.getIntroduction().then((res) => {
      let response = res.data;
      setIntroductions(response);
    });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      // [e.target.name]: e.target.value, // <- 변경 후
      [name]: value,
    });
  };

  const addContents = () => {
    let Introduction = {
        title: inputs.title,
        contents: inputs.contents
    }
    IntroductionService.createIntroduction(Introduction)
        .then((res) => {
            alert("success");
            navigate(0);
        })
        .catch((error) => {
            alert(error);
        });
  };

    // Reorder an array
    const moveIntroduction = useCallback (
        (dragIndex, hoverIndex) => {
          const dragCard = introductions[dragIndex];
    
          setIntroductions(
            update(introductions, {
              $splice: [
                [dragIndex, 1], // delete
                [hoverIndex, 0, dragCard], // Add
              ],
            })
          );

          // 여기서 전체 리스트 update API 삽입

          // 삽입 끝
        },
        [introductions]
      );

  return ( 
    <div>
      <h1>소개</h1>
      {introductions.map((introduction, index) => (
        <DndProvider key={index} backend={HTML5Backend}>
            <IntroductionFormComponent
              index={index}
              data={introduction}
              isLogin={isLogin}
              moveIntroduction={moveIntroduction}
            />
        </DndProvider>
      ))}

      {isLogin && (
        <div>
          <div className="card">
            <input
              type="text"
              placeholder="title"
              name="title"
              className="card-header"
              onChange={onChange}
            />
            <ContentTextArea
              placeholder="contents"
              name="contents"
              className="card-body"
              onChange={onChange}
            />
            <ContentAddButton onClick={() => addContents()}>
              추가
            </ContentAddButton>
          </div>
        </div>
      )}
    </div>
  );
}

const ContentAddButton = styled.button`
  padding: 5vh;
`;

const ContentTextArea = styled.textarea`
  resize: none;
  overflow: visible;
  min-height: 40vh;
`;