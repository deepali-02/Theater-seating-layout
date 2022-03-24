import { layout } from "../../Data/layout";
import { groups } from "../../Data/group";

export default function MainHall() {
  console.log("Layout", layout);
  return <>
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
  </>;
}
