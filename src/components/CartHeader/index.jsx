import React from 'react'
import { Header, HeaderItem } from './styled'

export default function CartHeader() {
    return (
        <Header>
            <HeaderItem>наименование</HeaderItem>
            <div>количество</div>
            <div>стоимость</div>
        </Header>
    )
}
