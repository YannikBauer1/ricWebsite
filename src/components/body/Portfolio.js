
import './portfolio.css';

export default function Portfolio() {

  /*
  return (
    <div className='pb-5 mb-5' id="portfolio">
      <div className='fs-1 text-center title pt-5 mt-5 pb-3 fw-semibold text-primary'>
        PORTFOLIO
      </div>
      <div className='d-flex justify-content-center pt-3'>
        <div className='description'>
          Some tet about me blalblab lalb lsbl balksdlakf lkddddd asdkfn laskdnf ioaewlfkn alweknf lasdn flansidfn alksdnf lsdkanfl sn ldf
        </div>
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <div className='width3'>
          <div className='mb-5 pb-5'>
            <div className='bg-secondary fs-5 fw-bolder text-center portfolioTitle p-1 mb-3'>
              Agni
            </div>
            <div className='container p-4'>
              <div className='row mb-4'>
                <div className='col-12 col-md'>
                  <img src="images/agniTeacher.png" className='img-fluid border border-black'/>
                </div>
                <div className='col py-3'>
                  alaksdf laks dlfkajsld kflaksd ckanslkdv laksjvoiew lvasldkvna lskndl kafnlskdn lvnawl eknvlaksndvl knlvk aisdnvl aksndlvk asldkvnasidnvl aksndvl aksdnv sdiv alskdnl n lkasd flkajs difla sdl fkasid calsdkncliewl lkanl sndclak nsdc alwiencl akwnlvaknsdlkvlasdnv asidnvl aksndlvk aslidnval skdnlvaknsd lkn
                  laksdjflaksjd lfkajl sdkjla ksdlkj 
                </div>
              </div>
              <div className='row flex-column-reverse flex-md-row'>
                <div className='col col-md-7 py-3'>
                  lsjdf laksdl fkasl jclajwoie claskdc waipc qMLÖASKDN CÖLASNV LAIEV LWKNVLAKW NDSLVKN LSDKVLAK k vlsknd lvansdv lknavlkv alskdnv 
                  laksd lfkaowien lvkanlsk novaiw lvkansdl vaowe vlaks lvdkowe laskdv abouta vsdlkv asdkfnv askld 
                   laskndv liaw evlaksnd lvaniewl vlnaskdnv liawn levknasldn lvaiwenv
                   a sdlvansidvnlawienvl ains dvl
                </div>
                <div className='col-12 col-md-5'>
                  <img src="images/agniStudent.png" className='img-fluid border border-black'/>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='bg-secondary fs-5 fw-bolder text-center portfolioTitle p-1 mb-3'>
              My Website
            </div>
            <div className='container p-4'>
              <div className='row mb-4'>
                <div className='col-12 col-md-7'>
                  <img src="images/myWebsite.png" className='img-fluid border border-black'/>
                </div>
                <div className='col py-3'>
                  alaksdf laks dlfkajsld kflaksd ckanslkdv laksjvoiew lvasldkvna lskndl kafnlskdn asldkvnasidnvl aksndvl aksdnv sdiv alskdnl n lkasd flkajs difla sdl fkasid calsdkncliewl lkanl sndclak nsdc alwiencl akwnlvaknsdlkvlasdnv asidnvl aksndlvk aslidnval skdnlvaknsd lkn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )*/

  return (
    <div id="portfolio" className='bg-info pb-5'>
      <div className='container p-5 text-white'>
      <div className='row mb-4'>
          <div className='col d-flex justify-content-center flex-column align-items-center fs-1 p-5'>
            Portfolio
            <div className='bg-primary headerLine mt-1'></div>
          </div>
        </div>
        <div className='row px-5 pb-5'>
          <div className='col'>
            <div className='bg-secondary p-3 py-4 zoomable-container overflow-hidden'>
              <div className='border border-primary border-5 mb-3 overflow-hidden'>
                <img src="images/paper.jpeg" className='img-fluid zoomable-image'/>
              </div>
              <div className='fs-5 fw-semibold mb-2'>
                Project Title
              </div>
              aosmf ealfkme lwkn lakwen clkanw lecjawie cölakwne öclkanwe ölcknawöleic lawkencl öawejlc kanwöeic öwlekncaiewn ö aflkel wkjclkaw jelöja lwök enölckawe
            </div>
          </div>
          <div className='col'>
          <div className='bg-secondary p-3 py-4 zoomable-container overflow-hidden'>
              <div className='border border-primary border-5 mb-3 overflow-hidden'>
                <img src="images/thesis.jpeg" className='img-fluid zoomable-image'/>
              </div>
              <div className='fs-5 fw-semibold mb-2'>
                Project Title
              </div>
              aosmf ealfkme lwkn lakwen clkanw lecjawie cölakwne öclkanwe ölcknawöleic lawkencl öawejlc kanwöeic öwlekncaiewn ö aflkel wkjclkaw jelöja lwök enölckawe
            </div>
          </div>
          <div className='col'>
          <div className='bg-secondary p-3 py-4 zoomable-container overflow-hidden'>
              <div className='border border-primary border-5 mb-3 overflow-hidden'>
                <img src="images/project.jpeg" className='img-fluid zoomable-image'/>
              </div>
              <div className='fs-5 fw-semibold mb-2'>
                Project Title
              </div>
              aosmf ealfkme lwkn lakwen clkanw lecjawie cölakwne öclkanwe ölcknawöleic lawkencl öawejlc kanwöeic öwlekncaiewn ö aflkel wkjclkaw jelöja lwök enölckawe
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}