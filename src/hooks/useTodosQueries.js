import { useMutation, useQuery, useQueryClient } from "react-query";
import { addTodo, deleteTodo, getTodos, toggleTodo } from "../axios/api";

const QUERY_KEY = {
  todos: "todos",
};

const useTodosQueries = () => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: todos,
  } = useQuery(QUERY_KEY.todos, getTodos);

  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.todos);
    },
  });

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.todos);
    },
  });

  const toggleMutation = useMutation(toggleTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.todos);
    },
  });

  return {
    isLoading,
    isError,
    todos,
    addMutation,
    deleteMutation,
    toggleMutation,
  };
};

export default useTodosQueries;
