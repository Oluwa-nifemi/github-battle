import React from 'react'

export default class Hover extends React.Component{
    state = { hovering: false }

    mouseOver = () => this.setState({ hovering: true })
    
    mouseOut = () =>  this.setState({ hovering: false })

    render(){
        return (
            <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
                {this.props.children(this.state.hovering)}
            </div>
        )
    }

}