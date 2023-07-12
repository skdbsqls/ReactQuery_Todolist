import useInput from "./useInput";
import useTodosQueries from "./useTodosQueries";
import { nanoid } from "nanoid";

const useTodo = () => {
  const [title, onChangeTitleHandler, resetTitle] = useInput("");
  const [contents, onChangeContentsHandler, resetContents] = useInput("");

  const {
    todos,
    isError,
    isLoading,
    addMutation,
    deleteMutation,
    toggleMutation,
  } = useTodosQueries();

  const addTodoItem = () => {
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

  const toggleTodoItem = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const updatedTodo = {
      ...todo,
      isDone: !todo.isDone,
    };
    toggleMutation.mutate(updatedTodo);
  };

  const deleteTodoItem = (id) => {
    deleteMutation.mutate(id);
  };

  return {
    todos,
    isError,
    isLoading,
    title,
    onChangeTitleHandler,
    contents,
    onChangeContentsHandler,
    addTodoItem,
    toggleTodoItem,
    deleteTodoItem,
  };
};

export default useTodo;
