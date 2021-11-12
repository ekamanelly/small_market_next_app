import Image from "next/image";
import React from "react";
import SignUp from "../public/media/SignUp.png";

function GettingStarted() {
  return (
    <div>
      <div className="getStarted">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="orgSteps">
                Get started in <span>3 easy steps</span>
              </div>
              <div className="steps">
                <div>1</div>Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Libero a debitis suscipit expedita voluptates, optio
                laboriosam inventore labore asperiores error.
              </div>
              <div className="steps">
                <div>2</div>Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Libero a debitis suscipit expedita voluptates, optio
                laboriosam inventore labore asperiores error.
              </div>
              <div className="steps">
                <div>3</div>Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Libero a debitis suscipit expedita voluptates, optio
                laboriosam inventore labore asperiores error.
              </div>
            </div>
            <div className="col-md-6">
              <div className="vidWrap">
                <div className="img-fluid">
                  <Image
                    src={SignUp}
                    alt="photo"
                    //   className="burnout"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;