import React from "react";


export default function withHover(Component,hovering='hovering'){
    return class WithHover extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                hovering: false
            }

            this.mouseOver = this.mouseOver.bind(this)
            this.mouseOut = this.mouseOut.bind(this)
        }

        mouseOver(){
            console.log('mouse over')
            this.setState({
                hovering :true
            })
        }

        mouseOut(id){
            this.setState({
                hovering :false
            })
        }

        render(){

            let props = {
                [hovering]: this.state.hovering,
                ...this.props
            }
            console.log(props)
            return(
                <div onMouseOver={this.mouseOver}
                     onMouseOut={this.mouseOut}>
                    <Component

                        {...props}
                    />
                </div>

            )
        }

    }
}
