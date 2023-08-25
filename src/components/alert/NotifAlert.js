import { useSelector } from "react-redux";

const NotifAlert = () => {

    const isAlertShow = useSelector((state) => state.alertNotif.show);
    const alertMessage = useSelector((state) => state.alertNotif.message);

    return(
        <div className={`absolute left-0 right-0 z-10 flex justify-center ${isAlertShow ? 'bottom-28' : '-bottom-full'} transition-all duration-500`}>
            <div className="bg-default-theme-color-success text-white px-4 py-2 shadow-xl rounded-lg">
                {alertMessage}
            </div>
        </div>
    )
}

export default NotifAlert