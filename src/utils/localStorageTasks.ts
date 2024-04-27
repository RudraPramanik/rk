interface Task {
    id: string;
    title: string;
    completed: boolean;
  }
  
  const TASKS_STORAGE_KEY = 'tasks';
  
  export const fetchTasks = (): Task[] => {
    const tasksJson = localStorage.getItem(TASKS_STORAGE_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
  };
  
  export const saveTasks = (tasks: Task[]) => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  };