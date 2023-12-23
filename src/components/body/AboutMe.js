import React, { useState, useEffect } from 'react';
import * as bootstrap from 'bootstrap';

import './aboutme.css';

export default function AboutMe() {

  const [activeSection, setActiveSection] = useState("education");

  const [collapses, setCollapses] = useState({
    collapse1: true,
    collapse2: true,
    collapse3: true,
    collapse4: true,
    collapse5: true,
    collapse6: true,
    collapse7: true
  });


  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    return () => {
      tooltipList.forEach(tooltip => tooltip.dispose());
    };
  }, [activeSection]);


  /*
  return (
    <div className='mb-5 pb-5' id="about-me">
      <div className='fs-1 text-center title pt-5 mt-5 pb-3 fw-semibold text-primary'>
        ABOUT ME
      </div>
      <div className='d-flex align-items-center pt-3 flex-column'>
        <div className='description'>
          Some tet about me blalblab lalb lsbl balksdlakf lkddddd asdkfn laskdnf ioaewlfkn alweknf lasdn flansidfn alksdnf lsdkanfl sn ldf
        </div>
        <div className='d-flex justify-content-evenly flex-row pt-5 pb-3 width1'>
          <div
            className={`fs-5 pointer ${activeSection === 'education' ? 'active text-primary' : ''}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </div>
          <div
            className={`fs-5 pointer ${activeSection === 'skills' ? 'active text-primary' : ''}`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </div>
          <div
            className={`fs-5 pointer ${activeSection === 'experience' ? 'active text-primary' : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </div>
        </div>
        {activeSection === 'education' && (
          <div className='width2'>
            <div className="list-group">
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Masters`s Degree in Computer Science
                </div>
                <div>
                  Faculty of Science of the University of Porto ( 2021 - 2023 )
                </div>
                <div className='collapse mt-2' id="collapse1">
                  <div className='mb-2'>
                    GPA: 16/20
                  </div>
                  <div className='mb-2'>
                    Master Thesis: Improving Teachers User Experience in a Virtual Learning Environment ( Grade: 17/20 )
                  </div>
                  <div>
                    Mobile Computing
                  </div>
                  <div>
                    Managment and Entrepreneurship
                  </div>
                  <div>
                    Advanced Topics in Databases
                  </div>
                  <div>
                    Embedded Systems
                  </div>
                  <div>
                    Data Mining 2
                  </div>
                  <div>
                    Bioinformatics
                  </div>
                  <div>
                    Big Data and Cloud Computing
                  </div>
                  <div>
                    Information Theory
                  </div>
                  <div>
                    Processing of Strcutured Documents
                  </div>
                  <div>
                    Software Project Managment
                  </div>
                  <div>
                    Algorithmus
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded={!collapses.collapse1}
                    aria-controls="collapse1"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse1: !prevState.collapse1 }))}
                  >
                    {collapses.collapse1 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Transferable Skills - Public Speaking
                </div>
                <div>
                  Faculty of Science of the University of Porto ( February 2023 )
                </div>
                <div className='collapse mt-2' id="collapse2">
                  <div className='mb-2'>
                    Grade: 18/20
                  </div>
                  <div>
                    Organize a Presentation 
                  </div>
                  <div>
                    Visual aids
                  </div>
                  <div>
                    Voice and language
                  </div>
                  <div>
                    Body language and gestures
                  </div>
                  <div>
                    Take control of the situation
                  </div>
                  <div>
                    Handeling the question and answer sessions
                  </div>
                  <div>
                    Inspire your audience
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded={!collapses.collapse2}
                    aria-controls="collapse2"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse2: !prevState.collapse2 }))}
                  >
                    {collapses.collapse2 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Bachelor`s Degree in Mathematics ( Complementary Formation in Informatics)
                </div>
                <div>
                  Faculty of Science of the University of Porto ( 2018 - 2021 )
                </div>
                <div className='collapse mt-2' id="collapse3">
                  <div className='mb-2'>
                    GPA: 15/20
                  </div>
                  <div>
                    Human-Machine Interfaces
                  </div>
                  <div>
                    Simulation and Stochastic Processes
                  </div>
                  <div>
                    Software Architecture
                  </div>
                  <div>
                    Managment
                  </div>
                  <div>
                    Optimization and Applications
                  </div>
                  <div>
                    Complex Analysis
                  </div>
                  <div>
                    Programming 2
                  </div>
                  <div>
                    Numerical Equations
                  </div>
                  <div>
                    Group Theory
                  </div>
                  <div>
                    Web Technologies
                  </div>
                  <div>
                    Probability and Statistics
                  </div>
                  <div>
                    Metabolism and Nutrition
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded={!collapses.collapse3}
                    aria-controls="collapse"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse3: !prevState.collapse3 }))}
                  >
                    {collapses.collapse3 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Fitness Trainer B license
                </div>
                <div>
                  OTL - Online Trainer Lizenz ( 2018 )
                </div>
                <div className='collapse mt-2' id="collapse4">
                  <div>
                    Structure and Function of the Cell
                  </div>
                  <div>
                    Classification and Function of Tissue Types
                  </div>
                  <div>
                    Cardiovascular System
                  </div>
                  <div>
                    Passive and Active Movement Apparatus
                  </div>
                  <div>
                    Human Anatomy
                  </div>
                  <div>
                    Training Theory
                  </div>
                  <div>
                    Motor Properties
                  </div>
                  <div>
                    Training Planning in Fitness and Weightlifting
                  </div>
                  <div>
                    Nutrition Science and Planning
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded={!collapses.collapse4}
                    aria-controls="collpase4"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse4: !prevState.collapse4 }))}
                  >
                    {collapses.collapse4 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'skills' && (
          <div className='width2'>
            <div className="list-group">
              <div className='list-group-item border rounded-0 mb-1 mt-2 bg-secondary py-2 px-3 d-flex align-items-center'>
                <div className='flex-grow-0'>
                  Fluent Languages:
                </div>
                <div className='d-flex justify-content-evenly flex-grow-1'>
                  <img src="images/germany.png" className='img-fluid flag' data-bs-toggle="tooltip" data-bs-title="German" />
                  <img src="images/portugal.png" className='img-fluid flag' data-bs-toggle="tooltip" data-bs-title="Portugues" />
                  <img src="images/states.png" className='img-fluid flag' data-bs-toggle="tooltip" data-bs-title="English" />
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-1 bg-secondary p-2'>
                <div className='bg-primary text-white p-1 d-flex justify-content-between jsBar'>
                  <div>
                    JS - VueJS, Strapi
                  </div>
                  <div>
                    90%
                  </div>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-1 bg-secondary p-2'>
                <div className='bg-primary text-white p-1 d-flex justify-content-between reactBar'>
                  <div>
                    JS - React, Bootstrap
                  </div>
                  <div>
                    70%
                  </div>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-1 bg-secondary p-2'>
                <div className='bg-primary text-white p-1 d-flex justify-content-between pythonBar'>
                  <div>
                    Python
                  </div>
                  <div>
                    70%
                  </div>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-1 bg-secondary p-2'>
                <div className='bg-primary text-white p-1 d-flex justify-content-between postgresBar'>
                  <div>
                    SQL - Postgres
                  </div>
                  <div>
                    60%
                  </div>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-1 bg-secondary p-2'>
                <div className='bg-primary text-white p-1 d-flex justify-content-between adobeBar'>
                  <div>
                    Adobe XD
                  </div>
                  <div>
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'experience' && (
          <div className='width2'>
            <div className="list-group">
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  FGPE++ Gamified Programming Learning at Scale - Research Grant
                </div>
                <div>
                  Inesc Tec ( Mai 2022 - Mai 2023 )
                </div>
                <div className='collapse mt-2' id="collapse5">
                  <div className='mb-2'>
                    GPA: 16/20
                  </div>
                  <div className='mb-2'>
                    Master Thesis: Improving Teachers User Experience in a Virtual Learning Environment ( Grade: 17/20 )
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded={!collapses.collapse5}
                    aria-controls="collapse5"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse5: !prevState.collapse5 }))}
                  >
                    {collapses.collapse5 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Safe Cities - Research Grant
                </div>
                <div>
                  Faculty Science, University of Porto & Bosch ( March 2022 - Mai 2022 )
                </div>
                <div className='collapse mt-2' id="collapse6">
                  <div className='mb-2'>
                    GPA: 16/20
                  </div>
                  <div className='mb-2'>
                    Master Thesis: Improving Teachers User Experience in a Virtual Learning Environment ( Grade: 17/20 )
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded={!collapses.collapse6}
                    aria-controls="collapse6"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse6: !prevState.collapse6 }))}
                  >
                    {collapses.collapse6 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
              <div className='list-group-item border rounded-0 my-2 bg-secondary p-3'>
                <div className='fw-bolder fs-5 mb-2'>
                  Holiday Jobs / Student Jobs
                </div>
                <div>
                  Fabric: SKF, ZF, Siemens AG, Joyson PlasTic GmbH
                </div>
                <div>
                  Construction: Bömmel Bau
                </div>
                <div>
                  Tutoring: Math, Physics, Informatics
                </div>
                <div className='collapse mt-2' id="collapse7">
                  <div className='mb-2'>
                    GPA: 16/20
                  </div>
                  <div className='mb-2'>
                    Master Thesis: Improving Teachers User Experience in a Virtual Learning Environment ( Grade: 17/20 )
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse7"
                    aria-expanded={!collapses.collapse7}
                    aria-controls="collapse7"
                    onClick={() => setCollapses(prevState => ({ ...prevState, collapse7: !prevState.collapse7 }))}
                  >
                    {collapses.collapse7 ? <div>Learn More <i class="bi bi-caret-down"></i></div> : <div>Show less <i class="bi bi-caret-up"></i></div>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )*/

  return (
    <div id="about-me" className='bg-secondary pb-5'>
      <div className='container p-5 text-white'>
        <div className='row mb-4'>
          <div className='col d-flex justify-content-center flex-column align-items-center fs-1 p-5'>
            About Me
            <div className='bg-primary headerLine mt-1'></div>
          </div>
        </div>
        <div className='row px-5'>
          <div className='col border me-4'>

          </div>
          <div className='col ms-4'>
            <div className='row'>
              <div className='col fs-4 fw-semibold'>
                Ricardo Andrade
              </div>
            </div>
            <div className='row'>
              <div className='col mb-3'>
                Data Scientist
              </div>
            </div>
            <div className='row'>
              <div className='col mb-3'>
                laksjdl fkajwlekf jalwkej flöakwej flkawje lfkajw elökfj alwökej lafwkje calwöcj öalkwej ölaiwölekaölweicj öalwlak askd jfliawej flkawjl ekcjawie jckjwane ckljawenkcu awekcl jwencl kawe nlkcne fwelkja wilöej öalwkejcl kaja lwöijc akfs lweakjfl awjeliacj lwöiej öicj2oeawökjnveöoawien ökacnöw eklnackjcniauwbe viubrüaoeihb poairhvp ioauprjna iewjnviuawebi evjllackjen acl i
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <button type="button" class="btn btn-primary">CV</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-5 py-5">
          <div className='col'>
            <div className='row'>
              <div className='col fs-2'>
                Education & Skills
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-5'>
                <div className='row'>
                  <div className='col bg-info border border-secondary position-relative pt-4 pb-3'>
                    <div className='mt-2 fw-semibold mb-1 pt-1'>
                      Masters Degree in Data Science
                    </div>
                    <div>
                      FCUP - Porto
                    </div>
                    <div className='position-absolute bg-primary text-black px-1 yearBox'>
                      2021 - 2023
                    </div>
                    <i class="bi bi-info-circle text-primary position-absolute infoBox"></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='col bg-info border border-secondary position-relative pt-4 pb-3'>
                    <div className='mt-2 fw-semibold mb-1 pt-1'>
                      Bachelors Degree in Mathematics
                    </div>
                    <div>
                      FCUP - Porto
                    </div>
                    <div className='position-absolute bg-primary text-black px-1 yearBox'>
                      2018 - 2021
                    </div>
                    <i class="bi bi-info-circle text-primary position-absolute infoBox"></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='col bg-info border border-secondary position-relative pt-4 pb-3'>
                    <div className='mt-2 fw-semibold mb-1 pt-1'>
                      Something
                    </div>
                    <div>
                      FCUP - Porto
                    </div>
                    <div className='position-absolute bg-primary text-black px-1 yearBox'>
                      2021 - 2023
                    </div>
                    <i class="bi bi-info-circle text-primary position-absolute infoBox"></i>
                  </div>
                </div>
              </div>
              <div className='col-7 ps-5'>
                <div className='fs-3 mb-1'>
                  My Skills
                </div>
                <div className='mb-3'>
                  alskdjf laksjdfl kaj welfkj wlkj ölakwe öclkanw eöcinalw öekncl öakwneöclk anwlekca öiwce öowaihr poiah vknövwnaew ölinvl öawkne lvöajwneö laksj dfliajwelfj alwökejc ölakwj elk
                </div>
                <div>
                  <div className='mb-2'>
                    <div className='fw-semibold'>
                      Python
                    </div>
                    <div class="progress bg-info mt-1 progressBar" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar w-75"></div>
                    </div>
                  </div>
                  <div className='mb-2'>
                    <div className='fw-semibold'>
                      Python
                    </div>
                    <div class="progress bg-info mt-1 progressBar" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar w-75"></div>
                    </div>
                  </div>
                  <div className='mb-2'>
                    <div className='fw-semibold'>
                      Python
                    </div>
                    <div class="progress bg-info mt-1 progressBar" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar w-75"></div>
                    </div>
                  </div>
                  <div className='mb-2 d-flex pt-3'>
                    <div className='fw-semibold'>
                      Languages:
                    </div>
                    <div className='d-flex justify-content-evenly flex-grow-1'>
                      <img src="images/portugal.png" className='img-fluid flag' data-bs-toggle="tooltip" data-bs-title="Portugues" />
                      <img src="images/states.png" className='img-fluid flag' data-bs-toggle="tooltip" data-bs-title="English" />
                      <img src="images/germany.png" className='img-fluid flag' data-bs-toggle="tooltip" data-bs-title="German" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col fs-2'>
                Experience
              </div>
            </div>
            <div className='row mt-3 bg-info border border-secondary p-3'>
              <div className='col-2 border bg-white d-flex justify-content-center align-items-center'>
                <img src="images/bosch.png" class="img-fluid" alt="..." />
              </div>
              <div className='col'>
                <div className='fs-5 fw-semibold'>
                  Master things..
                </div>
                <div className='mb-2 textSmall'>
                  Internship | asf | 2023
                </div>
                <div>
                  aslkdjf lakejf alöwkej flöakwje clajwl öcekaölwkejc öalwej cölakwecölkawen ölcailwöeckalnöw easd flkawejl öfkjalwökecj öalkwj ciawe lckawl ekcjölkawelkc alwekc
                </div>
              </div>
            </div>
            <div className='row bg-info border border-secondary p-3'>
              <div className='col-2 border bg-white d-flex justify-content-center align-items-center'>
                <img src="images/bosch.png" class="img-fluid" alt="..." />
              </div>
              <div className='col'>
                <div className='fs-5 fw-semibold'>
                  Safe Cities
                </div>
                <div className='mb-2 textSmall'>
                  Research Grant | asf | 2023
                </div>
                <div>
                  aslkdjf lakejf alöwkej flöakwje clajwl öcekaölwkejc öalwej cölakwecölkawen ölcailwöeckalnöw easd flkawejl öfkjalwökecj öalkwj ciawe lckawl ekcjölkawelkc alwekc
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}