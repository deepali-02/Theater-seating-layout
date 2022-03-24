import { layout } from "../../Data/layout";
import { groups } from "../../Data/group";

export default function MainHall() {
  console.log("Layout", layout);
  return <>
  <ul class="showcase">
        <li>
          <div class="rank1"></div>
          <small>Rank 1</small>
        </li>
        <li>
          <div class="rank2"></div>
          <small>Rank 2</small>
        </li>
        <li>
          <div class="rank3"></div>
          <small>Rank 3</small>
        </li>
      </ul>
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
  </>;
}
