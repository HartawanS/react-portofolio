import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import LandingPage from '../pages/admin2/landingpage';
import AboutMe from '../pages/admin2/aboutme';
import Contact from '../pages/admin2/contact';
import Projects from '../pages/admin2/projects';
import Resume from '../pages/admin2/resume';

class Admin2 extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <Layout fixedHeader>
            <Header className="header-admin2" title={
            <Link style={{textDecoration: 'none', color: 'white'}} to="/admin2">MyPortfolio</Link>
            } scroll>
                <Navigation>
                    <Link to="/admin2/resume">Resume</Link>
                    <Link to="/admin2/aboutme">About Me</Link>
                    <Link to="/admin2/projects">Projects</Link>
                    <Link to="/admin2/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
                <Navigation>
                <Link to="/admin2/resume">Resume</Link>
                <Link to="/admin2/aboutme">About Me</Link>
                <Link to="/admin2/projects">Projects</Link>
                <Link to="/admin2/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Route exact path="/admin2" component={LandingPage} />
                <Route path="/admin2/aboutme" component={AboutMe} />
                <Route path="/admin2/contact" component={Contact} />
                <Route path="/admin2/projects" component={Projects} />
                <Route path="/admin2/resume" component={Resume} />
            </Content>
        </Layout>
      </div>
    );
  }
}

export default Admin2;
