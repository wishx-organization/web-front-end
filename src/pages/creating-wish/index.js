import React, { useState } from 'react';
import { MultiSelect } from '@mantine/core';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';;
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import {FaFacebook, FaGoogle, FaApple} from 'react-icons/fa'
import  Brochure from '../../style/icons/img.svg'

import {
    MainContainer,
    Container,
    Hedaer,
    Section,
    Temp
} from './MyCreatedWish.Styles';


const Created_Wish = () => {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [isVisibleSetter, setVisibleSetter] = useState(false);
  const [selectedCash, setSelectedCash] = useState('USD');
  const [isVisible, setVisible] = useState('none');


  const handleChange = (newValue) => {
      setValue(newValue);
  };

  const CashItems = ({ item }) => {
      return (
          <li className='cash-selection-block-list-item'
              onClick={() => {
                  setSelectedCash(item);
                  setVisible('none');
                  setVisibleSetter(false)
              }}
          >
              {item}
          </li>
      )
  }

  const onCashSelectPush = () => {
      if (isVisibleSetter == false) {
          setVisible('block');
          setVisibleSetter(true);
      } else {
          setVisible('none');
          setVisibleSetter(false);
      }
  }

  const cash = ['USD', 'EURO', 'GBP', 'TRL', 'AZN'];

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
    <MainContainer>
            <Container>
                <div className='container-insider'>
                    <Hedaer>
                        <p className='path-title'>Main {'>'} Create Wish</p>
                        <h1 className='edit-wish-title'>Creating Wish</h1>
                    </Hedaer>
                    <Temp>
                       <div className='promote-block'>
                        <div className='titles-block'> 
                        <h1 className='main-title'>Your sincerity is the key to success!</h1>
                        <ul>
                          <li>Add as many details as possible and tell why you need the gift.</li>
                          <li>Wish for real things, come true when you yourself are ready for it!</li>
                        </ul>
                        </div>
                        <div className='promote-and-button'>
                          <div className='brochure'>
                             <img src={Brochure} className='brochure-image'/>
                          </div>
                          <div className='button'>
                            <button>OK</button>
                          </div>
                        </div>
                       </div>
                    </Temp>
                    <Section>
                        <h5 className='description-title'>Describe a wish</h5>
                        <div className='wish-name'>
                            <input type='text' placeholder='Wish Name' />
                        </div>
                        <div className='cash-set-container'>
                            <div className='cash-set-container-insider'>
                                <div className='cash-quantity-container'>
                                    <input type='text' placeholder='Price' />
                                </div>
                                <div className='cash-type-container'>
                                    <div className='cash-selection' onClick={onCashSelectPush}>
                                        <label className='cash-type'>{selectedCash}</label>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>

                                        <div className='cash-selection-block' style={{ display: isVisible }}>
                                            <ul className='cash-selection-block-list'>
                                                {cash.map((item) => <CashItems key={item} item={item} />)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-area'>
                            <textarea className='text-area-container' placeholder='Description'></textarea>
                        </div>
                        <div className='multi-select'>
                            <div className='multi-select-insider'>
                                <MultiSelect
                                    className='info_input-multi'
                                    data={data}
                                    placeholder="Interests"
                                    style={{ background: '#F7F8FA' }}
                                />
                            </div>
                        </div>
                        <div className='date-fo-birth-container'>
                            <div className='date-fo-birth-container-insider'>

                                <div className='date'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3} style={{ background: '#F7F8FA', border: '0' }}>
                                            <DesktopDatePicker
                                                label="Date of Birth"
                                                inputFormat="MM/DD/YYYY"
                                                value={value}
                                                onChange={handleChange}
                                                renderInput={(params) => <TextField {...params} />}

                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                                <div className='date-of-birth'>
                                    <input type='text' placeholder='29-th birthday' />
                                </div>
                            </div>
                        </div>
                        <div className='aviable-group'>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </Section>
                </div>
                <div className='container-insider-sm'>
                    <div className='content-container' onClick={() => {
                      const dialog = document.querySelector('.file-uploader');
                       dialog.click();
                    }}>
                        <input type='file' className='file-uploader' style={{display: 'none'}}/>
                        <FontAwesomeIcon icon={faArrowUpFromBracket}/>
                        <h5>Upload a photo of your wish</h5>
                        <p>PNG, JPG or Gif</p>
                        <p>Max 5MB</p>
                    </div>
                </div>
                <div className='if-not-singed-in'>
                    <h1 className='sing-up-title'>Sing Up</h1>
                    <div className='aleready-have-account-block'>
                        <h5 className='aleready-have-account-title'>Already have account?</h5>
                        <h5 className='log-in-title'>Log In</h5>
                    </div>
                    <div className='log-in-with-facebook-block'>
                        <button className='log-in-with-facebook-button'>
                            <FaFacebook className='facebook-icon'/>
                            <h5 className='facebook-title'>Facebook</h5>
                        </button>
                    </div>
                    <div className='log-in-with-facebook-block'>
                        <button className='log-in-with-google-button'>
                            <FaGoogle className='google-icon'/>
                            <h5 className='google-title'>Google</h5>
                        </button>
                        <button className='log-in-with-apple-button'>
                            <FaApple className='apple-icon'/>
                            <h5 className='apple-title'>Apple</h5>
                        </button>
                    </div>
                    {/* <div className='or-via-email-block'>
                        <h5 className='or-via-email-title'>
                           Or via email
                        </h5>
                    </div> */}
                </div>
            </Container>
            <Container>
                <div className='save-changes-button-container'>
                <Button variant="primary" className='save-changes-button'>
                 Create Wish
                </Button>
                </div>
            </Container>
        </MainContainer>
  )
}

export default Created_Wish