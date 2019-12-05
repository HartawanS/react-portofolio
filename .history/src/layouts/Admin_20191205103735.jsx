import React, { Component } from "react";
import { Switch,Route } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

import LandingPage from '../pages/admin2/landingpage';
import AboutMe from '../pages/admin2/aboutme';
import Contact from '../pages/admin2/contact';
import Projects from '../pages/admin2/projects';
import Resume from '../pages/admin2/resume';

class Admin extends Component {
  
  render() {
    return (
      <div className="container">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
              </Switch>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Admin;
