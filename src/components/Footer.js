import { Icon } from "@iconify/react"
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../store/actions/index';

const Footer = ({ index, onClick, active }) => {
    const dispatch = useDispatch();
	const { settingPage } = bindActionCreators(actionCreators, dispatch);
    const iconSrc = [
        "ic:round-home",
        "ph:note-fill",
        "uis:schedule",
        "uiw:setting",
    ]

    const testing123 = () => {
        if (index < 3) {
            onClick();
        }else {
            settingPage(true);
        }
    }
    return(
        <li 
        className={`
            active-test relative before:content-[''] before:absolute before:-top-6 before:-left-1.5 before:border-t-default-theme-color-success before:border-t-4 before:w-11 before:origin-center before:transform before:-translate-y-1/2 before:transition-transform before:ease-in-out before:duration-500
            ${
                active ? 'before:scale-100': "before:scale-0"
            }`}
        onClick={() => testing123()}>
            <Icon className={`${active ? "text-default-theme-color-success active-test" : "inactive"} w-7 h-7` } icon={iconSrc[index]} />
        </li>
    )
}

export default Footer