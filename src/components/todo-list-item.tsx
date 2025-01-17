import { Todo } from "@models/todo";
import { useRef } from "react";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";
import styles from "./todo-list-item.module.css";
import { useTodoActions } from "../hooks/useTodoActions";

export default function TodoListItem({ todo }: { todo: Todo }) {
  const { updateTitle, toggleComplete, deleteTodo } = useTodoActions(
    todo.id.toString()
  );

  const titleRef = useRef<HTMLSpanElement>(null);

  const handleEdit = () => {
    titleRef.current?.focus();
  };

  const handleComplete = () => {
    toggleComplete(todo.isCompleted);
  };

  const handleDelete = () => {
    deleteTodo();
  };

  const handleTitleChange = (event: React.FocusEvent<HTMLSpanElement>) => {
    const newTitle = event.currentTarget.textContent;
    if (newTitle && newTitle !== todo.title) {
      updateTitle(newTitle);
    }
  };

  return (
    <div className={styles.todoItem}>
      <div className={styles.todoContent}>
        <button
          className={`${styles.completeButton} ${
            todo.isCompleted ? styles.completed : ""
          }`}
          onClick={handleComplete}
        >
          <FaCheckCircle />
        </button>
        <span
          ref={titleRef}
          contentEditable
          suppressContentEditableWarning
          className={`${styles.todoTitle} ${
            todo.isCompleted ? styles.completedText : ""
          }`}
          onBlur={handleTitleChange}
        >
          {todo?.title}
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles.actionButton} onClick={handleEdit}>
          <FaEdit />
        </button>
        <button className={styles.actionButton} onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
