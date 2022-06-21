import React from "react";

// Task Interface
export interface Task {
  id: number;
  title: string;
  taskNumber: number;
  taskBody: string;
  isCompleted: boolean;
  date: string;
  currentlyActive: boolean;
}
//TaskForm Interface
export interface TaskForm {
  task: Task[];
  handleTaskCreate: (task: Task) => void;
}

// TaskList Interface
export interface TaskList {
  handleTaskUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleTaskDelete: (id: number) => void;
  handleTaskComplete: (id: number) => void;
  tasks: Task[];
}

// TaskList Interface
export interface TaskItem {
  handleTaskUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleTaskDelete: (id: number) => void;
  handleTaskComplete: (id: number) => void;
  task: Task;
}
