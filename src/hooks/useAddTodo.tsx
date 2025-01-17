import { useState } from "react";

export const useAddTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const addTodo = async (title: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }
    } catch (error) {
      setError(error as Error);
      console.error("Error adding todo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addTodo,
    isLoading,
    error,
  };
};
