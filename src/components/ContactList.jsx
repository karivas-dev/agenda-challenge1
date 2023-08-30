import {Contact} from "./Contact";
import data from './data/data.json';
import {useState} from "react";
import {Modal} from "./Modal";

export const ContactList = () => {
    const [showModal, setShowModal] = useState(false);

    const toogleModal = () => setShowModal(!showModal);

    return (<>
        <Modal isModalActive={showModal} toggleModal={toogleModal}/>
        <h1 className="font-extrabold text-5xl mb-16">Agenda de contactos</h1>
        <div
            className="w-full max-w-md p-4 bg-[#284e61] border rounded-lg shadow
            sm:p-8 border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-white">Registrados</h5>
                <button type="button" onClick={toogleModal}
                        className="text-white bg-gradient-to-r from-teal-400
                via-teal-500 to-teal-600 hover:bg-gradient-to-br
                focus:ring-4 focus:outline-none focus:ring-teal-800
                shadow-lg shadow-teal-800/80
                font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                </button>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-400">
                    {data.sort((contact1, contact2) => {
                        return contact2.isFavorite - contact1.isFavorite;
                    }).map((data) => (<li className="py-3 sm:py-4" key={data.id}>
                        <Contact firstname={data.firstname}
                                 lastname={data.lastname}
                                 phone={data.phone}
                                 isFavorite={data.isFavorite}
                                 defaultImg={data.defaultImg}/>
                    </li>))
                    }
                </ul>
            </div>
        </div>
    </>)
}
