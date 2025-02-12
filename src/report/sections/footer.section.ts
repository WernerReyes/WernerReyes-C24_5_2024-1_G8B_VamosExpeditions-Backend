import { DateFormatter } from "@/core/utils";
import { Content, ContextPageSize } from "pdfmake/interfaces";

const footerText: Content = {
  stack: [],
};

export const footerSection = (
  currentPage: number,
  pageCount: number,
  pageSize: ContextPageSize
): Content => {
  return {
    layout: "noBorders",
    table: {
      widths: ["*", "*"],
      body: [
        [
          {
            text: "",
            margin: [20, 0, 0, 0],
            stack: [
              {
                text: `Page ${currentPage} of ${pageCount}`,
                alignment: "left",
                style: "footerText",
              },
              {
                text: "Prepared By: Annelies Hamerlinck",
                alignment: "left",
                style: "footerText",
              },
              {
                text: DateFormatter.getDDMMMMYYYY(new Date()),
                alignment: "left",
                style: "footerText",
              },
            ],
          },
          {
            text: "",
            margin: [0, 0, 20, 0],
            stack: [
              {
                text: `Page ${currentPage} of ${pageCount}`,
                alignment: "right",
                style: "footerText",
              },
              {
                text: "Vamos Expeditions",
                alignment: "right",
                style: "footerText",
              },
              {
                text: "https://vamosexpeditions.com/",
                link: "https://vamosexpeditions.com/",
                alignment: "right",
                style: "footerText",
              },
            ],
          },
        ],
      ],
    },

    style: {
      fillColor: "#01A3BB",
      fontSize: 10,
      color: "white",
      italics: true,
    },
  };
};
