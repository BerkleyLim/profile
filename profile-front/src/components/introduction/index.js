import React, { useEffect, useState, useCallback } from "react";
import "./introduction.css";
import IntroductionService from "../../service/IntroductionService";
import styled from "styled-components";
import Form from "./form";

import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux'


export default function IntroductionComponent() {
  const [introductions, setIntroductions] = useState([]);
  const [inputs, setInputs] = useState();

  // 다음은 state, 즉 컴포넌트를 위한 업데이트
  const [stateUpdate, setStateUpdate] = useState(false);

  const user = useSelector(state => state.user);

  useEffect(() => {
    IntroductionService.getIntroduction().then((res) => {
      let response = res.data;
      setIntroductions(response);
    });
  }, [setIntroductions, stateUpdate]);

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
            setStateUpdate(!stateUpdate);
        })
        .catch((error) => {
            alert(error);
        });
  };

  const handleSetTab = (e) => {
    // tab key : keycode = 9
    if (e.keyCode === 9) {
      e.preventDefault(); // 탭 이동 방지
      let val = e.target.value;
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      e.target.value = val.substring(0, start) + "\t" + val.substring(end);
      onChange(e);
      return false; // prevent focus
    }
  }

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
            <Form
              index={index}
              data={introduction}
              isLogin={user.isLogin}
              moveIntroduction={moveIntroduction}
              setStateUpdate={setStateUpdate}
              stateUpdate={stateUpdate}
            />
        </DndProvider>
      ))}

      {user.isLogin && (
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
              onKeyDown={handleSetTab}
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
