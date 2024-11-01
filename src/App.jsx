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
    <div className=" bg-teal-200 h-screen flex justify-center">
      <div className="w-[800px] flex flex-col gap-4 justify-between items-center">
        <div className="flex flex-col gap-4 justify-between items-start w-full">
          <h1 className="text-4xl font-bold p-5 border-b-2 w-full border-teal-300">
            {randomTask}
          </h1>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={
                    task.priority === 1
                      ? "red"
                      : task.priority === 2
                      ? "orange"
                      : "yellow"
                  }
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
                {task.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="red"
                  className="size-4 cursor-pointer"
                  onClick={() => removeTask(index)}
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-7">
          {tasks.length > 0 && (
            <button
              className="bg-teal-900 p-3 text-white rounded-lg hover:bg-teal-800"
              onClick={randomSelections}
            >
              Random Select
            </button>
          )}

          <div className="flex flex-row gap-5 items-end mb-10">
            <label>
              <p>Task Title</p>
              <input
                type="text"
                placeholder="task title"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="rounded-lg p-4 w-96 outline-none"
              />
            </label>
            <label>
              <p>Priority</p>
              <input
                type="number"
                min={1}
                max={3}
                value={taskPriority}
                onChange={(e) => setTaskPriority(parseInt(e.target.value))}
                className="rounded-lg p-4 outline-none"
              />
            </label>
            <div>
              <span
                onClick={addTask}
                className="mx-2 bg-teal-900 text-white rounded-lg py-4 px-6 flex justify-center items-center cursor-pointer hover:bg-teal-800"
              >
                Add Task
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
