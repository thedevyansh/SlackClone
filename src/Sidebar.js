import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div class="sidebar__info">
                    <h2>Clever Programmer</h2>
                    <h3>   
                        <FiberManualRecordIcon />
                        Devyansh Chawla
                    </h3>
                </div>
                <CreateIcon />
            </div>
        </div>
    )
}

export default Sidebar
