import TodoApp from "./components/TodoApp";
import NotifAlert from "./components/alert/NotifAlert";

function App() {
  return (
    <main className="relative overflow-hidden">
      <TodoApp />

      <NotifAlert />
    </main>
  );
}

export default App;
