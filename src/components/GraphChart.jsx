import * as echarts from 'echarts/core';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { GridComponent ,LegendComponent , DatasetComponent ,TitleComponent ,TooltipComponent} from 'echarts/components';
import { LineChart , BarChart , PieChart} from 'echarts/charts';
import { UniversalTransition ,LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

function GraphChart({option , type}){
echarts.use(
    [GridComponent, LineChart, BarChart ,PieChart, ,CanvasRenderer, LabelLayout ,TooltipComponent
    ,LegendComponent,DatasetComponent , TitleComponent ,
    UniversalTransition, DatasetComponent]
);
return(
<ReactEChartsCore
  echarts={echarts}
  option={option}
  notMerge={true}
  lazyUpdate={true}
  type={option && option.series.type }
/>
)
}
export default GraphChart