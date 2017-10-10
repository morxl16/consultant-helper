import React, {Component} from 'react';

class StudentCard extends Component{
  constructor(props) {
    super(props);
    this.handleToggle= this.handleToggle.bind(this);
    this.state = {
      toggle: false
    }
  }

  handleToggle (event) {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    let genderStyle = {border: this.props.gender==='m' ? 'cornflowerblue solid' : 'hotpink solid'};

    return (
      <div className="card">
        <a onClick={this.handleToggle}>
          <header className="card-header" style={genderStyle}>
            <div className="card-header-title">
              {this.props.name}
            </div>
          </header>
        </a>
        <div className={`card-content ${!this.state.toggle ? 'is-hidden' : ''}`}>
          <div className="content">
            {
              (this.props.friends[0] !== undefined) ?
                this.props.friends.map(friendName => {
                  return(
                    <input className="input is-success" key={friendName} placeholder={friendName}></input>
                  );
                })
                : <div>
                    <input className="input is-danger" placeholder="הכנס חבר"></input>
                    <input className="input is-danger" placeholder="הכנס חבר"></input>
                    <input className="input is-danger" placeholder="הכנס חבר"></input>
                  </div>
            }
            <button className="button is-primary" style={{margin:'10px 20%'}}>שליחת בקשות</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentCard;
