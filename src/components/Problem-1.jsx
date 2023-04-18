import React, { useRef, useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [tasks, setTasks] = useState([]);

    const nameRef = useRef();
    const statusRef = useRef()

    const handleClick = (val) => {
        setShow(val);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const status = statusRef.current.value;
        const newTask = { name, status };
        setTasks([...tasks, newTask]);
        e.target.reset();
    };

    let filteredTasks;
    if (show === 'all') {
        filteredTasks = tasks;
    } else if (show === 'active') {
        filteredTasks = tasks.filter(task => task.status === 'active');
    } else {
        filteredTasks = tasks.filter(task => task.status === 'completed');
    }
    filteredTasks.sort((a, b) => a.status.localeCompare(b.status));
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input ref={nameRef} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input ref={statusRef} type="text" className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;