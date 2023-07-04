import PulseElement from "../PulseElement";
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const StartPage = () => {
    const [themeSelected, setThemeSelected] = useState('');

    const handleSubmit = () => {
        console.log("testing:", themeSelected);
    };

    return(
        <div className="text-center pt-12 pb-8 px-5">
            <h1 className="text-3xl font-bold">
                Create to do list
            </h1>

            <h3 className="text-sm text-secondary-color-neutral mt-2">
                Choose your to do list color theme:
            </h3>

            <div className="py-7 flex flex-col gap-6">
                <input className="hidden" type="radio" name="Color Theme" value="successTheme" id="successTheme" onChange={(e) => setThemeSelected(e.target.value)} />
                <input className="hidden" type="radio" name="Color Theme" value="errorTheme" id="errorTheme" onChange={(e) => setThemeSelected(e.target.value)} />
                <input className="hidden" type="radio" name="Color Theme" value="warningTheme" id="warningTheme" onChange={(e) => setThemeSelected(e.target.value)} />
                <input className="hidden" type="radio" name="Color Theme" value="neutralTheme" id="neutralTheme" onChange={(e) => setThemeSelected(e.target.value)} />
                
                <div className="relative">
                    <div className={`bg-default-theme-color-success w-8 h-8 absolute rounded-full -top-3 -left-3 flex items-center justify-center z-10 transition-all duration-200 ${themeSelected === 'successTheme' ? 'opacity-100' : 'opacity-0'}`}>
                        <Icon icon="material-symbols:check" className="text-white" width="20" />
                    </div>

                    <div className={`overflow-hidden rounded-lg drop-shadow-xl border-2 border-transparent hover:border-pressed-theme-color-success transition-all duration-200 ${themeSelected === 'successTheme' ? 'border-pressed-theme-color-success' : ''}`}>
                        <label htmlFor="successTheme" className="cursor-pointer">
                            <div className="bg-default-theme-color-success w-full p-4"></div>

                            <PulseElement />
                        </label>
                    </div>
                </div>
                
                <div className="relative">
                    <div className={`bg-default-theme-color-error w-8 h-8 absolute rounded-full -top-3 -left-3 flex items-center justify-center z-10 transition-all duration-200 ${themeSelected === 'errorTheme' ? 'opacity-100' : 'opacity-0'}`}>
                        <Icon icon="material-symbols:check" className="text-white" width="20" />
                    </div>

                    <div className={`overflow-hidden rounded-lg drop-shadow-xl border-2 border-transparent hover:border-pressed-theme-color-error transition-all duration-200 ${themeSelected === 'errorTheme' ? 'border-pressed-theme-color-error' : ''}`}>
                        <label htmlFor="errorTheme" className="cursor-pointer">
                            <div className="bg-default-theme-color-error w-full p-4"></div>

                            <PulseElement />
                        </label>
                    </div>
                </div>

                <div className="relative">
                    <div className={`bg-default-theme-color-warning w-8 h-8 absolute rounded-full -top-3 -left-3 flex items-center justify-center z-10 ${themeSelected === 'warningTheme' ? 'opacity-100' : 'opacity-0'}`}>
                        <Icon icon="material-symbols:check" className="text-white" width="20" />
                    </div>

                    <div className={`overflow-hidden rounded-lg drop-shadow-xl border-2 border-transparent hover:border-pressed-theme-color-warning transition-all duration-200 ${themeSelected === 'warningTheme' ? 'border-pressed-theme-color-warning' : ''}`}>
                        <label htmlFor="warningTheme" className="cursor-pointer">
                            <div className="bg-default-theme-color-warning w-full p-4"></div>

                            <PulseElement />
                        </label>
                    </div>
                </div>

                <div className="relative">
                    <div className={`bg-black w-8 h-8 absolute rounded-full -top-3 -left-3 flex items-center justify-center z-10 ${themeSelected === 'neutralTheme' ? 'opacity-100' : 'opacity-0'}`}>
                        <Icon icon="material-symbols:check" className="text-white" width="20" />
                    </div>

                    <div className={`overflow-hidden rounded-lg drop-shadow-xl border-2 border-transparent hover:border-primary-color-neutral transition-all duration-200 ${themeSelected === 'neutralTheme' ? 'border-primary-color-neutral' : ''}`}>
                        <label htmlFor="neutralTheme" className="cursor-pointer">
                            <div className="bg-black w-full p-4"></div>

                            <PulseElement />
                        </label>
                    </div>
                </div>
            </div>

            <div className="pt-10">
                <button className="bg-default-theme-color-success text-white p-4 w-full rounded-2xl text-lg font-extrabold bg-opacity-90" onClick={() => handleSubmit()}>Open ToDo-App</button>
            </div>
        </div>
    )

}

export default StartPage