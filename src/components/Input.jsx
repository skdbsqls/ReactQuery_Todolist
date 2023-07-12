import React, { useState } from "react";
import { nanoid } from "nanoid";
import { styled } from "styled-components";
import { addTodo } from "../axios/api";
import { useMutation, useQueryClient } from "react-query";
import useInput from "../hooks/useInput";

const Input = () => {
  // Custom Hook 사용하기
  const [title, onChangeTitleHandler, resetTitle] = useInput("");
  const [contents, onChangeContentsHandler, resetContents] = useInput("");

  // Todo 추가
  const queryClient = useQueryClient();
  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  // Todo 추가
  const handleAddButton = () => {
    if (title === "") {
      alert("제목을 입력해주세요.");
    } else if (contents === "") {
      alert("내용을 입력해주세요.");
    } else {
      const newTodo = {
        id: nanoid(),
        title,
        contents,
        isDone: false,
      };
      addMutation.mutate(newTodo);
    }
    resetTitle();
    resetContents();
  };

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
      <StButton onClick={handleAddButton}>추가하기</StButton>
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
