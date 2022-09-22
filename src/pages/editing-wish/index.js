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
import Glasses from '../../style/icons/glass.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    MainContainer,
    Container,
    Hedaer,
    Section
} from './Main.Styles';


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <h4 style={
                    {
                        width: '100%', 
                        textAlign: 'center',
                        color: '#110035',
                        fontFamily: 'Steppe',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '24px',
                        lineHeight: '120%'
                    }}>The request has been sent to the moderators for verification</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Go to profile</Button>
            </Modal.Footer>
        </Modal>
    );
}



const Editing_Wish = () => {

    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [isVisibleSetter, setVisibleSetter] = useState(false);
    const [selectedCash, setSelectedCash] = useState('USD');
    const [isVisible, setVisible] = useState('none');

    const [modalShow, setModalShow] = useState(false);

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
                        <p className='path-title'>Main {'>'} Edit Wish</p>
                        <h1 className='edit-wish-title'>Edit the wish</h1>
                    </Hedaer>
                    <Section>
                        <h5 className='description-title'>Description</h5>
                        <div className='wish-name'>
                            <input type='text' placeholder='Enter Wish Name' />
                        </div>
                        <div className='cash-set-container'>
                            <div className='cash-set-container-insider'>
                                <div className='cash-quantity-container'>
                                    <input type='text' placeholder='Enter Quantity' />
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
                            <textarea className='text-area-container' placeholder='About'></textarea>
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
                    <div className='content-container'>
                        <img src={Glasses} className='glasses-img' />
                        <div className='change-photo-button-container'>
                            <button className='change-photo-button'>change photo</button>
                        </div>
                        <div className='change-photo-button-container'>
                            <button className='delete-photo'>Delete</button>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='save-changes-button-container'>
                <Button variant="primary" className='save-changes-button' onClick={() => setModalShow(true)}>
                 save changes
                </Button>
                </div>
            </Container>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </MainContainer>
    )
}

export default Editing_Wish