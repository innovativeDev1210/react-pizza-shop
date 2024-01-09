// Test ID: IIDSAT

import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import OrderItem from './OrderItem';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

  const orderData = useLoaderData();
  const deliveryIn = calcMinutesLeft(orderData.estimatedDelivery);

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher],
  );

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{orderData.id} status</h2>

        <div className="space-x-2">
          {orderData.priority && (
            <span className="rounded-full bg-red-500 px-3 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 text-sm font-semibold uppercase tracking-wide text-green-50">
            {orderData.status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(
                orderData.estimatedDelivery,
              )} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(orderData.estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-200 border-b border-t">
        {orderData.cart.map((pizza) => (
          <OrderItem
            item={pizza}
            key={pizza.pizzaId}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={
              fetcher?.data?.find((item) => item.id === pizza.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>
      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderData.orderPrice)}
        </p>
        {orderData.priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(orderData.priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery:{' '}
          {formatCurrency(orderData.orderPrice + orderData.priorityPrice)}
        </p>
      </div>
      {!orderData.priority && <UpdateOrder order={orderData} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
