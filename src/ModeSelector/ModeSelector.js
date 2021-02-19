import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    return (
        <div style={{display: 'flex', justifyContent: 'center', padding: '50px 0px'}}>
        <button onClick={() => props.onSelect(smallUrl)} className="btn btn-light">Small Data</button>
        <button onClick={() => props.onSelect(bigUrl)}  className="btn btn-light">Big Data</button>
    </div>
    )

    }