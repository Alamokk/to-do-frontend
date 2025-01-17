"use client";

import { useRef } from "react";
import { useAddTodo } from "../hooks/useAddTodo";

export default function AddItem() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addTodo, isLoading, error } = useAddTodo();

  async function handleAddTodo() {
    if (inputRef.current?.value) {
      await addTodo(inputRef.current.value);
      inputRef.current.value = ""; // Clear input after adding
    }
  }

  const styles = {
    container: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Add a task"
        ref={inputRef}
        disabled={isLoading}
      />
      <button type="submit" onClick={handleAddTodo} disabled={isLoading}>
        {isLoading ? "Adding..." : "Add"}
      </button>
      {error && <div style={{ color: "red" }}>{error.message}</div>}
    </div>
  );
}
