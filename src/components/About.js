import React from 'react'

const About = (props) => {
  return (
    <div className='container my-5 mx-5' style={props.mode==='dark'?{color:"white", backgroundColor:"#071633",padding:"50px", borderRadius:"20px",border:"2px solid white"}:{color:"black", backgroundColor:"beige", padding:"50px", borderRadius:"20px", border:"2px solid black"}}>
      <p>This is a Text Maker App build to help you manipulate your texts.Below are the user guide for the features of the app. The app is in build stage and hence it will have some extra added features in the future as well. 
      <br />
      <br />
       <strong><i>This App was build by Rishiraj Basu on 19th August,2022.</i></strong></p>
      <div className="accordion my-5" id="accordionExample">
        {/* 1 */}
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Feature #1
              </button>
            </h2>
          </div>

          <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Feature #2
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
           
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Feature #3
              </button>
            </h2>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
             
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Feature #4
              </button>
            </h2>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
            <div className="card-body">
             
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="card">
          <div className="card-header" id="headingFive">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Feature #5
              </button>
            </h2>
          </div>
          <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
            <div className="card-body">
             
            </div>
          </div>
        </div>
        {/* 6 */}
        <div className="card">
          <div className="card-header" id="headingSix">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Feature #6
              </button>
            </h2>
          </div>
          <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
            <div className="card-body">
         
            </div>
          </div>
        </div>
        {/* 7 */}
        <div className="card">
          <div className="card-header" id="headingSeven">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                Feature #7
              </button>
            </h2>
          </div>
          <div id="collapseSeven" className="collapse" aria-labelledby="headineSeven" data-parent="#accordionExample">
            <div className="card-body">
             
            </div>
          </div>
        </div>
        {/* 8 */}
        <div className="card">
          <div className="card-header" id="headingEight">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                Feature #8
              </button>
            </h2>
          </div>
          <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
            <div className="card-body">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
