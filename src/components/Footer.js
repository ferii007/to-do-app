import { Icon } from "@iconify/react"

const Footer = () => {
    return(
        <footer className="fixed bottom-0 w-full py-7 px-2 bg-white shadow-inner flex justify-around items-center text-secondary-color-neutral">
            <Icon icon="ic:round-home" className="w-8 h-8" />
            <Icon icon="ph:note-fill" className="w-8 h-8" />
            <Icon icon="uis:schedule" className="w-8 h-8" />
            <Icon icon="uiw:setting" className="w-8 h-8" />
        </footer>
    )
}

export default Footer