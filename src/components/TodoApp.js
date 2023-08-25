import AddNoteList from "./notes/AddNoteList";
import DeleteNote from "./notes/DeleteNote";
import Footer from "./Footer"
import NotifAlert from "./alert/NotifAlert"
import MainPage from "./main-page/MainPage"
// import StartPage from "./start-page/StartPage"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SettingPage from "./setting-page/SettingPage";

const TodoApp = () => {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 1
        }
    };

    return(
        <>
            <main className="bg-bg-color-neutral relative h-screen overflow-scroll scroll-smooth">
                <section className="pb-40">
                    <Carousel
                        className="h-full max-w-screen-sm m-auto"
                        arrows={false}
                        showDots={true}
                        // centerMode={false}
                        // swipeable={true}
                        // afterChange={(previousSlide, { currentSlide, onMove }) => {
                        //     let mainElement = document.querySelector("main");
                        //     mainElement.scrollTo(0, 0);
                        //   }}
                        customDot={<Footer />}
                        responsive={responsive}
                    >
                        <MainPage />
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
                    </Carousel>
                </section>
            </main>

            <NotifAlert />
            <DeleteNote />
            <AddNoteList /> 
            <SettingPage />
        </>
    )

}

export default TodoApp