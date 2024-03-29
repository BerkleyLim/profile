import React, { useState, useEffect } from "react";
import propTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import Portal from './Portal';
// import styled from "styled-components";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./login.css";
// import LoginService from '../../login/LoginService'

// const ModalWrapper = styled.div`
// box-sizing: border-box;
// display: ${(props) => (props.visible ? 'block' : 'none')};
// position: fixed;
// top: 0;
// right: 0;
// bottom: 0;
// left: 0;
// z-index: 1000;
// overflow: auto;
// outline: 0;
// `

// const ModalOverlay = styled.div`
// box-sizing: border-box;
// display: ${(props) => (props.visible ? 'block' : 'none')};
// position: fixed;
// top: 0;
// left: 0;
// bottom: 0;
// right: 0;
// background-color: rgba(0, 0, 0, 0.6);
// z-index: 999;
// `

// const ModalInner = styled.div`
// box-sizing: border-box;
// position: relative;
// box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
// background-color: #fff;
// border-radius: 10px;
// width: 800px;
// top: 50%;
// transform: translateY(-50%);
// margin: 0 auto;
// padding: 40px 20px;
// `

// max-width: 1000px;


function LoginModalComponent({ modal, toggle, children }) {
  return (
    // <Portal elementId="modal-root">
    //   <ModalOverlay visible={visible}/>
    //   <ModalWrapper 
    //       // className={className} 
    //       // tabIndex="-1" 
    //       // visible={visible}
    //       // onClick={maskClosable ? onMaskClick : null}
    //       >

    //       <ModalInner tabIndex="0" className="modal-inner">
    //           {/* {closable && <CloseButton className="modal-close" onClick={close} />}
    //           {children} */}
    //       </ModalInner>
    //   </ModalWrapper>
    // </Portal>
    <Modal
      // aria-labelledby="contained-modal-title-vcenter"
      // size="xl"
      isOpen={modal}
      toggle={toggle}
      backdrop={true}
      modalClassName='modal-inner'
      wrapClassName='modal-wrapper'
      backdropClassName='modal-overlay'
      contentClassName="login"
      fade={true}
      // autoFocus={true}
      // className="modal"
      centered={true}
      container="#modal-root"
      // container=".container"
      // fullscreen
    >
      <ModalHeader toggle={toggle} closeButton>로그인</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup floating>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>
          <FormGroup floating>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          로그인
        </Button>
        <Button color="secondary" onClick={toggle}>
          로그아웃
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default LoginModalComponent;
