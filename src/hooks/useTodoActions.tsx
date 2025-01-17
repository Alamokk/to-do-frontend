import { useState } from "react";

export const useTodoActions = (todoId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateTitle = async (title: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/todos/${todoId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update todo title");
      }
    } catch (error) {
      setError(error as Error);
      console.error("Error updating todo title:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleComplete = async (isCompleted: boolean) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/todos/${todoId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isCompleted: !isCompleted }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }
    } catch (error) {
      setError(error as Error);
      console.error("Error updating todo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTodo = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/todos/${todoId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }
    } catch (error) {
      setError(error as Error);
      console.error("Error deleting todo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateTitle,
    toggleComplete,
    deleteTodo,
    isLoading,
    error,
  };
};
