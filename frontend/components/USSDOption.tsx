import React from 'react'

const USSDOption = () => {
  return (
    <div>

      <p className=' font-semibold text-xl'>SELECT USSD CODE PROVIDER</p>

      <div className=' mt-10 '>
        <select className=' p-5 w-full rounded-[10px] border   '
          // value={selectedUSSDOption}
          // onChange={e => setSelectedUSSDOption(e.target.value)}
        >
          <option value="">Seleck a USSD code</option>
          <option value="access">Access 901</option>
          <option value="ecobank">Ecobank 326</option>
          <option value="uba">UBA 909</option>
        </select>      </div>
    </div>
  )
}

export default USSDOption