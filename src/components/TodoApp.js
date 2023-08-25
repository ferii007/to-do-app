import NotifAlert from "./alert/NotifAlert"
import MainPage from "./main-page/MainPage"
// import StartPage from "./start-page/StartPage"

const TodoApp = () => {

    return(
        // <StartPage />

        <main className="relative overflow-hidden">
            <NotifAlert />

            <MainPage />
        </main>
    )

}

export default TodoApp