import axios from "axios";

const base = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 조회
const getTodos = async () => {
  const response = await base.get(`/todos`);
  return response.data;
};

// 추가
const addTodo = async (newTodo) => {
  await base.post(`/todos`, newTodo);
};

// 삭제
const deleteTodo = async (id) => {
  await base.delete(`/todos/${id}`);
};

// 수정
const toggleTodo = async (updatedTodo) => {
  await base.patch(`/todos/${updatedTodo.id}`, updatedTodo);
};

// export
export { getTodos, addTodo, deleteTodo, toggleTodo };
