import React from 'react';
import "./Footer.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Connect with</span>
        </div>

        <div className='social-icon'>
          <a href='https://www.facebook.com/profile.php?id=100011318018723&mibextid=ZbWKwL' className='text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://www.facebook.com/profile.php?id=100011318018723&mibextid=ZbWKwL' className=' text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='poojaroofingco.mfg@gmail.com' className='text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://instagram.com/mr.beniwal_____?igshid=YmMyMTA2M2Y=' className='text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                Pooja Roffing Co.(MFG) <br/>Colour Tuff+ <br/> Roffing|Cladding|Accessories <br/> Your Trust is Our Identity
              </p>
            </MDBCol>

            
            
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Corporate Address</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
              Mayfair Buildings, 1st Floor, Lalgnesh <br/>POOJA ROFFING CO (MFG) <br/>Lokhra Road ,Opposite Hanuman Mandir Guwahati-781034, ASSAM </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                poojaroofingco.mfg@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 6901262103
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> 0361 3549092
              </p>
            </MDBCol>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Factory Address</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
               Village: Sila ,Changsari,Near Choki Gate, Kamrup(Rural) Assam
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                poojaroofingco.mfg@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 6901262103
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> 0361 3549092
              </p>
            </MDBCol>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Help</h6>
              <p>
                <a href='/contact' className='text-reset'>
                  Help Center
                </a>
              </p>
              <p>
                <a href='/products' className='text-reset'>
                  privacy Policy
                </a>
              </p>
              <p>
                <a href='/contact  ' className='text-reset'>
                  contact us
                </a>
              </p>
              <p>
                <a href='https://instagram.com/ad_amit_choudhary' className='text-reset'>
                  Contact Developer 
                </a>
              </p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Pooja Roofing Co. All Right Reserved | T&C 
        <a className='text-reset fw-bold' href='https://instagram.com/ad_amit_choudhary'>

        </a>
      </div>
    </MDBFooter>
  );
}