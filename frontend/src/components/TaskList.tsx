import { useEffect, useState } from "react";
import { getAllTasks, type Task } from "src/api/tasks";
import { TaskItem } from "src/components";
import styles from "src/components/TaskList.module.css";

export interface TaskListProps {
  title: string;
}

export function TaskList({ title }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getAllTasks().then((res) => {
      if (res.success) setTasks(res.data);
    });
  }, []);

  return (
    <div className={styles.list}>
      <span className={styles.title}>{title}</span>
      <div className={styles.tasks}>
        {tasks.length === 0 ? (
          <span className={styles.empty}>No tasks yet!</span>
        ) : (
          tasks.map((task) => <TaskItem key={task._id} task={task} />)
        )}
      </div>
    </div>
  );
}
