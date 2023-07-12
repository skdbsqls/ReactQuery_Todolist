import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { getTodos, deleteTodo, toggleTodo } from "../axios/api";
import { useMutation, useQuery, useQueryClient } from "react-query";

const TodoList = ({ listIsDone }) => {
  const queryClient = useQueryClient();

  // Todos 조회
  const { isLoading, isError, data: todos } = useQuery("todos", getTodos);

  // Todo 삭제
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const handleDeleteButton = (id) => {
    deleteMutation.mutate(id);
  };

  // Todo 수정
  const toggleMutation = useMutation(toggleTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const handleToggleButton = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const updatedTodo = {
      ...todo,
      isDone: !todo.isDone,
    };
    toggleMutation.mutate(updatedTodo);
  };

  // Todos 조회
  if (isLoading) {
    return <h1>로딩중입니다...!</h1>;
  }
  if (isError) {
    return <h1>오류 발생!!</h1>;
  }
  return (
    <>
      <h2>{listIsDone ? "Done..!🎉" : "Working...🔥"}</h2>
      <TodoListContainer>
        {todos
          ?.filter((todo) => todo.isDone === listIsDone)
          .map((todo) => (
            <TodoCard key={todo.id}>
              <StDetailButton>
                <Link
                  to={`/detail/${todo.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  상세보기
                </Link>
              </StDetailButton>
              <StTitle>{todo.title}</StTitle>
              <StContents>{todo.contents}</StContents>
              <ButtonContainer>
                <StButton
                  border="3px solid red"
                  onClick={() => handleDeleteButton(todo.id)}
                >
                  삭제하기
                </StButton>
                <StButton
                  border="3px solid green"
                  onClick={() => handleToggleButton(todo.id)}
                >
                  {todo.isDone ? "취소" : "완료"}
                </StButton>
              </ButtonContainer>
            </TodoCard>
          ))}
      </TodoListContainer>
    </>
  );
};

export default TodoList;

// 스타일 영역
const TodoListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const TodoCard = styled.div`
  width: 330px;
  height: 210px;
  border: 5px solid #017175;
  border-radius: 10px;
`;

const StDetailButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  margin: 20px 0px 0px 30px;
  font-size: 15px;
  padding: 0px;
`;

const StTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 15px 30px 15px 30px;
`;

const StContents = styled.div`
  font-size: 18px;
  margin: 15px 30px 15px 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StButton = styled.button`
  width: 130px;
  outline: none;
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  border-radius: 8px;
  border: ${(props) => props.border};
`;
