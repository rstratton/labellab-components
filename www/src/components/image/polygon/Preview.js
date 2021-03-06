import React, { Component } from 'react';
import Labellab from "labellab-components"

const labels = [
  {
    "name": "body",
    "state":[{"x":44.49999999999999,"y":295.2},{"x":51.099999999999994,"y":285.59999999999997},{"x":37.89999999999999,"y":237.6},{"x":52.89999999999999,"y":156.6},{"x":57.099999999999994,"y":100.8},{"x":73.89999999999999,"y":65.39999999999999},{"x":100.89999999999999,"y":12.6},{"x":100.29999999999998,"y":36},{"x":85.89999999999999,"y":67.8},{"x":75.69999999999999,"y":97.8},{"x":85.3,"y":82.8},{"x":96.1,"y":81},{"x":98.49999999999999,"y":94.8},{"x":94.89999999999999,"y":105.6},{"x":102.69999999999999,"y":98.39999999999999},{"x":105.1,"y":83.39999999999999},{"x":112.89999999999999,"y":71.39999999999999},{"x":117.69999999999999,"y":35.4},{"x":124.29999999999998,"y":30},{"x":126.1,"y":19.8},{"x":126.1,"y":62.4},{"x":114.69999999999999,"y":106.8},{"x":100.29999999999998,"y":135.6},{"x":96.1,"y":154.2},{"x":97.89999999999999,"y":177.6},{"x":103.89999999999999,"y":210},{"x":105.1,"y":234.6},{"x":110.49999999999999,"y":260.4},{"x":111.69999999999999,"y":280.2},{"x":111.1,"y":295.2},{"x":98.49999999999999,"y":297.59999999999997},{"x":103.29999999999998,"y":278.4},{"x":94.89999999999999,"y":237.6},{"x":79.89999999999999,"y":199.79999999999998},{"x":72.1,"y":198},{"x":54.69999999999999,"y":233.39999999999998},{"x":58.29999999999999,"y":277.8},{"x":64.89999999999999,"y":285},{"x":57.099999999999994,"y":297}],"type":"PolygonAnnotation","options":{"dimensions":{"width":200,"height":300}}
  }
]

class Preview extends Component {

  render() {
    return <div className="card">
      <div className="card-header">
        <h4 className="text-center">{"<Labellab.Image.Preview>"}</h4>
      </div>
      <div className="card-body">
        <div
          style={{margin: "0 auto", width: "400px"}}
        >
          <Labellab.Image.Preview
            file={{url: "http://www.nba.com/media/history/chamberlain_reb_200.jpg"}}
            hideLabels={false}
            size={400}
            labels={labels}
          />
        </div>
        <div 
          style={{marginTop: "15px", marginBottom: "10px"}}
          className="col-12 text-center">Annotated image</div>
      </div>
    </div>
  }

}

export default Preview
