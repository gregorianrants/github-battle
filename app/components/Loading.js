import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    content: {
        fontSize: '35px',
        position: 'absolute',
        left: '0',
        right: '0',
        textAlign: 'center'
    }
}

/*export default class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: props.text,
        }
    }

    componentDidMount() {
        const {speed, text} = this.props
        this.interval = window.setInterval(() => {
            this.state.content === text + '...'
                ? this.setState({content: text})
                : this.setState(({content}) => (
                    {
                        content: content + '.'
                    }
                ))
        }, speed)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    render() {
        return (
            <p style={styles.content}>
                {this.state.content}
            </p>
        )
    }
}*/


export default function Loading({speed=300, text: textInitial='Loading'}) {
    const [text, setText] = React.useState(textInitial)

    const updateText=(textInitial)=>{
        setText(text =>
            text === `${textInitial}...` ? textInitial : `${text}.`
        )
    }

    React.useEffect(() => {
        const id = window.setInterval(() => {
            updateText(textInitial)
        }, speed)

        return ()=>{
            window.clearInterval(id)
        }
    }, [textInitial,speed])


    return (
        <p style={styles.content}>
            {text}
        </p>)


}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
    text: "Loading",
    speed: 300
}
