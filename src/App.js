import "./App.css";
import List from "./components/List";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <List />
        <hr />
        <AddTodo />
      </div>
    </Provider>
  );
}

export default App;
