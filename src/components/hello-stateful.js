import React, { Component } from 'react'
// bo React musi być w scope danego komponentu, muszę też doimportować Component tutaj
// ewentualnie mogę bez {Component}, ale wtedy musiałabym poniżej:
// class HelloStateful extends React.Component


class HelloStateful extends Component {
    render() {
        const { name } = this.props;
        return <div>Hello {this.props.name}</div>
    }
}

export default HelloStateful;
