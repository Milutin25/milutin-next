'use client'

import { ChangeEvent, CSSProperties } from "react"

interface InputProps {
    type: string, 
    placeholder: string, 
    name: string,
    className: string, 
    value: string | number, 
    onChange: (e: ChangeEvent<HTMLInputElement>) => void, 
    style: CSSProperties
}

export default function Input ({type, placeholder, name, className, value, onChange, style}: InputProps) {
    return (
        <input name={name} placeholder={placeholder} className={className} value={value} onChange={onChange} style={style}/>
    )
}