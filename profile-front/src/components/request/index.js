import React, { useState } from "react";

// import "./request.scss";
import {
  Form,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";

import InputMenu1 from "./column/inputmenu1";
import InputFile from "./column/inputfile";
import InputSite from "./column/inputsite";

import URI from "../../util/URI"

const RequestIndex = () => {
  const [trequest, setTRequest] = useState();

  const onChange = (e) => {
    const { name, value } = e.target;
    setTRequest({
      ...trequest,
      [name]: value,
    });
  };
  console.log(trequest);

  // 파일 관련 정보 업로드
  const fileInput = (index, file) => {
    try {
      if (index === 1) {
        setTRequest({
          ...trequest,
          file1: file,
        });
      } else if (index === 2) {
        setTRequest({
          ...trequest,
          file2: file,
        });
      } else if (index === 3) {
        setTRequest({
          ...trequest,
          file3: file,
        });
      } else {
        console.error("파일 업로드 에러");
      }
    } catch (e) {
      console.log("파일 업로드 취소")
    }
  }

  // console.log(trequest)
  console.log(trequest?.file1?.fileInfo?.file)
  const createTRequest = () => {
    if (!!!trequest?.company) {
      alert("회사명 입력")
    } else if (!!!trequest?.person) {
      alert("담당자명 입력")
    } else if (!!!trequest?.phone) {
      alert ("연락처 입력")
    } else if (!!!trequest?.email) {
      alert ("이메일 입력")
    } else if (!!!trequest?.title) {
      alert ("의뢰 제목 입력")
    } else if (!!!trequest?.object) {
      alert ("의뢰 목적 입력") 
    } else if (!!!trequest?.contents) {
      alert ("의뢰 내용 입력")
    } else {
      URI.post(process.env.REACT_APP_API_ROOT + "/api/request/create", trequest)
        .then((response) => {
          alert("전송 완료")
        })
        .catch((e) => {
          console.error(e);
        })
    }
  }

  return (
    <div className="requestContainer">
      <Form>
        <InputMenu1 onChange={onChange}/>

        <FormGroup row>
          <Label for="title" sm={2}>
            의뢰 제목<span style={{color:"red"}}>(필수)</span>
          </Label>
          <Col sm={10}>
            <Input
              id="title"
              name="title"
              placeholder="with a placeholder"
              type="title"
              onChange={onChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="object" sm={2}>
            의뢰 목적<span style={{color:"red"}}>(필수)</span>
          </Label>
          <Col sm={10}>
            <Input id="object" name="object" type="select" onChange={onChange}>
              <option hidden>선택</option>
              <option>업체 구인</option>
              <option>프로젝트 의뢰</option>
              <option>프로젝트 파트너 구인</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="contents" sm={2}>
            의뢰 내용<span style={{color:"red"}}>(필수)</span>
          </Label>
          <Col sm={10}>
            <Input id="contents" name="contents" type="textarea" onChange={onChange}/>
          </Col>
        </FormGroup>
        <h5>현재 파일 첨부은 기능 구현 중입니다. 빠른 시일 내에 해결하겠습니다.</h5>
        <h5>지금은 당분간 참조 사이트 링크로 통해 의뢰 요청 부탁드립니다.</h5>
        <h5>해결 중이나 해결 과정에서 선배 개발자님들께서 보신다면, 피드백 해주시면 감사하겠습니다.</h5>
        {Array(3).fill().map((d,index) => <InputFile key={index} index={index+1} fileInput={fileInput} />)}
        {Array(3).fill().map((d,index) => <InputSite key={index} index={index+1} onChange={onChange} />)}
        {/* <FormGroup row tag="fieldset">
          <legend className="col-form-label col-sm-2">Radio Buttons</legend>
          <Col sm={10}>
            <FormGroup check>
              <Input name="radio2" type="radio" />{" "}
              <Label check>
                Option one is this and that—be sure to include why it‘s great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio2" type="radio" />{" "}
              <Label check>
                Option two can be something else and selecting it will deselect
                option one
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Input disabled name="radio2" type="radio" />{" "}
              <Label check>Option three is disabled</Label>
            </FormGroup>
          </Col>
        </FormGroup> */}
        {/* <FormGroup row>
          <Label for="checkbox2" sm={2}>
            Checkbox
          </Label>
          <Col
            sm={{
              size: 10,
            }}
          >
            <FormGroup check>
              <Input id="checkbox2" type="checkbox" />{" "}
              <Label check>Check me out</Label>
            </FormGroup>
          </Col>
        </FormGroup> */}
        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button onClick={() => createTRequest()}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default RequestIndex;
