/**
 * Today Orders Stats
 */
import React from "react";
import CountUp from "react-countup";

// intl messages
import IntlMessages from "Util/IntlMessages";

// rct card box
import { RctCardContent } from "Components/RctCard";

const CustomCard = ({ color ,name}) => (
  <div className="custom-widget " style={{background:color}}>
          <div className="d-flex gap-3" style={{gap:"10px"}}>
        <div className="align-items-end">
        <svg id="ic-users" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:color}} width="36.846" height="36.846" viewBox="0 0 36.846 36.846">
                    <defs>
                        <clipPath id="clip-path">
                        <rect id="Rectangle_5617" data-name="Rectangle 5617" width="36.846" height="36.846" fill={`${color}`}/>
                        </clipPath>
                    </defs>
                <g id="Group_29886" data-name="Group 29886" clip-path="url(#clip-path)">
                    <path id="Path_22548" data-name="Path 22548" d="M652.141,69.247a3.07,3.07,0,1,0-3.07-3.07A3.08,3.08,0,0,0,652.141,69.247Zm1.735,1.689a10.437,10.437,0,0,0-6,.737A3.087,3.087,0,0,0,646,74.513v2.41h6.909V74.451A6.91,6.91,0,0,1,653.876,70.935Zm22.829-1.689a3.07,3.07,0,1,0-3.071-3.07A3.079,3.079,0,0,0,676.705,69.247Zm6.141,5.266a3.087,3.087,0,0,0-1.873-2.84,10.437,10.437,0,0,0-6-.737,6.91,6.91,0,0,1,.967,3.516v2.472h6.909Zm-11.914-4.268a16.033,16.033,0,0,0-6.509-1.382,16.29,16.29,0,0,0-6.509,1.382,4.588,4.588,0,0,0-2.7,4.207v2.472h18.423V74.451A4.588,4.588,0,0,0,670.932,70.245Zm-12.543,3.608c.138-.353.2-.6,1.4-1.059a12.935,12.935,0,0,1,9.274,0c1.181.461,1.244.706,1.4,1.059Zm6.033-12.282a1.535,1.535,0,1,1-1.535,1.535A1.54,1.54,0,0,1,664.423,61.571Zm0-3.071a4.606,4.606,0,1,0,4.606,4.606A4.6,4.6,0,0,0,664.423,58.5Z" transform="translate(-646 -49.289)" fill={color}/>
                </g>
        </svg>

       
        </div>
        <div className="align-items-start mt-2">
          <h2 className="mb-0">
            <CountUp start={0} end={35} />
          </h2>
          <h3 className="mb-10">
            <IntlMessages id={ name ? name : "مزودي الخدمة" }/>
          </h3>
        </div>
      </div>
  </div>
);

export default CustomCard;
