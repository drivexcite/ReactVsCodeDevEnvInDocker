import React, { Component } from 'react';
import { render } from 'react-dom';

interface Props {
    
}

interface State {
    
}

class App extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                Something else.
            </div>
        )
    }
}

render(<div>Foo</div>, document.getElementById("root"));