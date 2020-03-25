import React from 'react';

export default function Header(props){
    return (
        <header>
            <h1>{props.children}</h1>
        </header>
    );
}

//export default Header; pode ser feito assim ou dando export default antes da function