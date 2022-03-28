import MainHall from "../../Components/MainHall";
import SeatingLayout from "../../Components/SeatingLayout";

export default function Theater() {
  return (
    <>
      <div>
        <ul className="showcase">
          <li>
            <div className="r1"></div>
            <small>Rank 1</small>
          </li>
          <li>
            <div className="r2"></div>
            <small>Rank 2</small>
          </li>
          <li>
            <div className="r3"></div>
            <small>Rank 3</small>
          </li>
        </ul>
      </div>
      <div className="scontainer">
        <div className="screen mt-5"></div>
      </div>

      <SeatingLayout />
    </>
  );
}
