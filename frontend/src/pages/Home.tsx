import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Page, TaskForm, TaskItem } from "src/components";
import { getAllTasks, Task } from "src/api/tasks";


export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllTasks().then((res) => {
      if (res.success) {
        setTasks(res.data);
      } else {
        setError("Failed to load tasks");
      }
    });
  }, []);

  return (
    <Page>
      <Helmet>
        <title>Home | TSE Todos</title>
      </Helmet>
      <p>
        <Link to="/about">About this app</Link>
      </p>

      <TaskForm mode="create" />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </Page>
  );
}
