import React from "react"

const Row =({FullName , Bio , Profession , Image ,Alert}) => (
    <div>
        <div>
            <span>FullName : {FullName}</span>
        </div>
        <div>
            <span>Bio : {Bio}</span>
        </div>
        <div>
            <span>Profession :{Profession}</span>
        </div>
        <div>
            <img src={Image} />
        </div>
        <div>
            <button onClick={Alert} >click me</button>
        </div>
    </div>
);

export default Row