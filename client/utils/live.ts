import { use, init, ComposeOption, EChartsType } from "echarts/core";
import {
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption,
  TitleComponentOption,
  TitleComponent,
} from "echarts/components";
import { PieChart, PieSeriesOption } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

type EChartsOption = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | PieSeriesOption
  | LegendComponentOption
>;

export function setLiveChar(
  dom: HTMLElement,
  title: string,
  names: string[],
  score: number[]
) {
  use([
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout,
  ]);
  const myChart = init(dom);
  const option: EChartsOption = {
    title: {
      text: title,
      left: "center",
      top: "center",
      textStyle: {
        fontWeight: "normal",
        fontSize: 12,
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "center",
      itemWidth: 14,
    },
    series: [
      {
        type: "pie",
        radius: ["46%", "60%"],
        label: {
          show: true,
          formatter: "{c}",
          position: "outside",
          width: 50
        },
        labelLine: { show: false },
        labelLayout: {
          verticalAlign: "middle",
          y: "center",
          x: "center",
          fontSize: 16
        },
        data: [
          {
            value: score[0],
            name: names[0],
            itemStyle: {
              color: "#548FEB",
              borderWidth: 2,
              borderColor: "#fff",
            },
            label: { padding: [0, 0, 0, 78] }
          },
          {
            value: score[1],
            name: names[1],
            itemStyle: {
              color: "#E56262",
              borderWidth: 2,
              borderColor: "#fff",
            },
            label: { padding: [0, 78, 0, 0] }
          },
        ],
      },
    ],
  };
  option && myChart.setOption(option);
  return myChart;
}

export function updateLiveChar(chart: EChartsType, score: number[]) {
  if (!chart) {
    return
  }
  const option = chart.getOption() as EChartsOption;
  option.series[0].data[0].value = score[0];
  option.series[0].data[1].value = score[1];
  chart.setOption(option);
}

