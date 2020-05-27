import React, { Fragment } from 'react';

import classes from './Header.module.css';
import UploadMenu from '../UploadMenu/UploadMenu';

const Header = (props) => {
    return (
        <Fragment>
            <header className>
                <nav className>
                    <button>
                        <span>BlockDrive</span>
                    </button>
                    <div className={classes.spacer}></div>
                    <div style={{postiton: 'relative'}}>
                        <button onClick={props.uploadOnClick}>
                            <div className={classes.iconContainer}>
                                <i className="material-icons">cloud_upload</i>
                            </div>
                            <span>Upload</span>
                        </button>
                        {
                            props.uploadMenu ?
                            <UploadMenu /> :
                            null
                        }
                    </div>
                    <button>
                        {/* <i className="material-icons">face</i> */}
                        <span>Account</span>
                    </button>
                </nav>
            </header>
        </Fragment>
    )
}

export default Header;