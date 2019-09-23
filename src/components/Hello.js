import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello World!</h1> 
    //     </div>
    // )

    return React.createElement(
        'div',
        { id: 'hello' , class: 'dummyCLass'}, 
        React.createElement('h1', null, 'Hello Sabbir')
    )
}

export default Hello