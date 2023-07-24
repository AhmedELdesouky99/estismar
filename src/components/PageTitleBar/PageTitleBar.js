/**
 * Page Title Bar Component
 * Used To Display Page Title & Breadcrumbs
 */
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// intl messages
import IntlMessages from 'Util/IntlMessages';
import { useSelector } from 'react-redux';

// get display string
const getDisplayString = (sub,end,lastElement =undefined) => {
   const arr = sub.split("-");
   if (arr.length > 1) {
      return <IntlMessages id={`sidebar.${arr[0].charAt(0) + arr[0].slice(1) + arr[1].charAt(0) + arr[1].slice(1)}`} />
   } else if(end && lastElement ) {
      return lastElement
   } else{
      if(!end)
      return <IntlMessages id={`${sub.charAt(0) + sub.slice(1)}`} />
      else return <IntlMessages id={`${sub.charAt(0) + sub.slice(1)}`} />
   }

};

// get url string
const getUrlString = (path, sub, index) => {
   if (index === 0) {
      return '/';
   } else {
      return '/' + path.split(sub)[0] + sub;
   }
};

const PageTitleBar = ({ title, match, enableBreadCrumb,lastElement=undefined }) => {
	const {user}=useSelector(state=>state.authUser.user)

   const path = match?.pathname?.substr(1);
   const subPath = path?.split('/');
   return (
      <div className="page-title d-flex justify-content-between align-items-center">
         {/* {title &&
            <div className="page-title-wrap">
               <i className="ti-angle-left"></i>
               <h2 className="">{title}</h2>
            </div>
         } */}
         {enableBreadCrumb &&
            <Breadcrumb className="mb-0" tag="nav">
               {subPath?.map((sub, index) => {
                  return <BreadcrumbItem active={subPath.length === index + 1}
                     tag={ sub =="service-provider" && user.category !="admin" ?  "span":  subPath.length === index + 1   ? "span" : Link} key={index}
                     to={getUrlString(path, sub, index)}>{getDisplayString(sub,subPath.length === index + 1,lastElement)}</BreadcrumbItem>
               }
               )}
            </Breadcrumb>
         }
      </div>
   )
};

// default props value
PageTitleBar.defaultProps = {
   enableBreadCrumb: true
}

export default PageTitleBar;
