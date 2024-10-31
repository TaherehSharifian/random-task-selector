import React, { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState(1);

  const [randomTask, setRandomTask] = useState("");

  const addTask = () => {
    if (taskName && taskPriority) {
      const newTask = { name: taskName, priority: taskPriority };
      setTasks([...tasks, newTask]);
      setTaskName("");
      setTaskPriority(1);
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const randomSelections = () => {
    const newTaskList = [];
    tasks.forEach((item) => {
      for (let i = 0; i < 3 - item.priority + 1; i++) {
        newTaskList.push(item.name);
      }
    });

    const randomTask =
      newTaskList[Math.floor(Math.random() * newTaskList.length)];
    setRandomTask(randomTask);
  };

  useEffect(() => {
    tasks.length === 0 && setRandomTask("");
  }, [tasks]);

  return (
    <div>
      <h1>{randomTask}</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} ... priority: {task.priority}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="number"
        min={1}
        max={3}
        value={taskPriority}
        onChange={(e) => setTaskPriority(parseInt(e.target.value))}
      />
      <button onClick={addTask} style={{ margin: "auto 10px" }}>
        Add Task
      </button>
      {tasks.length > 0 && (
        <button onClick={randomSelections}>Random Select</button>
      )}
    </div>
  );
};

export default App;
