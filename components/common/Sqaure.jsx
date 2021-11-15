import React, { useEffect, useState } from 'react'

const Sqaure = ({ value, onClick }) => {
    useEffect(() => { }, [])
    const symbol = value ? "" : ""
    return (
        <button className={`h-24 w-24 border-2`} onClick={onClick}>
            {value}
        </button>
    )
}

export default Sqaure
