import { Link } from 'react-router-dom';
import { getTotalCartQuantity, getTotalCartPrice } from './cartSlice';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalPizzas = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-4 py-4 uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 md:text-base">
        <span>{totalPizzas} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
