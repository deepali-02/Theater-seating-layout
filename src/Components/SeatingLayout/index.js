import { layout } from "../../Data/layout";
import { groups } from "../../Data/group";

export default function SeatingLayout() {
  const newLayoutSections = layout.sections.reduce((acc, section) => {
    return {
      ...acc,
      [section.name]: section.rows.map((r) => r.seats),
    };
  }, {});

  const newLayout={ranks:layout.ranks, sections:newLayoutSections}

  console.log("New Layout",newLayout)

  return <div></div>;
}
