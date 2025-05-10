import { FormsComponent } from "./components/FormsComponent";
import { HeavyCalculationComponent } from "./components/HeavyCalculationComponent";
import { FetchComponent } from "./components/FetchComponent";
import { CallBackComponent } from "./components/CallBackComponent";
import { TodoComponent } from "./components/TodoComponent";

export const HooksApp = () => {
  return (
    <>
      <div className="container mt-5">
        <h1>Aplicacion de hooks</h1>
        {/* <FormsComponent />
        <hr />
        <FetchComponent />
        <hr />
        <HeavyCalculationComponent />
        <hr />
        <CallBackComponent />
        <hr /> */}
        <TodoComponent />
      </div>
    </>
  );
};
