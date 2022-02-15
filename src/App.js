import Home from './pages/Home'
import Job from './pages/Job'
import Announcement from './pages/Announcement'
import Company from './pages/Company'
import NotFound from './pages/NotFound'

import DetailJob from './pages/DetailJob'
import DetailAnnouncement from './pages/DetailAnnouncement'
import DetailCompany from './pages/DetailCompany'

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
   <div>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact>
          </Route>
          <Route path="/jobs" component={Job}>
          </Route>
          <Route path="/job/:job_id" component={DetailJob}>
          </Route>
          <Route path="/announcements" component={Announcement}>
          </Route>
          <Route path="/announcement/:announcement_id" component={DetailAnnouncement}>
          </Route>
          <Route path="/companies" component={Company}>
          </Route>
          <Route path="/company/:company_id" component={DetailCompany}>
          </Route>
          <Route path="/not_found" component={NotFound}>
          </Route>
        </Switch>
      </Router>
    </Provider>
   </div>
  );
}

export default App;
