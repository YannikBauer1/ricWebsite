
import './contact.css';

export default function Contact() {

  /*
  return (
    <div className='pb-5 mb-5' id="contact">
      <div className='fs-1 text-center title pt-5 mt-5 pb-3 fw-semibold text-primary'>
        CONTACT
      </div>
      <div className='d-flex justify-content-center pt-4'>
        <div className='width2'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                </div>
              </div>
              <div className='col'>
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="4"></textarea>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col d-grid gap-2'>
                <button class="btn btn-primary" type="submit">SEND</button>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col d-flex justify-content-center'>
                <i class="bi bi-envelope-fill me-3"></i> yannikbauer@gmail.com
              </div>
            </div>
            <div className='row my-3'>
              <div className='col d-flex justify-content-center'>
                <i class="bi bi-geo-alt-fill me-3"></i> Porto, Portugal / Aschach, Germany
              </div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'>
                <i class="bi bi-github me-3"></i> <i class="bi bi-linkedin me-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )*/

  return (
    <div id="contact" className='bg-secondary'>
      <div className='container p-5 text-white'>
        <div className='row mb-4'>
          <div className='col d-flex justify-content-center flex-column align-items-center fs-1 p-5'>
            Contact
            <div className='bg-primary headerLine mt-1'></div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-3'>
            <div className='fs-5 mb-2'>
              Ricardo Andrade
            </div>
            <div>
              <a href="mailto:yannikbauer.1@gmail.com" className='text-decoration-none'>
                <div className='p-1'>
                  <i class="bi bi-envelope-fill me-2"></i>
                  <span className='text-white'>
                    email@email.com
                  </span>
                </div>
              </a>
            </div>
            <div className='mb-2'>
              <div className='p-1'>
                <i class="bi bi-geo-alt-fill me-2 text-primary"></i>
                Porto, Portugal
              </div>
            </div>
            <div className='ps-5'>
              <i class="bi bi-github me-2 text-primary"></i>
              <i class="bi bi-linkedin ms-2 text-primary"></i>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <input type="email" class="form-control bg-info text-white border-0" id="exampleFormControlInput1" placeholder="Name" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <input type="email" class="form-control bg-info text-white border-0" id="exampleFormControlInput1" placeholder="Email" />
                </div>
              </div>
              <div className='col'>
                <div class="mb-3">
                  <input type="email" class="form-control bg-info text-white border-0" id="exampleFormControlInput1" placeholder="Phone" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <textarea class="form-control bg-info text-white border-0" id="exampleFormControlTextarea1" placeholder="Message" rows="4"></textarea>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'>
                <button class="btn btn-primary" type="submit">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}