import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { increasePizzaQuantity, decreasePizzaQuantity } from './cartSlice';
import DeleteItem from './DeleteItem';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increasePizzaQuantity(pizzaId));
  }

  function handleDecrease() {
    dispatch(decreasePizzaQuantity(pizzaId));
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-3 ">
          <Button type="round" onClick={handleDecrease}>
            -
          </Button>
          <p>{quantity}</p>
          <Button type="round" onClick={handleIncrease}>
            +
          </Button>
        </div>
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
