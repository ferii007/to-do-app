import { Icon } from "@iconify/react"

const Footer = ({ index, onClick, active }) => {
    const iconSrc = [
        "ic:round-home",
        "ph:note-fill",
        "uis:schedule",
        "uiw:setting",
    ]
    return(
        <li 
        className={`
            active-test relative before:content-[''] before:absolute before:-top-6 before:-left-1.5 before:border-t-default-theme-color-success before:border-t-4 before:w-11 before:origin-center before:transform before:-translate-y-1/2 before:transition-transform before:ease-in-out before:duration-500
            ${
                active ? 'before:scale-100': "before:scale-0"
            }`}
        onClick={() => onClick()}>
            <Icon className={`${active ? "text-default-theme-color-success active-test" : "inactive"} w-7 h-7` } icon={iconSrc[index]} />
        </li>
    )
}

export default Footer