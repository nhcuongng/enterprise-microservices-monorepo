export interface OrderItemDto {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
}

export interface OrderResponseDto {
  orderId: string;
  userId: string;
  items: OrderItemDto[];
  totalAmount: number;
  status: 'PENDING' | 'PAID' | 'SHIPPED' | 'CANCELLED';
  createdAt: string;
}