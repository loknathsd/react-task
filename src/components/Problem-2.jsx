import React, { useEffect, useRef, useState } from 'react';
import ModalA from './Modals/ModalA';
import ModalB from './Modals/ModalB';
import ModalC from './Modals/ModalC';

const Problem2 = () => {
    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);
    const [showModalC, setShowModalC] = useState(false);
    const [countries, setCountries] = useState([]);
    const[checked,setChecked] = useState(false)
    const filteredCountry = countries.filter(country => country.country.name === 'United States');
   
    const handleShowModalA = () => {
        setShowModalA(true);
    }
    const handleShowModalB = () => {
        setShowModalB(true);
    }
    const handleShowModalC = () => {
        setShowModalC(true);
        setShowModalA(false)
        setShowModalB(false)
    }
    const handleCloseModal = () => {
        setShowModalA(false);
        setShowModalB(false);
        setShowModalC(false)
    }
    const handleButtonA = () => {
        setShowModalA(true);
        setShowModalB(false);
     
    }
    const handleButtonB = () => {
        setShowModalA(false);
        setShowModalB(true)
      

    }
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setCountries(data.results))
    }, [])
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button onClick={handleShowModalA} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    <button onClick={handleShowModalB} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                {showModalA && <ModalA countries={countries} handleShowModalC={handleShowModalC} handleCloseModal={handleCloseModal} handleButtonA={handleButtonA} handleButtonB={handleButtonB} />}
                {showModalB && <ModalB filteredCountry={filteredCountry} handleShowModalC={handleShowModalC} handleCloseModal={handleCloseModal} handleButtonA={handleButtonA} handleButtonB={handleButtonB} />}
                 {showModalC && <ModalC handleCloseModal={handleCloseModal} />}

            </div>
        </div>
    );
};

export default Problem2;