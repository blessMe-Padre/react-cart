import { Button } from './styled';

export default function ButtonDelete({ removeProduct, id }) {
    return (
        <Button type='button' onClick={() => { removeProduct(id) }}>
            <img src='img/icons/cross.svg' alt='Delete' />
        </Button>
    );
};

