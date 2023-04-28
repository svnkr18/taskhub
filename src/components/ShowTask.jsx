import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = taskList.find((task) => task.id === id);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
          <div className="title">Todo</div>
          <div className="count">{taskList.length}</div>
        </div>
        <div>
          <button
            className={taskList.length > 0 ? "clearAll" : "clearDisable"}
            onClick={() => setTaskList([])}
          >
            Clear All
          </button>
        </div>
      </div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <div className="icon">
              <PencilIcon
                onClick={() => handleEdit(task.id)}
                style={{ height: "17" }}
              />
              <TrashIcon
                onClick={() => handleDelete(task.id)}
                style={{ height: "17", color: "red" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
