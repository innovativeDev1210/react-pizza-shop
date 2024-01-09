import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addPizza, getPizzaById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const pizzaInCart = useSelector(getPizzaById(id));

  function handleAddPizza() {
    dispatch(
      addPizza({
        pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice * 1,
      }),
    );
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && (
            <div className="flex gap-3">
              {/*Conditionally render DeleteItem it pizza already exist in cart */}

              {pizzaInCart && (
                <div className="flex items-center gap-3">
                  <DeleteItem id={id} />
                  <span>{pizzaInCart.quantity}</span>
                </div>
              )}

              <Button type="small" onClick={handleAddPizza}>
                Add
              </Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
