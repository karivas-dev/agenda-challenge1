function FavoriteIcon({isFavorite, toggleFavorite}) {
    if (isFavorite) {
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-6 h-6" onClick={toggleFavorite}>
            <path
                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
        </svg>
    }
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={toggleFavorite}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
    </svg>
}

function DefaultImg({defaultImg}) {
    if (defaultImg === 1) {
        return (<div className="flex-shrink-0">
            <img className="w-10 h-10 rounded-full" src="/images/defaultMale.png" alt="User"/>
        </div>)
    }
    return (<div className="flex-shrink-0">
        <img className="w-10 h-10 rounded-full" src="/images/defaultFemale.png" alt="User"/>
    </div>)
}

export const Contact = ({firstname, lastname, phone, isFavorite, defaultImg, toggleFavorite, deleteContact}) => {
    return (<div className="flex items-center space-x-4">
            <DefaultImg defaultImg={defaultImg}/>
            <div className="flex-1 min-w-0 text-start">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {firstname + " " + lastname}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {phone}
                </p>
            </div>
            <div
                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <FavoriteIcon isFavorite={isFavorite} toggleFavorite={toggleFavorite}/>

                <div className="ml-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6" onClick={deleteContact}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                    </svg>
                </div>
            </div>
        </div>)
}