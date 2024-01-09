import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deletePizza } from './cartSlice';

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deletePizza(id));
  }

  return (
    <div className="self-end">
      <Button onClick={handleDelete} type="small">
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
