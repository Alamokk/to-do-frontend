import AddItem from "../components/add-item";
import TodoList from "../components/todo-list";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles["todo-container"]}>
        <h1 className={styles.h1}>✨ My Tasks</h1>
        <div className={styles["todo-content"]}>
          <AddItem />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
