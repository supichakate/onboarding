import { CheckButton } from "src/components";
import styles from "src/components/TaskItem.module.css";

import type { Task } from "src/api/tasks";

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const textContainerClass = task.isChecked
    ? `${styles.textContainer} ${styles.checked}`
    : styles.textContainer;

  return (
    <div className={styles.item}>
      <CheckButton checked={task.isChecked} className={styles.checkButton} />
      <div className={textContainerClass}>
        <span className={styles.title}>{task.title}</span>
        {task.description && (
          <span className={styles.description}>{task.description}</span>
        )}
      </div>
    </div>
  );
}