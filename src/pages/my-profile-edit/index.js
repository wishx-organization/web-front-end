import React, { useState, useEffect } from 'react';
import { MultiSelect } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowUpFromBracket, faCheck, faCalenda } from '@fortawesome/free-solid-svg-icons';
import { FaApple, FaFacebook, FaFileUpload, FaGoogle, FaInstagram, FaTelegram, FaTiktok, FaTwitter, FaUpload, FaWhatsapp } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DatePickerInput } from 'carbon-components-react';
import moment from "moment";
import Cry_Smyle from '../../style/icons/cry_smyle.jpg'
import {
  ProfileEditing,
  LittleContainer,
  Header,
  EditingButtons,
  Section,
  EditingItem,
  ProfilePicture,
  EditingInputs,
  GenderButtons,
  MainInputs,
  PasswordSettings,
  PasswordSettingsInputs,
  Password,
  SosialMediaButtons,
  PictureUpload,
  PictureUploadComponents,
  PictureDropDown,
  StatusPedding,
  Compleated,
  SosialMediaSelection,
  SaveButton
} from './MyProfileEdit.styles'

const SetProfileEditButtonsEvent = () => {

  const edit_buttons = document.querySelectorAll('.editing-buttons');

  for (const iterator of edit_buttons) {

    iterator.addEventListener('click', (e) => {
      OnSetProfileEditPathClick(e.currentTarget)
    })

  }
}

const OnSetProfileEditPathClick = (clicked) => {

  let element_id = clicked.getAttribute('id');

  switch (element_id) {
    case 'editing-buttons1':
      document.querySelector('#editing-buttons1').setAttribute('style', 'background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;');
      document.querySelector('#editing-buttons2').setAttribute('style', 'background: white; border: 0;');
      document.querySelector('#editing-buttons3').setAttribute('style', 'background: white; border: 0;');
      document.querySelector('#editing-buttons4').setAttribute('style', 'background: white; border: 0;');
      break;
    case 'editing-buttons2':
      document.querySelector('#editing-buttons1').setAttribute('style', 'background: white; border: 0;');
      document.querySelector('#editing-buttons2').setAttribute('style', 'background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;');
      document.querySelector('#editing-buttons3').setAttribute('style', 'background: white; border: 0;');
      document.querySelector('#editing-buttons4').setAttribute('style', 'background: white; border: 0;');
      break;
    case 'editing-buttons3':
      document.querySelector('#editing-buttons1').setAttribute('style', 'background: white; border: 0;');
      document.querySelector('#editing-buttons2').setAttribute('style', 'background: white; border: 0;');
      document.querySelector('#editing-buttons3').setAttribute('style', 'background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;');
      document.querySelector('#editing-buttons4').setAttribute('style', 'background: white; border: 0;');
      break;
    case 'editing-buttons4':
      document.querySelector('#editing-buttons1').setAttribute('style', 'background: white; border: 0;');
      document.querySelector('#editing-buttons2').setAttribute('style', 'background: white; border: 0;');
      document.querySelector('#editing-buttons3').setAttribute('style', 'background: white; border: 0;');
      document.querySelector('#editing-buttons4').setAttribute('style', 'background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;');
      break;

  }

}


const SetGenderButtonsClick = () => {

  let gender_buttuns = document.querySelectorAll('.gender_buttuns');

  for (const iterator of gender_buttuns) {
    iterator.addEventListener('click', (e) => {
      OnGenderButtonClick(e.currentTarget)
    })
  }
}


const OnGenderButtonClick = (clicked) => {

  let element_id = clicked.getAttribute('id');

  switch (element_id) {
    case 'female':
      document.querySelector('#female').setAttribute('style', ' background: #ECEEF7; border: 2px solid #2D3043; border-radius: 8px; z-index: 3;');
      document.querySelector('#male').setAttribute('style', 'background: #FFFFFF; border: 2px solid #ECEEF7; border-radius: 8px; z-index: 0');
      break;
    case 'male':
      document.querySelector('#male').setAttribute('style', ' background: #ECEEF7; border: 2px solid #2D3043; border-radius: 8px; z-index: 3');
      document.querySelector('#female').setAttribute('style', 'background: #FFFFFF; border: 2px solid #ECEEF7; border-radius: 8px; z-index: 0');
      break;
  }
}


const SetSaveAndCancelButtonsClick = () => {
  let SaveAndCancel = document.querySelectorAll('.saveAndCancel');

  for (const iterator of SaveAndCancel) {
    iterator.addEventListener('click', (e) => {
      OnClickSaveOrCancelButton(e.currentTarget);
    })
  }
}

function getMomentFormatter(format: string): DateFormatProps {
  // note that locale argument comes from locale prop and may be undefined
  return {
    formatDate: (date, locale) => moment(date).locale(locale).format(format),
    parseDate: (str, locale) => moment(str, format).locale(locale).toDate(),
    placeholder: format,
  }
};



const OnClickSaveOrCancelButton = (clicked) => {

  let saveAndCancelid = clicked.getAttribute('id');

  switch (saveAndCancelid) {
    case 'save_button':
      document.querySelector('#save_button').setAttribute('style', 'background: #3800B0; border-radius: 8px; color: #FFFFFF;');
      document.querySelector('#cancel_button').setAttribute('style', 'background: #FFFFFF; color: #3800B0; border: 1px solid #3800B0;');
      break;
    case 'cancel_button':
      document.querySelector('#save_button').setAttribute('style', 'background: #FFFFFF; color: #3800B0; border: 1px solid #3800B0;');
      document.querySelector('#cancel_button').setAttribute('style', 'background: #3800B0; border-radius: 8px; color: #FFFFFF;');
      break;
  }
}

function MyVerticallyCenteredModal(props) {
  const [password, setPassword] = useState('password');
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Delete your account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1 className='enter-password-title'>Enter password to allow deletion</h1>
        <Password
          className='info_input'
          placeholder='Password'
          type={password ? 'password' : 'text'} />
        <div className='delete-causes-items-container'>
          <p>Reason for deleting the account (optional)</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Reason 1" control={<Radio />} label="Reason 1" />
              <FormControlLabel value="Reason 2" control={<Radio />} label="Reason 2" />
              <FormControlLabel value="Reason 3" control={<Radio />} label="Reason 3" />
              <FormControlLabel value="Other Reson" control={<Radio />} label="Other Reson" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='reson-text-input'>
          <input type='text' className='info_input' placeholder='Describe your reason' />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Delete account</Button>
      </Modal.Footer>
    </Modal>
  );
}



function DeleteAccountConfirmSmyle(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Account deleted
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='cry-smyle'>
          <img src={Cry_Smyle} className='cry-smyle-image' />
        </div>
        <p className='deleted-account-wish-to-user'>It is a pity that you are leaving us, but we will be glad to see you again.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const ProfileEdit = () => {

  const [isOpened, SetOpenOrClose] = useState(false);
  const [countryName, SetCountryName] = useState('Select Country');
  const [password, setPassword] = useState('password');
  const [modalShow, setModalShow] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const OnSeclectCountry = (country) => {
    SetCountryName(country.innerHTML);
    document.querySelector('.countries-list').setAttribute('style', 'display: none');
    SetOpenOrClose(false);
  }

  const setClickOnOptions = () => {
    const options = document.querySelectorAll('.option');

    for (const iterator of options) {
      iterator.addEventListener('click', (e) => {
        OnSeclectCountry(e.currentTarget);
      })
    }
  }

  useEffect(() => {
    setClickOnOptions();
    SetProfileEditButtonsEvent();
    SetGenderButtonsClick();
    SetSaveAndCancelButtonsClick();
  });


  const data = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'riot', label: 'Riot' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
  ];



  return (
    <ProfileEditing>
      <LittleContainer>
        <Header>
          <p className='top-buttons'>Main {'>'} Profile {'>'} Edit Profile Information</p>
          <h1 className='main-page-title'>Edit Information</h1>
          <Tabs defaultValue="personalinfo">
            <EditingButtons>
              <div className='insider'>
                <Tab value="personalinfo">
                  <button className='editing-buttons' id='editing-buttons1'>Personal info</button>
                </Tab>
                <Tab value="passwordlogin">
                  <button className='editing-buttons' id='editing-buttons2'>Password and Log In</button>
                </Tab>
                <Tab value="verification">
                  <button className='editing-buttons' id='editing-buttons3'>Verification</button>
                </Tab>
                <Tab value="sociallink">
                  <button className='editing-buttons' id='editing-buttons4'>Social links</button>
                </Tab>
              </div>
            </EditingButtons>
            <TabPanel value="personalinfo">
              <Section>
                <EditingItem>
                  <ProfilePicture>
                    <figure className='image-figure'>
                      <img src='https://s3-alpha-sig.figma.com/img/3d40/3064/c041f60c443c14f5849fe6d2a106a7ff?Expires=1664150400&Signature=LJTYgr98kWZlo7FvMaSK~QFRyyIEckFm3xUIWfYtbZa1x1Pok5uVpRiVgqr6WQ6lrvkACbxhsq39LvwrTRQdYdHZhKoSi~6leHbQH1rUUUA2FRpmwJCdWRlrMkm2VBn~v0AoGyr9-Hd7ZOTxkbms8ssc2gOjB0ymHSxdu1vXBhzWINx-9A8liuAEJjuMz59wxuZbefmj~KxJcfyX2i1NGS7QhNxJIGU4ljSYT5Ov4PzKtmJJQIAzR4InE1r5zlsqxF3bdeHbGCZV9jMfVG9zkYeUQe4PaT3YvfxXh4Qrq40fSOfHBZwdlRI88hY95-Pu8~5ra7IWPV4KmmbgEY49qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' className='profile-pucture' />
                    </figure>
                    <p className='upload-profile-picture'>Upload profile photo</p>
                  </ProfilePicture>
                  <EditingInputs>
                    <input type='text' required placeholder='Full name' className='editing-inputs'></input>
                  </EditingInputs>
                </EditingItem>
                <GenderButtons>
                  <button className='gender_buttuns female-button' id='female'>Female</button>
                  <button className='gender_buttuns male-button' id='male'>Male</button>
                </GenderButtons>
                <MainInputs>
                  <div className='seclect-container'>
                    <div className='country-selection' onClick={() => {
                      if (isOpened == false) {
                        document.querySelector('.countries-list').setAttribute('style', 'display: block');
                        SetOpenOrClose(true);
                      } else {
                        document.querySelector('.countries-list').setAttribute('style', 'display: none');
                        SetOpenOrClose(false);
                      }
                    }}>
                      <h5 className='country-name'>{countryName}</h5>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <ul className='countries-list'>
                      <li className='option'>Azerbaijan</li>
                      <li className='option'>Turkey</li>
                      <li className='option'>United Kingdom</li>
                      <li className='option'>USA</li>
                      <li className='option'>Ukraine</li>
                      <li className='option'>Germany</li>
                      <li className='option'>France</li>
                    </ul>
                  </div>
                  <div className='email-container'>
                    <input type='email' required className='info-input-email' placeholder='Email'></input>
                    <a href='#' className='change-button'>Change</a>
                  </div>
                  <div className='email-container'>
                    <input type='tel' required className='info-input-email' placeholder='Phone Number'></input>
                    <a href='#' className='change-button'>Change</a>
                  </div>
                  <DatePickerInput
                    placeholder="mm/dd/yyyy"
                    labelText="Date Picker label"
                    id="date-picker-single"
                    onChange={date => {
                      console.log(date);
                    }}
                    />
                  <div className='wish-me-input-title'>
                    <h5 className='wish-me-title'>wish.me/</h5>
                    <input className='info_input-small' required placeholder='username' />
                  </div>
                  <div className='main-title-container'>
                    <p className="main-title">Select your interests so that our partners give you only relevant gifts (maximum 5):</p>
                  </div>
                  <div className='interests-input-container'>
                    <div className='multi-select'>
                      <MultiSelect
                        className='info_input-multi'
                        data={data}
                        placeholder="Interests"
                      />
                    </div>
                  </div>
                  <div className='text-area-container'>
                    <textarea rows={5} cols={5} className='text-area' placeholder='About you' />
                  </div>
                  <div className='buttons-container'>
                    <button className='saveAndCancel save-button' id='save_button'>Save</button>
                    <button className='saveAndCancel cancel-button' id='cancel_button' onClick={() =>
                      setModalShow(true)
                    }>Delete account</button>
                  </div>
                </MainInputs>
              </Section>
            </TabPanel>
            <TabPanel value="passwordlogin">
              <PasswordSettings>
                <p className='password-change-title'>Change password</p>
                <PasswordSettingsInputs>
                  <Password
                    className='info_input'
                    placeholder='Old Password'
                    type={password ? 'password' : 'text'} />

                </PasswordSettingsInputs>
                <PasswordSettingsInputs>

                  <Password
                    className='info_input'
                    placeholder='New Password'
                    type={password ? 'password' : 'text'} />

                </PasswordSettingsInputs>
                <div className='confirm-button'>
                  <button className='password-save-button'>Save</button>
                </div>
                <h1 className='connetc-sosial-netwok-title'>Connect sosial networks</h1>
                <SosialMediaButtons>
                  <button className='facebook-button'>
                    <FaFacebook className='facebook-icon'></FaFacebook>
                    <h1 className='facebook-title' style={{ margin: '0' }}>Disconnect Facebook</h1>
                  </button>
                  <button className='google-button'>
                    <FaGoogle className='google-icon'></FaGoogle>
                    <h1 className='google-title' style={{ margin: '0' }}>Connect Google</h1>
                  </button>
                  <button className='apple-button'>
                    <FaApple className='apple-icon'></FaApple>
                    <h1 className='apple-title' style={{ margin: '0' }}>Connect Apple</h1>
                  </button>
                </SosialMediaButtons>
              </PasswordSettings>
            </TabPanel>
            <TabPanel value="verification">
              <PictureUpload>
                <PictureUploadComponents className='picture-upload'>
                  <p className='title'>To start fundraising for yourself,
                    you need to pass verification.
                    To <br /> do this, just send a photo of your passport.</p>
                  <input type='file' name='photo-uploader' id='photo-uploader' />
                  <PictureDropDown>
                    <div className='upload-icon-and-title' onClick={() => {
                      const dialog = document.querySelector('#photo-uploader');
                      dialog.click();
                    }}>
                      <FontAwesomeIcon icon={faArrowUpFromBracket} />
                      <h1 className='upload-picture-title'>Upload picture of Passport</h1>
                    </div>
                  </PictureDropDown>
                  <div className='upload-picture-treams'>
                    <h5 className='trems-head-title'>The photo must be</h5>
                    <ul className='pictures-upload-treams-list'>
                      <li className='pictures-upload-treams-list-item'>Original. Do not change or edit.</li>
                      <li className='pictures-upload-treams-list-item'>Light. Make sure there is enought light when shooting</li>
                      <li className='pictures-upload-treams-list-item'>Clear. All information should be easy to read</li>
                    </ul>
                  </div>
                  <button className='save-to-verification' onClick={() => {
                    document.querySelector('.picture-upload').setAttribute('style', 'display: none');
                    document.querySelector('.status-padding').setAttribute('style', 'display: block');
                    window.scrollTo(0, 0);
                  }}>Send to verification</button>
                </PictureUploadComponents>
                <StatusPedding className='status-padding'>
                  <h1 className='status-pedding-title'>Status pending</h1>
                  <p className='status-pedding-main-title'>Your documents have been sent for verification! Moderators will <br />
                    review your application as soon as possible. Thanks for waiting</p>
                  <h5 className='contact-administration-title' onClick={() => {
                    document.querySelector('.status-padding').setAttribute('style', 'display: none');
                    document.querySelector('.compleated').setAttribute('style', 'display: block');
                  }}>Contact the administration</h5>
                </StatusPedding>
                <Compleated className='compleated'>
                  <div className='compleated-icon'>
                    <div className='compleated-icon-item'>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  </div>
                  <h1 className='verification-compleated-title'>Verification passed successfully</h1>
                  <p className='moderator-compleating'>Moderator verificated your info. Thank you!</p>
                  <h5 className='contact-administration-title'>Contact the administration</h5>
                </Compleated>
              </PictureUpload>
            </TabPanel>
            <TabPanel value="sociallink">
              <SosialMediaSelection>
                <div className='sosial-media'>
                  <FaFacebook className='facebook'></FaFacebook>
                  <input type='text' className='sosial-media-intputs' placeholder='Your Facebook link' />
                </div>
                <div className='sosial-media'>
                  <FaInstagram className='instagram'></FaInstagram>
                  <input type='text' className='sosial-media-intputs' placeholder='Your Instagram link' />
                </div>
                <div className='sosial-media'>
                  <FaTwitter className='twitter'></FaTwitter>
                  <input type='text' className='sosial-media-intputs' placeholder='Your Twitter link' />
                </div>
                <div className='sosial-media'>
                  <FaTiktok className='tiktok'></FaTiktok>
                  <input type='text' className='sosial-media-intputs' placeholder='Your TikTok link' />
                </div>
                <div className='sosial-media'>
                  <FaTelegram className='telegram'></FaTelegram>
                  <input type='text' className='sosial-media-intputs' placeholder='Your Telegram link' />
                </div>
                <div className='sosial-media'>
                  <FaWhatsapp className='whatsapp'></FaWhatsapp>
                  <input type='text' className='sosial-media-intputs' placeholder='Your Whatsapp link' />
                </div>
                <SaveButton>
                  <button className='save-button'>Save</button>
                </SaveButton>
              </SosialMediaSelection>
            </TabPanel>
          </Tabs>
        </Header>
      </LittleContainer>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => { setModalShow(false), setConfirm(true) }} />
      <DeleteAccountConfirmSmyle
        show={confirm}
        onHide={() => setConfirm(false)} />
    </ProfileEditing >
  )
}

export default ProfileEdit