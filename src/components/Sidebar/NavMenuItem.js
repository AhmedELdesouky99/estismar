// /**
//  * Nav Menu Item
//  */
// import React, { Fragment, Component } from 'react';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Collapse from '@material-ui/core/Collapse';
// import { NavLink } from 'react-router-dom';
// import classNames from 'classnames';
// import Chip from '@material-ui/core/Chip';
// // intl messages
// import IntlMessages from 'Util/IntlMessages';
// import Home from "../../assets/img/ic-home.svg"
// class NavMenuItem extends Component {

//    state = {
//       subMenuOpen: ''
//    }
// 	/**
//    * On Toggle Collapse Menu
//    */
//    onToggleCollapseMenu(index) {
//       if (this.state.subMenuOpen === '') {
//          this.setState({
//             subMenuOpen: index
//          })
//       }
//       else if (this.state.subMenuOpen !== index) {
//          this.setState({
//             subMenuOpen: index
//          })
//       }
//       else {
//          this.setState({ subMenuOpen: '' });
//       }
//    }

//    render() {
//       const { menu, onToggleMenu } = this.props;
//       const { subMenuOpen } = this.state;
//       const home =require('Assets/img/ic-home.svg')
//       if (menu.child_routes != null) {
//          return (
//             <Fragment>
//                <ListItem button component="li" onClick={onToggleMenu} className={`list-item ${classNames({ 'item-active': menu.open })}`}>
//                   <ListItemIcon className="menu-icon">
//                      {console.log( menu.menu_icon," menu.menu_icon")}
//                      {
//                         menu.menu_icon.includes("svg") ? 
// 								<img src={require(`Assets/img/${menu.menu_icon}`)} className="img-fluid" alt="site-icon"/>

//                         : 
//                      <i className={menu.menu_icon}></i>


//                      }
//                   </ListItemIcon>
//                   <span className="menu text-capitalize">
//                      <IntlMessages id={menu.menu_title} />

//                   </span>
//                   {menu.new_item && menu.new_item === true ?
//                      <Chip label="new" className="new-item" color="secondary" />
//                      :
//                      ''
//                   }
//                </ListItem>
//                <Collapse in={menu.open} timeout="auto" className="sub-menu">
//                   <Fragment>
//                      {menu.type_multi == null ?
//                         <List className="list-unstyled py-0">
//                            {menu.child_routes.map((subMenu, index) => {
//                               return (
//                                  <ListItem button component="li" key={index}>
//                                     <NavLink to={subMenu.path} activeClassName="item-active" >
//                                        <span className="menu">
//                                           <IntlMessages id={subMenu.menu_title} />

//                                        </span>
//                                        {subMenu.new_item && subMenu.new_item === true ?
//                                           <Chip label="new" className="new-item" color="secondary" />
//                                           :
//                                           ''
//                                        }
//                                     </NavLink>
//                                  </ListItem>
//                               )
//                            })}
//                         </List>
//                         :
//                         <List className="list-unstyled py-0">
//                            {menu.child_routes.map((subMenu, index) => {
//                               return (
//                                  <Fragment key={index}>
//                                     <ListItem button component="li"
//                                        onClick={() => this.onToggleCollapseMenu(index)}
//                                        className={`list-item ${classNames({ 'item-active': subMenuOpen === index })}`}
//                                     >
//                                        <span className="menu">
//                                           <IntlMessages id={subMenu.menu_title} />
//                                           {menu.new_item && menu.new_item === true ?
//                                              <Chip label="new" className="new-item" color="secondary" />
//                                              :
//                                              null
//                                           }
//                                        </span>
//                                     </ListItem>
//                                     <Collapse in={subMenuOpen === index} timeout="auto">
//                                        <List className="list-unstyled py-0">
//                                           {subMenu.child_routes.map((nestedMenu, nestedKey) => (
//                                              <ListItem button component="li" key={nestedKey}>
//                                                 <NavLink activeClassName="item-active" to={nestedMenu.path}>
//                                                    <span className="menu pl-10 d-inline-block">
//                                                       <IntlMessages id={nestedMenu.menu_title} />
//                                                       {menu.new_item && menu.new_item === true ?
//                                                          <Chip label="new" className="new-item" color="secondary" />
//                                                          :
//                                                          null
//                                                       }
//                                                    </span>
//                                                 </NavLink>
//                                              </ListItem>
//                                           ))}
//                                        </List>
//                                     </Collapse>
//                                  </Fragment>
//                               )
//                            })}
//                         </List>
//                      }
//                   </Fragment>
//                </Collapse>
//             </Fragment>
//          )
//       }
//       return (
//          <ListItem button component="li" style={{padding:"1rem 1rem" }}>
//             {/* <NavLink activeClassName="item-active" to={menu.path}> */}
//                <span className="menu-icon">
//                   {
//                      menu.svg?
//                      // {require('Assets/img/ic-home.svg'}
//                      // <img src={Home} className="img-fluid" alt="site-icon"/>
                     
//                      menu.menu_icon
//                       : 
//                   <i className={menu.menu_icon}></i>

//                   }
//                </span>
//                <span className="menu">
//                   <IntlMessages id={menu.menu_title} />
//                </span>
//             {/* </NavLink> */}
//          </ListItem>
//       );
//    }
// }

// export default NavMenuItem;
import React, { Fragment, Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import { NavLink, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import Chip from '@material-ui/core/Chip';
// intl messages
import IntlMessages from 'Util/IntlMessages';
import Home from "../../assets/img/ic-home.svg"
import { useDispatch, useSelector } from 'react-redux';
import {
   ChangeRoute
} from 'Actions';
const NavMenuItem =({ menu, onToggleMenu })=>{
   const history =useHistory()
	const {user}=useSelector(state=>state.authUser.user)
   const dispatch=useDispatch()
   const handelClickItem =(index,path)=>{
         dispatch(ChangeRoute(index))
         setTimeout(()=>{
            history.push(path)
         },3000)
   }
      return (
         <ListItem button component="li" style={{padding:  user.category  == "service-provider" ? "1rem 1rem" :"" }}>
            {
              user.category  == "service-provider" ? 
             <div onClick={()=>handelClickItem(menu.index,menu.path)}>
              <span className="menu-icon">
              {
                 menu.svg?
                 // {require('Assets/img/ic-home.svg'}
                 // <img src={Home} className="img-fluid" alt="site-icon"/>
                 
                 menu.menu_icon
                  : 
              <i className={menu.menu_icon}></i>

              }
           </span>
           <span className="menu">
              <IntlMessages id={menu.menu_title} />
           </span> 
             </div>
             
              : 
             <NavLink activeClassName="item-active" to={menu.path}>
             <span className="menu-icon">
                {
                   menu.svg?
                   // {require('Assets/img/ic-home.svg'}
                   // <img src={Home} className="img-fluid" alt="site-icon"/>
                   
                   menu.menu_icon
                    : 
                <i className={menu.menu_icon}></i>

                }
             </span>
             <span className="menu">
                <IntlMessages id={menu.menu_title} />
             </span>
          </NavLink>
            }
          
         </ListItem>
      );

}
export default NavMenuItem