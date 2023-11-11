import './globals.css';
import WishList from './components/WishList';

export default function Home() {
  return (
    <div>
      <h1>WISHLIST</h1>
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <WishList />
      </p>
    </div>
  );
}
