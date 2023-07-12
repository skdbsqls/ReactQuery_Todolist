import React from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const selectTodo = todos.find((todo) => todo.id === params.id);
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <Layout>
      <TodoContainer>
        <TodoHeader key={selectTodo.id}>
          <div style={{ marginBottom: "30px" }}>ID : {selectTodo.id}</div>
          <StButton onClick={handleBackButton}>이전으로</StButton>
        </TodoHeader>
        <h2>{selectTodo.title}</h2>
        <div style={{ marginTop: "20px" }}>{selectTodo.contents}</div>
      </TodoContainer>
    </Layout>
  );
};

export default Detail;

// 스타일 영역
const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const TodoContainer = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  padding: 20px;
`;

const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StButton = styled.button`
  height: 30px;
  outline: none;
  cursor: pointer;
  padding: 0px 30px 0px 30px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
`;
