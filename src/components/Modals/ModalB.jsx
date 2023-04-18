import React from 'react';

const ModalB = ({filteredCountry,handleShowModalC,handleCloseModal,handleButtonA,handleButtonB}) => {
    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', marginTop: '50px' }}>
                        <div className="modal-dialog " role="document">
                            <div className="modal-content">
                                <div className="modal-header" >
                                    <h5  className="modal-title">Modal B</h5>
                                    <button type="button" className="close" onClick={handleCloseModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <button onClick={handleButtonA} style={{ background: '#46139f', color: 'white' }} className="btn ">All Contacts</button>
                                    <button onClick={handleButtonB} style={{ marginLeft: '10px', marginRight: '10px', background: "#ff7f50", color: 'white' }} className="btn">US Contacts</button>
                                    <button style={{ background: '#46139f', color: 'white' }} type="button" className="btn" onClick={handleCloseModal}>Close</button>
                                    <div style={{ marginTop: '15px',overflow:'scroll', height:'300px'  }}>
                                        {
                                           filteredCountry.map(country => <div key={country.id} onClick={handleShowModalC}>
                                                <div style={{cursor:'pointer', border: '1px solid red', borderRadius: '5px', margin: '10px', padding: '10px' }}>
                                                    <p>Country Name : {country.country.name}</p>
                                                    <p>Phone : {country.phone}</p>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                                <div className='modal-footer' >
                                    <input onChange={(e)=>setChecked(e.target.checked)}  type="checkbox" /><label htmlFor="">Only even</label>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default ModalB;