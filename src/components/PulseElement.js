
const PulseElement = () => {

    return(
        <div className="bg-white w-full p-5">
            <div className="flex space-x-3">
                <div className="rounded-full bg-line-color-neutral h-10 w-10"></div>
                
                <div className="flex-1 space-y-2 py-1">
                    <div className="h-2 bg-line-color-neutral rounded"></div>
                    <div className="space-y-2">
                            <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-line-color-neutral rounded col-span-2"></div>
                            <div className="h-2 bg-line-color-neutral rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-line-color-neutral rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PulseElement