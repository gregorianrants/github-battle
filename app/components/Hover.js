import React from "react";


export default function useHover(){
    const [hovering,setHovering] = React.useState(false)

    const onMouseOver = ()=>{
        setHovering(true)
    }

    const onMouseOut=()=>{
        setHovering(false)
    }

    return [
        hovering, {onMouseOver, onMouseOut}
    ]
}


/*export default class Hover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hovering: false
        }

        this.mouseOver = this.mouseOver.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
    }

    mouseOver() {
        console.log('mouse over')
        this.setState({
            hovering: true
        })
    }

    mouseOut(id) {
        this.setState({
            hovering: false
        })
    }

    render() {
        return (
            <div onMouseOver={this.mouseOver}
                 onMouseOut={this.mouseOut}>
                {this.props.children(this.state.hovering)}
            </div>

        )
    }

}*/

