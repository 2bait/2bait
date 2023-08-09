import React, { FC } from 'react';
//import { CSSTransition } from 'react-transition-group';

type MainProps = {
    children: any;
  };
  

// interface MainConfig{
//     pathname: string,
//     children: any
// }
// {pathname, children}:MainConfig

const Main: FC<MainProps> = ({ children }) => {
     return (
            <div className='main-container'>
               {/* <CSSTransition transitionName='appear' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {React.cloneElement(children, {key: pathname})}
                </CSSTransition> */}
            </div>
        );    
}

export default Main;
