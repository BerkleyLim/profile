import axios from "axios";
import React, { useMemo, useState } from "react";
import { VscClose } from "react-icons/vsc";
import { Navigate } from "react-router-dom";
import { Button, Col, FormGroup, FormText, Input, Label } from "reactstrap";

import styled from "styled-components";

// 리액트 파일 관련 참조 =
// https://velog.io/@st4889/React-%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-%EB%8B%A4%EC%9A%B4%EB%B0%9B%EA%B8%B0-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0api%EB%A1%9C-%EC%A0%84%EC%86%A1
// https://hojung-testbench.tistory.com/entry/React-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84
// https://velog.io/@chaeri93/React-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-%EB%B0%8F-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EB%B2%84%ED%8A%BC%EC%9C%BC%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
const InputFile = ({ index, onChange }) => {
  // const fileInputRef = React.useRef(null);

  // const handleClickFileInput = (e) => {
  //   fileInputRef.current?.click();
  // };

  // const handleChange = (e) => {
  //   console.log(e.target.files);
  //   console.log(fileInputRef);
  // };

  // //* 화면에 출력될 파일과 서버에 보내질 파일을 구분할 필요없다.
  // //화면에 출력되는 파일
  // const [selectedImages, setSelectedImages] = useState([]);
  // //서버에 보내지는 파일
  // const [selectedFiles, setSelectedFiles] = useState(null);

  // const onSelectFile = (e) => {
  //   e.preventDefault();
  //   e.persist();

  //   //선택한 파일
  //   const selectedFiles = e.target.files;
  //   //선택한 파일들을 fileUrlList에 넣어준다.
  //   const fileUrlList = [...selectedFiles];

  //   // 미리보기 정의
  //   // const reader = new FileReader();
  //   // reader.readAsDataURL(fileInputRef.current?.files[0]);
  //   // reader.onloadend = () => {
  //   //   setSelectedFiles(reader.result);
  //  	// };
  //   // console.log(selectedFiles)

  //   // 업로드되는 파일에는 url이 있어야 한다. filePath로 보내줄 url이다.
  //   //획득한 Blob URL Address를 브라우져에서 그대로 호출 시에 이미지는 표시가 되고 ,
  //   //일반 파일의 경우 다운로드를 할 수 있다.
  //   for (let i = 0; i < selectedFiles.length; i++) {
  //     const nowUrl = URL.createObjectURL(selectedFiles[i]);
  //     fileUrlList.push(nowUrl[i]);
  //   }

  //   //Array.from() 은 문자열 등 유사 배열(Array-like) 객체나 이터러블한 객체를 배열로 만들어주는 메서드이다.
  //   const selectedFileArray = Array.from(selectedFiles);

  //   //브라우저 상에 보여질 파일 이름
  //   const imageArray = selectedFileArray.map((file) => {
  //     return file.name;
  //   });

  //   // 첨부파일 삭제시
  //   setSelectedImages((previousImages) => previousImages.concat(imageArray));
  //   e.target.value = "";
  // };

  // //브라우저상에 보여질 첨부파일
  // const attachFile =
  //   selectedImages?.map((image) => {
  //     return (
  //       <DivImg key={image}>
  //         <div>{image}</div>
  //         <button
  //           onClick={() =>
  //             setSelectedImages(selectedImages.filter((e) => e !== image))
  //           }
  //         >
  //           <VscClose size='30' />
  //         </button>
  //       </DivImg>
  //     );
  //   });

  //   console.log(attachFile)

  // const registApi = async (selectedFiles) => {
  //   //첨부파일을 보내기 전에 먼저 다른 데이터인 title, contents, password를
  //   //서버에 보내고 응답값으로 백엔드에서 id값을 주면 그 아이디 값을 활용하여 첨부파일을 서버에 보냈다.
  //   await axios({
  //     method: "post",
  //     url: `${process.env.REACT_APP_API_URL}/user/itemQna`,
  //     headers: {
  //       // Authorization: jwt,
  //     },
  //     data: {
  //       // title: title,
  //       // contents: contents,
  //       // password: passWord,
  //     },
  //   }).then((res) => {
  //     registFile(res.data);
  //   });
  // };

  // // 서버에 첨부파일 업로드하는 api
  // const registFile = async (id) => {
  //   // forData 생성
  //   const formData = new FormData();

  //   //request로 보내야할 데이터를 formData에 넣어서 보냈다.
  //   for (let i = 0; i < selectedFiles.length; i++) {
  //     formData.append("file", selectedFiles[i]);
  //   }
  //   formData.append("type", "itemQna");
  //   // 서버에서 받은 id값 사용
  //   formData.append("targetId", id);

  //   axios({
  //     method: "POST",
  //     url: `${process.env.REACT_APP_API_URL}/file/upload`,
  //     headers: {
  //       // Authorization: jwt,
  //       "Content-Type": "multipart/form-data", // 이것 필수
  //     },
  //     data: formData,
  //   }).then((res) => {
  //     Navigate("/qna-po", {
  //       state: {
  //         data: id,
  //       },
  //     });
  //   });
  // };

  // const fileInputRef = React.useRef(null);
  // const [imageFile, setImageFile] = useState(null);
  // const handleClickFileInput = () => {
  //   fileInputRef.current?.click();
  // }

  // const uploadChange = (e) => {
  //   const fileList = e.target.files;
  //   const length = fileList?.length;

  //   if (fileList && fileList[0]) {
  //     const url = URL.createObjectURL(fileList[0]);

  //     setImageFile({
  //       file: fileList[0],
  //       thumbnail: url,
  //       type: fileList[0].type.slice(0, 5)
  //     })
  //   }
  // }

  // //브라우저상에 보여질 첨부파일
  // const attachFile =
  //   imageFile?.map((image) => {
  //     return (
  //       <DivImg key={image}>
  //         <div>{image}</div>
  //         <button
  //           onClick={() =>
  //             setImageFile(image.filter((e) => e !== image))
  //           }
  //         >
  //           <VscClose size='30' />
  //         </button>
  //       </DivImg>
  //     );
  //   });

  // const showImage = useMemo(() => {
  //   if (!imageFile && imageFile == null) {
  //     return <image src={null} alt="비어있는 파일" />
  //   }
  //   return <img src={imageFile.thumbnail} alt={imageFile.type} onClick={handleClickFileInput} />;
  // })

  const fileInputRef = React.useRef(null);
  const [file, setFile] = useState(null);
  const uploadOnChange = (file, gupidx) => {
    setFile(file);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("gupidx", gupidx);

    console.log(formData);
    axios({
      method: "POST",
      url: process.env.REACT_APP_API_ROOT + `/api/request/fileupload`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log("then");
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error");
        console.error(error);
      });
  };

  return (
    <FormGroup row>
      <Label for={"file" + index} sm={2}>
        파일 첨부{index}
      </Label>
      <Col sm={10}>
        {/* <div>{attachFile}</div> */}
        {/* {showImage} */}
        <Input
          id={"file" + index}
          name={"file" + index}
          type="file"
          // onChange={handleChange}
          // onChange={onSelectFile}
          // onChange={onChange}
          onChange={(file) => uploadOnChange(file, index)}
          ref={fileInputRef}
          // multiple="multiple"
        />
        <FormText>
          This is some placeholder block-level help text for the above input.
          It‘s a bit lighter and easily wraps to a new line.
        </FormText>
        {/* <table>
          <tbody>
            <tr>
              <td>
                <TableDiv>
                  {selectedImages.length !== 0 ? (
                    <div>{attachFile}</div>
                  ) : (
                    <NotDownload>파일을 첨부할 수 있습니다.</NotDownload>
                  )}
                  <ChangeButton>업로드</ChangeButton>
                  {selectedImages.length !== 0 ? (
                    ""
                  ) : (
                    <input
                      type="file"
                      name="images"
                      onChange={onSelectFile}
                      // accept=".png, .jpg,image/*"
                      multiple="multiple"
                    />
                  )}
                </TableDiv>
              </td>
            </tr>
          </tbody>
        </table> */}
      </Col>
    </FormGroup>
  );
};

export default InputFile;

export const DivImg = styled.div`
  justify-content: space-between;
  display: flex;
  border-radius: 0.3rem;
  border: 0.01rem solid #efeff1;
  display: flex;
  padding: 0.1rem;
  background-color: #efeff1;
  align-items: center;
  font-weight: 400;
  button {
    margin-left: 0.05rem;
    color: gray;
    background-color: white;
    border-radius: 0.5rem;
    height: 0.3rem;
  }
`;

// // color: ${({ theme }) => theme.palette.txtgray};
// export const NotDownload = styled.div`
//   color: gray;
//   font-size: 0.24rem;
// `;

// // border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
// export const TableDiv = styled.div`
//   width: 11.84rem;
//   /* height: 8rem; */
//   font-size: 0.25rem;
//   margin-left: 0.12rem;
//   border: 0.01rem solid lightgray;
//   padding: 0.18rem;
//   display: flex;
//   input {
//     position: relative;
//     text-align: right;
//     opacity: 0;
//     z-index: 2;
//     cursor: pointer;
//     height: 0.5rem;
//     max-width: 1.28rem;
//   }
// `;

// // background-color: ${({ theme }) => theme.palette.green};
// export const ChangeButton = styled.button`
//   background-color: green;
//   color: white;
//   font-size: 0.24rem;
//   width: 1.28rem;
//   height: 0.52rem;
//   cursor: pointer;
//   margin-left: 10.25rem;
//   /* margin-bottom: -0.1rem; */
//   bottom: 24%;
//   position: absolute;
//   z-index: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: none;
// `;
