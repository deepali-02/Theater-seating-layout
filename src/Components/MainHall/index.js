export default function MainHall({ seatingLayout }) {
  // console.log("in main hall", seatingLayout);

  return (
    <>
      <div className="scontainer">
      <div><h3>Main Hall</h3></div>
        {seatingLayout.map((section, i) => {
          return (
            i === 0 &&
            section.map((row) => {
              return (
                <div className="row">
                  {row.map((seat) => {
                    return (
                      <div className={seat.rank}>
                        <div className="seat">
                          {seat.group !== undefined
                            ? `${seat.seat} [g${seat.group}]`
                            : `${seat.seat}`}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })
          );
        })}
      </div>
    </>
  );
}
