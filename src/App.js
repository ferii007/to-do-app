import TodoApp from "./components/TodoApp";
import NotifAlert from "./components/alert/NotifAlert";

function App() {
  return (
    <main className="relative">
      <TodoApp />

      <NotifAlert />
    </main>
  );
}

export default App;
