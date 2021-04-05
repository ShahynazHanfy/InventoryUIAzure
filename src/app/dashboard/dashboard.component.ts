
import { Component, ViewChild ,OnInit} from "@angular/core";
import { SubGroupService } from "../../Shared/Services/sub-group.service";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke
} from "ng-apexcharts";
import { SubGroup } from "src/Shared/Models/SubGroup";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 LstSubGroups:SubGroup[]
 LstStringSubGroups:any
 lstNumbers:any
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private subService:SubGroupService) {

  
  }
  ngOnInit(): void {
    this.lstNumbers = [1,2,3]
    this.LstSubGroups=[]
    this.LstStringSubGroups = []
    this.subService.GetAllSubGroup().subscribe(e=>{
      this.LstSubGroups = e
      console.log(this.LstSubGroups)   
      this.LstSubGroups.forEach(element => {
      this.LstStringSubGroups.push(element.subGroupName)
      this.chartOptions = {
        series: this.lstNumbers,
        chart: {
          height: 350,
          type: "radialBar",
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
  
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: "#888",
                fontSize: "17px"
              },
              value: {
                formatter: function(val) {
                  return parseInt(val.toString(), 10).toString();
                },
                color: "#111",
                fontSize: "36px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Percent"]
      };
    });
    console.log("LstStringSubGroups",this.LstStringSubGroups)
    })
 
  }

}

