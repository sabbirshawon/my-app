import React from 'react'

const Hello = () => {
    // return(
    //     <div className='titleClass'>
    //         <h1>Hello World!</h1> 
    //     </div>
    // )

    return React.createElement(
        'div',
        { id: 'hello' , className: 'titleClass'}, 
        React.createElement('h1', null, 'Hello Sabbir')
    )
}

export default Hello