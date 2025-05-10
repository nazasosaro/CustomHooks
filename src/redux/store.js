import { legacy_createStore as createStore } from "redux";

// estado inicial -> es solo una tarea
const initialState = [{ id: 1, name: "Explicar reducer", isDone: false }];

// el reducer -> recibe el estado actual y la accion
const taskReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload];
    case "[TAREAS] Finalizar Tarea":
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        } else {
          return task;
        }
      });
    case "[TAREAS] Eliminar Tarea":
      return state.filter((task) => task.id != action.payload);
    case "[TAREAS] Eliminar todas las Tareas":
      return [];
    default:
      return state;
  }

  return state;
};

export const store = createStore(taskReducer);
