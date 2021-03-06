import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/popular'
import Battle from "./components/battle";
import Results from "./components/Results";
import { ThemeProvider} from "./contexts/theme";
import Nav from './components/Nav'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";


/*class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light',
            toggleTheme: ()=>{
                this.setState(({theme})=>(
                    {
                        theme: theme === 'light' ? 'dark' : 'light'
                    }
                ))
            }
        }
    }

    render() {
        return (
            <Router>
            <ThemeProvider value={this.state}>
                <div className={this.state.theme}>
                    <div className='container'>
                        <Nav/>
                        <Switch>
                            <Route exact path='/' component={Popular}/>
                            <Route exact path='/battle' component={Battle}/>
                            <Route path='/battle/results' component={Results}/>
                            <Route render={()=> <h1>404</h1>} />
                        </Switch>
                    </div>
                </div>
            </ThemeProvider>
            </Router>
        )
    }
}*/

function App(){
    const [theme,setTheme] = React.useState('light')

    const toggleTheme=()=>{
        setTheme(theme=>(
            theme==='light' ? 'dark' : 'light'
        ))
    }

    const themeMemo =React.useMemo(()=>{
        return {
            theme,toggleTheme
        }
    },[theme])

    return (
        <Router>
            <ThemeProvider value={themeMemo}>
                <div className={theme}>
                    <div className='container'>
                        <Nav/>
                        <Switch>
                            <Route exact path='/' component={Popular}/>
                            <Route exact path='/battle' component={Battle}/>
                            <Route path='/battle/results' component={Results}/>
                            <Route render={()=> <h1>404</h1>} />
                        </Switch>
                    </div>
                </div>
            </ThemeProvider>
        </Router>
    )


}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
