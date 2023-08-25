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
        // <StartPage />

        // <main className="relative overflow-hidden bg-bg-color-neutral">
        //     <NotifAlert />

        //     <MainPage />

        //     <Footer />
        // </main>

        <>
            <main className="relative overflow-hidden bg-bg-color-neutral">
                <Carousel
                    className="h-full"
                    arrows={false}
                    showDots={true}
                    // swipeable={false}
                    customDot={<Footer />}
                    responsive={responsive}
                >
                    <MainPage />
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel>

                {/* <Footer /> */}


                <AddNoteList /> 
                <DeleteNote />
                <NotifAlert />
            </main>


        </>
    )

}

export default TodoApp