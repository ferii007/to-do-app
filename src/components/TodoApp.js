import AddNoteList from "./AddNoteList";
import DeleteNote from "./DeleteNote";
import Footer from "./Footer"
import NotifAlert from "./alert/NotifAlert"
import MainPage from "./main-page/MainPage"
// import StartPage from "./start-page/StartPage"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
            <main className="bg-bg-color-neutral relative h-screen overflow-scroll">
                <section className="pb-40">
                    <Carousel
                        className="h-full max-w-screen-sm m-auto"
                        arrows={false}
                        showDots={true}
                        // centerMode={false}
                        // swipeable={true}
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
        </>
    )

}

export default TodoApp