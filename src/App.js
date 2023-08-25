import TodoApp from "./components/TodoApp";
import SavedAlert from "./components/alert/SavedAlert";

function App() {
  return (
    <main className="relative">
      <TodoApp />

      <SavedAlert />
    </main>
  );
}

export default App;
