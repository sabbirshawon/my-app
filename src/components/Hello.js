import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello World!</h1> 
    //     </div>
    // )

    return React.createElement('div', null, '<h1>Hello World!</h1>')
}

export default Hello