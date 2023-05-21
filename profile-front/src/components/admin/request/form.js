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

const AdminRequestForm = ({trequest}) => {
  return (
    <Form style={{padding:"50px 50px 50px 50px"}}>
    <InputMenu1 trequest={trequest}/>

    <FormGroup row>
      <Label for="title" sm={2}>
        의뢰 제목<span style={{color:"red"}}>(필수)</span>
      </Label>
      <Col sm={10}>
        {trequest.title}
        {/* <Input
          id="title"
          name="title"
          placeholder="with a placeholder"
          type="title"
          onChange={onChange}
        /> */}
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="object" sm={2}>
        의뢰 목적<span style={{color:"red"}}>(필수)</span>
      </Label>
      <Col sm={10}>
        {trequest.object}
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="contents" sm={2}>
        의뢰 내용<span style={{color:"red"}}>(필수)</span>
      </Label>
      <Col sm={10}>
        {trequest.contents}
      </Col>
    </FormGroup>
    <InputFile index={1} file={trequest.file1} />
    <InputFile index={2} file={trequest.file2} />
    <InputFile index={3} file={trequest.file3} />
    <InputSite index={1} site={trequest.site1} />
    <InputSite index={2} site={trequest.site2} />
    <InputSite index={3} site={trequest.site3} />
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
        {/* <Button onClick={() => createTRequest()}>Submit</Button> */}
      </Col>
    </FormGroup>
  </Form>
  );
};

export default AdminRequestForm;
