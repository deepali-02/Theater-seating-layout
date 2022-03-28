import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className="container">
      <h1>Welcome to Theater Seating Layout</h1>
</div>
<div>
      <Link to="/theater">
        <button class="button button1">Show Seats!</button>
      </Link>
    </div>
    </>
  );
}
