import { DeleteButton } from './styled';

export default function ButtonDelete({ removeProduct, id }) {
    return (
        <DeleteButton type='button' onClick={() => { removeProduct(id) }}>
            <img src='./img/icons/icon-delete.svg' alt='Delete' />
        </DeleteButton>
    );
};

