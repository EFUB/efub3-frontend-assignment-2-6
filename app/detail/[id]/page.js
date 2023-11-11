'use client';

import '../../globals.css';
import WishDetail from '../../components/WishDetail';
import { useParams } from 'next/navigation';

export default function Detail() {
  const id = useParams();
  return (
    <div>
      <h1>WISHLIST</h1>
      <WishDetail itemId={id} />
    </div>
  );
}
