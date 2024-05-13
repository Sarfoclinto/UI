import React, { useState } from "react";
import Areas from "./Areas";

function Main() {
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      <main>
        <h4>Please enter the following information</h4>

        <div className="area">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="one">
              <div>
                <label htmlFor="education">
                  Closest match to your industry
                </label>
                <select name="educatiom" id="education" className="select">
                  <option value="education">Education</option>
                </select>
              </div>
              <div>
                <label htmlFor="employees">Total number of employess</label>
                <select name="employees" id="employees" className="select">
                  <option value="10-49">10 - 49</option>
                </select>
              </div>
            </div>

            <div className="two">
              <label htmlFor="country">
                Primary location where the solution will be used
              </label>
              <div>
                <select name="country" id="country" className="select">
                  <option value="asia">Asia</option>
                </select>
                <select name="" id="" className="select">
                  <option value="">USD</option>
                </select>
              </div>
            </div>

            <div className="three">
              <label> Select your functional area</label>
              <div className="buttons">
                <div className="four">
                  <Areas
                    name="Information Technology (IT)"
                    src="net"
                    disabled={true}
                  />
                  <Areas name="Operations" src="settings" disabled={false} />
                  <Areas name="HR" src="others" disabled={false} />
                  <Areas
                    name="Call/Contact Center"
                    src="call"
                    disabled={false}
                  />
                </div>

                <div className="others">
                  <Areas
                    name="Finance/Procument"
                    src="dollar"
                    disabled={true}
                  />
                  <Areas
                    name="Executive Leadership / Mgmt"
                    src="account"
                    disabled={true}
                  />
                  <Areas name="Other" src="more" disabled={true} />
                </div>
              </div>
            </div>

            <div className="last">
              <label>
                What solution(s) woould youlike to include in your analysis?
              </label>
              <div className="button-s">
                <Areas name="Communication & Collaboration" src="com" />
                <Areas name="Call/Contact Center" src="call" disabled={true} />
              </div>
            </div>
          </form>
        </div>

        
      </main>

      <button className="continue">
        <p>Continue</p>
        <img src="src/assets/right.png" alt="" />
      </button>
    </>
  );
}

export default Main;
