import { useEffect, useState } from "react";
import { Todo } from "@models/todo";

export default function useGetTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
      const data = await response.json();
      setTodos(data?.todos);
    } catch (error) {
      console.log(error);
    }
  }
  return todos;
}
