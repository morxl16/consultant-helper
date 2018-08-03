import React from 'react';
import legend from '../../Assets/legend.png';

const SideMenu = ({handleNodesSelection, handleEdgesSelection, errorMessage}) => {
  let colorArray = ["#00d1b2", "#23d160", "#3273dc", "#ffdd57", "#ff3860", "#363636"];

  return (
    <nav className="panel">
      <div className="panel-heading">
        <h4 className="title is-4">פעולות</h4>
        <h6 className="subtitle is-6">יש לסמן עיגולים / קווים ואז ללחוץ על צבע לשינוי</h6>
      </div>
      <div className="panel-block">
        <section>
          <h6 className="title is-6">לצביעת עיגולים</h6>
            {
              colorArray.map(color => {
                return <div key={color}
                  onClick={(event) => handleNodesSelection(event, color)}
                  className={`button`}
                  style={{width: '30px', height: '30px', margin: '5px 5px', background: color,  border: 'solid 2px'}} />
              })
            }
        </section>
      </div>
      <div className="panel-block">
        <section>
          <h6 className="title is-6" >לצביעת קווים</h6>
            {
              colorArray.map(color => {
                return <div key={color}
                  onClick={(event) => handleEdgesSelection(event, color)}
                  className={`button`}
                  style={{width: '30px', height: '30px', margin: '5px 5px', background: color,  border: 'solid 2px'}} />
              })
            }
        </section>
      </div>
      <div className="panel-block">
        <section>
          <h6 className="title is-6" >מקרא</h6>
          <img style={{height: '120px'}} src={legend} />
        </section>
      </div>
      {
        errorMessage ?
          <div className="has-text-danger panel-block">
            {errorMessage}
          </div>
        : ''
      }
    </nav>
  );
}

export default SideMenu;
