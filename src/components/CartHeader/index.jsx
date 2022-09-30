import React from 'react'
import { Header, HeaderItem } from './styled'

export default function CartHeader() {
    return (
        <Header>
            <HeaderItem>наименование</HeaderItem>
            <p>количество</p>
            <p>стоимость</p>
        </Header>
    )
}
