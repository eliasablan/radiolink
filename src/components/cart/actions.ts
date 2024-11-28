'use server';

import { TAGS } from '@/lib/constants';
import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCart,
} from '@/lib/shopify';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export async function addItem(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  selectedVariantId: string | undefined
) {
  let cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart.id;
    cookies().set('cartId', cartId);
  }

  if (!selectedVariantId) {
    return 'Missing product variant ID';
  }

  try {
    await addToCart(cartId, [
      { merchandiseId: selectedVariantId, quantity: 1 },
    ]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return 'Error adding item to cart';
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function removeItem(prevState: any, lineId: string) {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  try {
    await removeFromCart(cartId, [lineId]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return 'Error removing item from cart';
  }
}

export async function updateItemQuantity(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  payload: {
    lineId: string;
    variantId: string;
    quantity: number;
  }
) {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  const { lineId, variantId, quantity } = payload;

  try {
    if (quantity === 0) {
      await removeFromCart(cartId, [lineId]);
      revalidateTag(TAGS.cart);
      return;
    }

    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
      },
    ]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return 'Error updating item quantity';
  }
}
