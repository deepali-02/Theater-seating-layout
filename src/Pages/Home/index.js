import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Theater Seating Layout</h1>

      <Link to="/seatingLayout">
        <button>Show Seats!</button>
      </Link>
    </div>
  );
}
