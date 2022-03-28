import { layout } from "../../Data/layout";

export default function MainHall({ seatingLayout }) {
  console.log("Layout", layout);

  console.log("in main hall", seatingLayout);

  return (
    <>
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

      {/* {groups.map((group) => {
        return group.seats.map((seat) => {
          return seatsTaken = [...seatsTaken, { s: seat.seat, r: seat.row }];
        });
      })}

      {console.log("seats taken=", seatsTaken)} */}

      <div className="scontainer">
        <div className="screen mt-5"></div>
      </div>
      {/*  <div className="scontainer">
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
      </div> */}

      <div className="scontainer">
        <div>
          {Object.keys(seatingLayout.sections).map((section) => {
            return seatingLayout.sections[section].map((row) => {
              return (
                <div className="row">
                  {section === "main hall" &&
                    Object.keys(row).map((seat) => {
                      return (
                        <div className={row[seat].rank}>
                          <div className="seat">
                            {row[seat].group === undefined
                              ? row[seat].seat
                              : `${row[seat].seat}[${row[seat].group}]`}
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            });
          })}
        </div>
      </div>
    </>
  );
}
