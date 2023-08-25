import { useSelector } from "react-redux";

const SavedAlert = () => {

    const isSavedAlert = useSelector((state) => state.alertNotif);

    return(
        <div className={`absolute left-0 right-0 z-50 flex justify-center ${isSavedAlert ? 'bottom-28' : '-bottom-full'} transition-all duration-500`}>
            <div className="bg-default-theme-color-success text-white px-4 py-2 shadow-xl rounded-lg">
                Added
            </div>
        </div>
    )
}

export default SavedAlert