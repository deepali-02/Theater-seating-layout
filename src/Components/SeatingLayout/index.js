import { layout } from "../../Data/layout";
import { groups } from "../../Data/group";
import MainHall from "../MainHall";

export default function SeatingLayout() {
  const newLayoutSections = layout.sections.reduce((acc, section) => {
    return {
      ...acc,
      [section.name]: section.rows.map((r) => r.seats),
    };
  }, {});

  //   console.log("new sections", newLayoutSections);

  const newLayout = { ranks: layout.ranks, sections: newLayoutSections };

  //   console.log("New Layout", newLayout);

  const layoutWithSeating = { ...newLayout };

  //   groups.forEach((group, i) => {
  //     group.seats.forEach((seat) => {
  //       layoutWithSeating.sections[seat.section][parseInt(seat.row)-1][
  //         parseInt(seat.seat)-1
  //       ] = {
  //         ...newLayout.sections[seat.section][parseInt(seat.row)-1][parseInt(seat.seat)-1],
  //         group: `g${i + 1}`,
  //       };
  //     });
  //   });

  //   console.log("Layout with seating arrengment", layoutWithSeating)

  groups.map((group, i) => {
    return group.seats.map((seat) => {
      layoutWithSeating.sections[seat.section][parseInt(seat.row) - 1][
        parseInt(seat.seat) - 1
      ] = {
        ...newLayout.sections[seat.section][parseInt(seat.row) - 1][
          parseInt(seat.seat) - 1
        ],
        group: `g${i + 1}`,
      };
    });
  });
  console.log("Layout with seating arrengment", layoutWithSeating);

  // const index= groups.findIndex(obj=>{return obj.id})

  // console.log("index",index)
  return (
    <div>
      <MainHall seatingLayout={layoutWithSeating} />
      
    </div>
  );
}
