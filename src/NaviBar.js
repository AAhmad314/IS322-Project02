import React from 'react';
import './css/NaviBar.css';

class NaviBar extends React.Component
{

  isActiveTab(barTab)
  {
   return (barTab === this.props.currentView) ? 'nav-link active' : 'nav-link';
  }

  onTabClick(event, barTab)
  {
    event.preventDefault();
    this.props.changeComp(barTab);
  }

  render ()
  {
    return (
      <ul class='nav barTabs'>
        <li class='nav-item'>
         <a class={this.isActiveTab('grid')} onClick={(e) => this.onTabClick(e, 'grid')}>
          Grid View
         </a>
        </li>

        <li class='nav-item'>
          <a class={this.isActiveTab('list')} onClick={(e) => this.onTabClick(e, 'list')}>
           List View
          </a>
        </li>

        <li class='nav-item'>
          <a class={this.isActiveTab('add')} onClick={(e) => this.onTabClick(e, 'add')}>
           Add Task
          </a>
        </li>
      </ul>
    )
  }
};
export default NaviBar;
