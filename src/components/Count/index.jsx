import React from 'react';
import { Button } from '../Buttons/styled';
import { CountWrapper, CountInput, CountControls } from './styled';

export default function Count({ count, increase, decrease, changeValue, id }) {
    return (
        <CountWrapper>
            <CountInput
                onChange={(e) => { changeValue(id, +e.target.value) }}
                type='number' value={count} />
            <CountControls>
                <Button type='button' onClick={() => { increase(id) }}>
                    <img src='./img/icons/icon-up.svg' alt='Increase' />
                </Button>
                <Button type='button' onClick={() => { decrease(id) }}>
                    <img src='./img/icons/icon-down.svg' alt='Decrease' />
                </Button>
            </CountControls>

        </CountWrapper>
    )
}
