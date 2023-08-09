import React , { FC } from 'react';

type WrapperProps = {
    children: any;
  };
  
const Header: FC<WrapperProps> = ({ children }) => {
    // getInitialState: function () {
    //     return {
    //         window: {
    //             height: 0,
    //             width: 0
    //         }
    //     };
    // },

    // updateDimensions: function () {
    //     return this.setState({
    //         window: {
    //             height: window.innerHeight,
    //             width: window.innerWidth
    //         }
    //     });
    // },

    // componentWillMount: function () {
    //     this.updateDimensions();
    // },

    // componentDidMount: function () {
    //     return window.addEventListener('resize', this.updateDimensions);
    // },

    // const style = {
    //     height: 0 //this.state.window.height
    // };

    return (
        <header id='home'  className="flex items-center mb-8 md:mb-11">
            {children}
        </header>
    );
};

export default Header;
