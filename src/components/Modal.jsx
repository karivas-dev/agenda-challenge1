import {Input} from "./Input";

export const Modal = ({isModalActive, toggleModal}) => {
    if (!isModalActive) {
        return;
    }

    return (<>
        <div id="modal" tabIndex="-1" aria-hidden="true"
             className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden
             overflow-y-auto md:inset-0 h-screen max-h-full flex place-content-center
             place-items-center">
            <div className="absolute top-0 left-0 z-0 h-screen w-screen" onClick={toggleModal}></div>
            <div className="relative z-10 w-full max-w-lg h-fit">
                <div className="relative rounded-lg shadow bg-[#304c59] py-8">
                    <button type="button" onClick={toggleModal}
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent
                            rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center
                            items-center hover:bg-gray-600 hover:text-white"
                            data-modal-hide="modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-12 text-3xl font-semibold text-white">Agregar un contacto nuevo</h3>
                        <form className="space-y-6" action="#">

                            <Input label={"Nombre"} name={"firstname"} placeholder={"Yosiak"}/>
                            <Input label={"Apellido"} name={"laststname"} placeholder={"Cotto"}/>
                            <Input label={"Número de teléfono"} name={"phone"} placeholder={"+503 2858 6426"}/>

                            <div className="flex items-center mb-4">
                                <input id="default-radio-1" type="radio" value="1" name="default-radio"
                                       className="w-4 h-4 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
                                <label htmlFor="default-radio-1"
                                       className="ml-2 text-sm font-medium text-gray-300">Male</label>
                            </div>

                            <div className="flex items-center">
                                <input checked id="default-radio-2" type="radio" value="2" name="default-radio"
                                       className="w-4 h-4 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
                                <label htmlFor="default-radio-2"
                                       className="ml-2 text-sm font-medium text-gray-300">Female</label>
                            </div>

                            <button type="button"
                                    className="w-full text-white bg-gradient-to-r from-teal-400
                                    via-teal-500 to-teal-600 hover:bg-gradient-to-br
                                    focus:ring-4 focus:outline-none focus:ring-teal-800
                                    shadow-lg shadow-teal-800/80
                                    font-medium rounded-full text-sm px-5 py-3.5 text-center">
                                Agregar contacto
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}