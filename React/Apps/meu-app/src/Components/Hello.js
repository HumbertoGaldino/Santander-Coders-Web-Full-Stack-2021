import React from 'react';

// export default function Hello(props){
//     return (
//         <>
//             {props.children}
//         </>
//     )
// }

// export default function Hello({children}){
//     return (
//         <>
//             {children}
//         </>
//     )
// }

const Hello = ({text}) => <h1>{text}</h1>;
export default Hello;