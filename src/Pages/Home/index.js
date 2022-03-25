import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="mt-5">
      <h1>Welcome to Theater Seating Layout</h1>
      <h3>Want to reserve seats for you?? </h3>
      <div className="sectionContainer">
        <label> Select a section:</label>
        <select>
          <option value="mainHall">Main Hall</option>
          <option value="1stBalcony">!st Balcony</option>
          <option value="loge">Loge</option>
        </select>
        <div>
          <label>Phone No. </label>
          <input
            type="tel"
            id="myform_phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            placeholder="Enter Phone Number"

          />
        </div>
        <div>
          <label>Number of seats:</label>
          <input
            type="number"
            placeholder="How many seats you want to reserve?"
            min="1"
          />
        </div>
      </div>

      <Link to="/mainHall">
        <Button>Reserve Seats!</Button>
      </Link>
    </Container>
  );
}
