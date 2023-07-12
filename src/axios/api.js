import axios from "axios";

// 조회
const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  return response.data;
};

// 추가
const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

// 삭제
const deleteTodo = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
};

// 수정
const toggleTodo = async (updatedTodo) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/todos/${updatedTodo.id}`,
    updatedTodo
  );
};

// export
export { getTodos, addTodo, deleteTodo, toggleTodo };
