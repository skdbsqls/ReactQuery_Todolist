import React from "react";
import { styled } from "styled-components";
import useTodo from "../hooks/useTodo";

const Input = () => {
  // Todo 추가
  const {
    title,
    contents,
    onChangeTitleHandler,
    onChangeContentsHandler,
    addTodoItem,
  } = useTodo();

  return (
    <InputContainer>
      <div>
        <StLabel>제목</StLabel> &nbsp;
        <StInputBox type="text" value={title} onChange={onChangeTitleHandler} />
        <StLabel>내용</StLabel> &nbsp;
        <StInputBox
          type="text"
          value={contents}
          onChange={onChangeContentsHandler}
        />
      </div>
      <StButton
        onClick={() => {
          addTodoItem();
        }}
      >
        추가하기
      </StButton>
    </InputContainer>
  );
};

export default Input;

// 스타일 영역
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-color: #e8e8e8;
  border-radius: 10px;
`;

const StLabel = styled.label`
  font-weight: bold;
`;

const StInputBox = styled.input`
  width: 200px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const StButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 5px 30px 5px 30px;
  color: #fff;
  border-radius: 10px;
  background-color: #017175;
`;
