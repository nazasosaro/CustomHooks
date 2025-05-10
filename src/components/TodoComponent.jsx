import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";

export const TodoComponent = () => {

    const tasks = useSelector(state => state)
    const dispatch = useDispatch()

  const addTask = (event) => {
    event.preventDefault();
    if(task == '') return
    const newTask = {
      id: new Date().getTime(),
      name: task,
      isDone: false,
    };
    const action = {
      type: "[TAREAS] Agregar Tarea",
      payload: newTask, // payload -> le manda la nueva tarea
    };
    dispatch(action);
  };

  const endTask = (id) => {
    console.log("Finalizando tarea con id:", id);
    // la accion de end tarea
    const action = {
      type: "[TAREAS] Finalizar Tarea",
      payload: id, // payload -> le manda la nueva tarea
    };
    dispatch(action);
  };

  const deleteTask = (id) => {
    const action = {
      type: "[TAREAS] Eliminar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const deleteAll = () => {
    const action = {
      type: "[TAREAS] Eliminar todas las Tareas",
    };
    dispatch(action);
  }

  const { task, onInputChange } = useForm({ task: "" });

  return (
    <>
      <form onSubmit={addTask}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Agregar nueva tarea
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            name="task"
            value={task}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
        <button
          type="button"
          className="btn btn-danger ms-5"
          onClick={deleteAll}
        >
          Borrar Todas
        </button>
      </form>

      <hr />

      <ul className="list-group list-group-numbered">
        {tasks.map((task) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={task.id}
            >
              <span
                style={{
                  textDecoration: task.isDone ? "line-through" : "none",
                }}
              >
                {task.name}
              </span>
              <input
                type="checkbox"
                value={task.isDone}
                onChange={() => endTask(task.id)}
              />
              <button
                className="btn btn-dark"
                onClick={() => deleteTask(task.id)}
              >
                Eliminar
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
