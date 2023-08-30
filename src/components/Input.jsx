export const Input = ({label, placeholder, name, onChange, value}) => {
    return (<div>
            <label htmlFor={name}
                   className="text-start block
                   mb-2 text-sm font-medium text-white">{label}</label>
            <input type="text" name={name} id={name}
                   className="border
                   text-sm rounded-lg
                   block w-full p-2.5 bg-[#446c7f] border-gray-400
                   placeholder-gray-400 text-white"
                   placeholder={placeholder} required
                   onChange={event => onChange(event)}
                   value={value}/>
        </div>)
}