import React from 'react';

const ModalC = ({handleCloseModal}) => {
    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', marginTop: '50px' }}>
        <div className="modal-dialog " role="document">
            <div className="modal-content">
                <div className="modal-header" >
                    <h5  className="modal-title">Modal C</h5>
                    <button type="button" className="close" onClick={handleCloseModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div style={{ marginTop: '15px',  }}>
                        <p>Contact detail</p>
                    </div>
                </div>  
                <div className='modal-footer'>
                <button style={{ background: '#46139f', color: 'white' }} type="button" className="btn" onClick={handleCloseModal}>Close</button>

                </div>
            </div>
        </div>
    </div>
    );
};

export default ModalC;