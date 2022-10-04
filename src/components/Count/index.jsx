import React from 'react';
import { Button } from '../Buttons/styled';
import { CountWrapper, CountInput } from './styled';

export default function Count({ count, increase, decrease, changeValue, id }) {
    return (
        <CountWrapper>
            <Button type='button' onClick={() => { decrease(id) }}>
                <img src='./img/icons/icon-minus.svg' alt='Decrease' />
            </Button>
            <CountInput
                onChange={(e) => { changeValue(id, +e.target.value) }}
                type='number' value={count} />
            <Button type='button' onClick={() => { increase(id) }}>
                <img src='./img/icons/icon-plus.svg' alt='Increase' />
            </Button>
        </CountWrapper>
    )
}
