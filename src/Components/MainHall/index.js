import { layout } from "../../Data/layout";
import { groups } from "../../Data/group";
import SeatingLayout from "../SeatingLayout";

export default function MainHall() {
  console.log("Layout", layout);
  let seatsTaken = [
    {
      s: 0,
      r: 0,
    },
  ];

  return (
    <>
    <SeatingLayout/>
      <ul class="showcase">
        <li>
          <div class="r1"></div>
          <small>Rank 1</small>
        </li>
        <li>
          <div class="r2"></div>
          <small>Rank 2</small>
        </li>
        <li>
          <div class="r3"></div>
          <small>Rank 3</small>
        </li>
      </ul>
      
      {/* {groups.map((group) => {
        return group.seats.map((seat) => {
          return seatsTaken = [...seatsTaken, { s: seat.seat, r: seat.row }];
        });
      })}

      {console.log("seats taken=", seatsTaken)} */}


      <div className="scontainer">
        <div className="screen mt-5"></div>
      </div>
      <div className="scontainer">
        {layout.sections.map((section) => {
          if (section.name === "main hall") {
            return section.rows.map((row) => {
              return (
                <>
                  <div className="row">
                    {row.seats.map((seat) => {
                      return (
                        <div className={seat.rank}>
                          <div className="seat">{seat.seat}</div>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            });
          }
        })}
      </div>

      
      
    </>
  );
}
