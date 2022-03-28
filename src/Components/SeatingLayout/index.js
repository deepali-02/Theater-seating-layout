import { layout } from "../../Data/layout";
import { groups } from "../../Data/group";
import MainHall from "../MainHall";
import FirstBalcony from "../FirstBalcony";

export default function SeatingLayout() {
  const groupSeats = [];

  groups.forEach((group, groupIndex) => {
    group.seats.forEach((seat) => {
      groupSeats.push({ ...seat, group: groupIndex + 1 });
    });
  });

  // console.log("groups seats", groupSeats);

  const groupObject = {};

  groupSeats.forEach((groupSeat) => {
    const { section, row, seat, group } = groupSeat;

    if (!groupObject[section]) groupObject[section] = {};

    if (!groupObject[section][row]) groupObject[section][row] = {};

    groupObject[section][row][seat] = group;
  });

  // console.log("group obj:", groupObject);

  const layoutWithGroups = layout.sections.map((section) => {
    return section.rows.map((row) => {
      return row.seats.map((seat) => {
        if (
          groupObject[section.name] &&
          groupObject[section.name][row.row] &&
          groupObject[section.name][row.row][seat.seat]
        ) {
          return {
            ...seat,
            group: groupObject[section.name][row.row][seat.seat],
          };
        } else {
          return seat;
        }
      });
    });
  });

  // console.log("layoutWithGroups", layoutWithGroups);

  return (
    <div>
      <MainHall seatingLayout={layoutWithGroups} />
      <FirstBalcony seatingLayout={layoutWithGroups} />
    </div>
  );
}
