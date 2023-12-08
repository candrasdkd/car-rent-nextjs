import { CustomFilterProps } from '@/types'
import React from 'react'

const CustomFilter = ({ title }: CustomFilterProps) => {
    return (
        <div>
            <p>FILTER {title}</p>
        </div>
    )
}

export default CustomFilter
