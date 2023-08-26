import { Icon } from "@iconify/react"
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../store/actions/index';

const SettingPage = () => {
    const dispatch = useDispatch();
	const { settingPage } = bindActionCreators(actionCreators, dispatch);
    
    const isSettingPage = useSelector((state) => state.settingPage);

    const closeSettingPage = () => {
        settingPage(false)
    }
    
    return(
        <section className={`h-screen absolute top-0 left-0 right-0 bottom-0 bg-white p-4 ${isSettingPage ? 'translate-x-0 z-50' : '-translate-x-full -z-50'} transition-all ease-in-out duration-500`}>
            <div className='flex justify-between items-center px-3 py-5'>
                <Icon icon="ic:outline-arrow-back-ios" className="w-7 h-7" onClick={() => closeSettingPage()} />
                <h1 className="text-2xl font-medium">Settings</h1>
                <Icon icon="iconamoon:search-bold" className="w-8 h-8" />
            </div>

            <div className="pt-24 text-secondary-color-neutral px-4 py-5">
                <div className="setting-element">
                    <div className="setting-label">
                        <Icon icon="tabler:pencil-cog" className="label-icon" />
                        <h5 className="setting-text">Theme</h5>
                    </div>

                    <Icon icon="ic:outline-arrow-back-ios" className="setting-icon" />
                </div>

                <div className="setting-element">
                    <div className="setting-label">
                        <Icon icon="gg:dark-mode" className="label-icon" />
                        <h5 className="setting-text">Change Mode</h5>
                    </div>

                    <Icon icon="ic:outline-arrow-back-ios" className="setting-icon" />
                </div>

                <hr className="border-t border-t-line-color-neutral" />
                
                <div className="setting-element pt-6">
                    <div className="setting-label">
                        <Icon icon="mdi:about" className="label-icon" />
                        <h5 className="setting-text">About</h5>
                    </div>

                    <Icon icon="ic:outline-arrow-back-ios" className="setting-icon" />
                </div>

                <div className="setting-element">
                    <div className="setting-label">
                        <Icon icon="iconoir:privacy-policy" className="label-icon" />
                        <h5 className="setting-text">Privacy Policy</h5>
                    </div>

                    <Icon icon="ic:outline-arrow-back-ios" className="setting-icon" />
                </div>

                <div className="setting-element">
                    <div className="setting-label">
                        <Icon icon="ic:round-live-help" className="label-icon" />
                        <h5 className="setting-text">Help Center</h5>
                    </div>

                    <Icon icon="ic:outline-arrow-back-ios" className="setting-icon" />
                </div>

                <div className="setting-element">
                    <div className="setting-label">
                        <Icon icon="solar:dollar-bold" className="label-icon" />
                        <h5 className="setting-text">Donate</h5>
                    </div>

                    <Icon icon="ic:outline-arrow-back-ios" className="setting-icon" />
                </div>
            </div>
        </section>
    )
}

export default SettingPage