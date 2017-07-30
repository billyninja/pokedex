import React from 'react';

class Preview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
    }

    render() {
        return (
            <div className="">
                <h2>trainer preview here!</h2>
            </div>
        );
    }
}

export {Preview};
