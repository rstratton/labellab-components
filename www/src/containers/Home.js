import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageClassification from "../components/image/Classification"

const contents = [
  {
    type: "Image",
    items: [
      "Labellab.Image.SquareBox",
      "Labellab.Image.Polygon",
      "Labellab.Image.Classification",
    ]
  },
  {
    type: "Text",
    items: [
      "Labellab.Text.Classification",
    ]
  },
  {
    type: "Common",
    items: [
      "Labellab.Common.Classifier",
      "Labellab.Common.MultiClassifier",
      "Labellab.Common.Preview",
    ]
  },
]
const blue = "#007bff"
class Home extends Component {
  render() {
    return <div>
      <nav className="navbar navbar-dark" style={{backgroundColor: blue}}>
        <a  className="navbar-brand" href="/">
          <img
            alt="labellab-logo"
            style={{width: "40px", height: "40px"}}
            src="https://d1d09e79yja1m6.cloudfront.net/annotation-web/build/static/media/logo-over-dark.72869e75.png"/>
          <span style={{marginLeft: "10px", verticalAlign: "middle"}}>
            Labellab Developer Components
          </span>
        </a>
      </nav>
      <div className="container-fluid" style={{borderLeft: "1px solid lightgrey", borderRight: "1px solid lightgrey"}}>
        <div style={{display: "flex", flexDirection: "row", paddingLeft: "15px", paddingRight: "15px"}}>
          <div style={{paddingRight: 0, width: "300px"}}>
            <div style={{borderRight: "1px solid lightgrey", height: "100%", paddingTop: "15px"}}>
              <h4>Components</h4>
              {
                contents.map((content, idx) => {
                  return <div key={idx}>
                    <div>
                      {content.type}
                    </div>
                    {
                      content.items.map((comp) => {
                        return <div className="btn btn-link" key={comp}>
                          {comp}
                        </div>
                      })
                    }
                  </div>
                })
              }
            </div>
          </div>
          <div className="container-fluid" style={{marginLeft: "15px", paddingTop: "15px", flex: 1}}>
            <ImageClassification/>
          </div>
        </div>
      </div>
    </div>
  }

}

const mapStateToProps = (state, props) => {
  return {}
}

export default connect(mapStateToProps, {
})(Home);
