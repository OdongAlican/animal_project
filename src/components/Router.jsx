import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Partnership from './Partnership'
import Charity from './Charity'
import About from './About'
import Donation from './Donation'
import Gallary from './Gallary'
import Research from './Research'
import Volunteer from './Volunteers'
import Membership from './Membership'
import School from './School'

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ Home } exact />
                    <Route path="/contact" component={ Contact }/>
                    <Route path="/partnership" component={ Partnership }/>
                    <Route path="/charities" component={ Charity }/>
                    <Route path="/about" component={ About }/>
                    <Route path="/donations" component={ Donation }/>
                    <Route path="/gallary" component={ Gallary }/>
                    <Route path="/research" component={ Research }/>
                    <Route path="/volunteers" component={ Volunteer }/>
                    <Route path="/members" component={ Membership }/>
                    <Route path="/schools" component={ School }/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router