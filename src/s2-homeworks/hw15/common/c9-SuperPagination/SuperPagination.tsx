import React, {ChangeEvent, useState} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage =  Math.ceil(totalCount / itemsCountForPage);// пишет студент // вычислить количество страниц
    const [maxItemsCount, setMaxItemsCount] = useState<number>(itemsCountForPage)
    const onChangeCallback = (_: any , page: number) => {
        onChange(page, maxItemsCount)
    }

    const onChangeSelect = (id: number) => {
     setMaxItemsCount(id)

    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={maxItemsCount}
                options={[
                    {id: 4, value: '4'},
                    {id: 7, value: '7'},
                    {id: 10, value: '10'},
                ]}
                onChangeOption={onChangeSelect}

            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
