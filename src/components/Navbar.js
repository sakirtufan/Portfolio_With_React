import React, { Component } from 'react'
import './Navbar.css'
import './Hero.css'
import Button from './Button';

export default class Navbar extends Component {
  listener = null;
  state = {
    nav: false
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', () => { });
  }
  handleScroll = () => {
    if (window.pageYOffset > 200) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }

  }

  render() {

    return (


      <div>
        <div id="navbar-div">
          <nav>
            <ul className={`Nav ${this.state.nav && 'ul'}`}>
              <div className='hero-buttons'>
                {
                  this.props.buttons.map(button => {
                    return (
                      <Button button={button} key={button.name} />
                    )
                  })
                }
              </div>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
