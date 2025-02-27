import React from 'react'
import downIcon from '../../icons/down-arrow-svgrepo-com.svg'
import upIcon from '../../icons/up-arrow-svgrepo-com.svg'
import noneIcon from '../../icons/equal-sign-svgrepo-com.svg'

// добавить в проект иконки и импортировать


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    switch (sort) {
        case '':
            return down
        case down:
            return up
        case up:
            return ''
        default:
            return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                style={{width:'20px',height:'20px'}}
            />
        </span>
    )
}

export default SuperSort
