// sidebar nav links
import React from "react"
export default {
   // category1: [
   //    {
   //       "menu_title": "sidebar.dashboard",
   //       "menu_icon": "zmdi zmdi-view-dashboard",
   //       "type_multi": null,
   //       "new_item": true,
   //       "child_routes": [
   //          {
   //             "menu_title": "sidebar.ecommerce",
   //             "new_item": false,
   //             "path": "/app/dashboard/ecommerce"
   //          },
   //          {
   //             "path": "/dashboard/crm/dashboard",
   //             "new_item": true,
   //             "menu_title": "sidebar.crm"
   //          },
   //          {
   //             "path": "/horizontal/dashboard/saas",
   //             "new_item": false,
   //             "menu_title": "sidebar.saas"
   //          },
   //          {
   //             "path": "/agency/dashboard/agency",
   //             "new_item": false,
   //             "menu_title": "sidebar.agency"
   //          },
   //          {
   //             "path": "/boxed/dashboard/news",
   //             "new_item": false,
   //             "menu_title": "sidebar.news"
   //          },
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.crm",
   //       "menu_icon": "zmdi zmdi-book",
   //       "type_multi": null,
   //       "new_item": true,
   //       "child_routes": [
   //          {
   //             "path": "/dashboard/crm/projects",
   //             "new_item": true,
   //             "menu_title": "sidebar.projects"
   //          },
   //          {
   //             "path": "/dashboard/crm/clients",
   //             "new_item": true,
   //             "menu_title": "sidebar.clients"
   //          },
   //          {
   //             "path": "/dashboard/crm/reports",
   //             "new_item": true,
   //             "menu_title": "sidebar.reports"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.ecommerce",
   //       "menu_icon": "zmdi zmdi-shopping-cart",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/ecommerce/shop",
   //             "new_item": false,
   //             "menu_title": "sidebar.shop"
   //          },
   //          {
   //             "path": "/app/ecommerce/cart",
   //             "new_item": false,
   //             "menu_title": "sidebar.cart"
   //          },
   //          {
   //             "path": "/app/ecommerce/checkout",
   //             "new_item": false,
   //             "menu_title": "sidebar.checkout"
   //          },
   //          {
   //             "path": "/app/ecommerce/shop-list",
   //             "new_item": false,
   //             "menu_title": "sidebar.shopList"
   //          },
   //          {
   //             "path": "/app/ecommerce/shop-grid",
   //             "new_item": false,
   //             "menu_title": "sidebar.shopGrid"
   //          },
   //          {
   //             "path": "/app/ecommerce/invoice",
   //             "new_item": false,
   //             "menu_title": "sidebar.invoice"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.widgets",
   //       "menu_icon": "zmdi zmdi-widgets",
   //       "path": "/app/widgets",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/widgets/charts",
   //             "new_item": false,
   //             "menu_title": "sidebar.charts"
   //          },
   //          {
   //             "path": "/app/widgets/promo",
   //             "new_item": false,
   //             "menu_title": "sidebar.promo"
   //          },
   //          {
   //             "path": "/app/widgets/general",
   //             "new_item": false,
   //             "menu_title": "sidebar.general"
   //          },
   //          {
   //             "path": "/app/widgets/user",
   //             "new_item": false,
   //             "menu_title": "sidebar.user"
   //          },


   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.pages",
   //       "menu_icon": "zmdi zmdi-file-plus",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/app/pages/gallery",
   //             "new_item": false,
   //             "menu_title": "sidebar.gallery"
   //          },
   //          {
   //             "path": "/app/pages/pricing",
   //             "new_item": false,
   //             "menu_title": "sidebar.pricing"
   //          },
   //          {
   //             "path": "/app/pages/blank",
   //             "menu_title": "sidebar.blank"
   //          },
   //          {
   //             "path": "/terms-condition",
   //             "menu_title": "sidebar.terms&Conditions"
   //          },
   //          {
   //             "path": "/app/pages/feedback",
   //             "menu_title": "sidebar.feedback"
   //          },
   //          {
   //             "path": "/app/pages/report",
   //             "menu_title": "sidebar.report"
   //          },
   //          {
   //             "path": "/app/pages/faq",
   //             "menu_title": "sidebar.faq(s)"
   //          }
   //       ]
   //    },
   //    {
   //       "menu_title": "sidebar.session",
   //       "menu_icon": "zmdi zmdi-time-interval",
   //       "type_multi": null,
   //       "new_item": false,
   //       "child_routes": [
   //          {
   //             "path": "/session/login",
   //             "new_item": false,
   //             "menu_title": "sidebar.login"
   //          },
   //          {
   //             "path": "/session/register",
   //             "new_item": false,
   //             "menu_title": "sidebar.register"
   //          },
   //          {
   //             "path": "/session/lock-screen",
   //             "new_item": false,
   //             "menu_title": "sidebar.lockScreen"
   //          },
   //          {
   //             "path": "/session/forgot-password",
   //             "new_item": false,
   //             "menu_title": "sidebar.forgotPassword"
   //          },
   //          {
   //             "path": "/session/404",
   //             "new_item": false,
   //             "menu_title": "sidebar.404"
   //          },
   //          {
   //             "path": "/session/500",
   //             "new_item": false,
   //             "menu_title": "sidebar.500"
   //          }
   //       ]
   //    }
   // ],
   category2: [
      {
         "menu_title": "sidebar.home",
         svg:true,
         "menu_icon": <svg id="ic-home" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28.5 28.362">
                     <path id="Layer_2" data-name="Layer 2" d="M30.131,15.291l-2.017-1.97L17.079,2.358a1.139,1.139,0,0,0-1.661,0L4.383,13.2l-1.97,1.946a1.187,1.187,0,1,0,1.661,1.685v12.34A1.187,1.187,0,0,0,5.261,30.36H27.307a1.187,1.187,0,0,0,1.187-1.187V16.953a1.234,1.234,0,0,0,.831.332,1.21,1.21,0,0,0,.854-.356,1.163,1.163,0,0,0-.047-1.637ZM12.4,28.106V18.424h7.119v9.682Zm13.669,0H21.944V17.237a1.21,1.21,0,0,0-1.187-1.187H11.265a1.21,1.21,0,0,0-1.187,1.187V28.106H6.4V14.6L16.249,4.85,26.073,14.6Z" transform="translate(-1.993 -1.998)" fill="#fff"/>
                   </svg>,
         "path": "/app/home",
         "new_item": false,
         "child_routes": null
      },
      {
         "menu_title": "ادارة الخدمات",
         svg:true,
         "menu_icon":
         <svg xmlns="http://www.w3.org/2000/svg"  width="28" height="28" viewBox="0 0 34.666 34.666">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_5635" data-name="Rectangle 5635" width="34.666" height="34.666" fill="#fff"/>
    </clipPath>
  </defs>
  <g id="ic-services" clip-path="url(#clip-path)">
    <path id="Path_22610" data-name="Path 22610" d="M207.812,214.953a7.143,7.143,0,0,1,0-14.286,7.074,7.074,0,0,1,4.383,1.5.4.4,0,1,1-.492.633,6.279,6.279,0,0,0-3.891-1.334,6.341,6.341,0,1,0,5.117,2.6.4.4,0,0,1,.647-.474,7.143,7.143,0,0,1-5.764,11.362" transform="translate(-190.479 -190.477)" fill="#fff"/>
    <path id="Path_22611" data-name="Path 22611" d="M19.7,34.666H14.963a1.468,1.468,0,0,1-1.456-1.291l-.4-3.329a.248.248,0,0,0-.168-.2,13.25,13.25,0,0,1-1.345-.559.237.237,0,0,0-.251.024L8.7,31.382a1.468,1.468,0,0,1-1.943-.117L3.4,27.913a1.468,1.468,0,0,1-.117-1.943l2.075-2.645a.237.237,0,0,0,.024-.251,13.208,13.208,0,0,1-.559-1.345.248.248,0,0,0-.2-.168l-3.329-.4A1.468,1.468,0,0,1,0,19.7V14.963a1.468,1.468,0,0,1,1.291-1.456l3.329-.4a.248.248,0,0,0,.2-.168,13.212,13.212,0,0,1,.559-1.345.237.237,0,0,0-.024-.251L3.284,8.7A1.468,1.468,0,0,1,3.4,6.753l.838-.838a.508.508,0,0,1,.718.718l-.838.838a.452.452,0,0,0-.036.6l2.075,2.645a1.246,1.246,0,0,1,.14,1.318,12.182,12.182,0,0,0-.516,1.241,1.258,1.258,0,0,1-1.04.839l-3.329.4a.452.452,0,0,0-.4.448V19.7a.452.452,0,0,0,.4.448l3.329.4a1.258,1.258,0,0,1,1.04.839A12.175,12.175,0,0,0,6.3,22.634a1.246,1.246,0,0,1-.14,1.318L4.083,26.6a.452.452,0,0,0,.036.6l3.352,3.352a.452.452,0,0,0,.6.036l2.645-2.075a1.246,1.246,0,0,1,1.318-.14,12.208,12.208,0,0,0,1.241.516,1.257,1.257,0,0,1,.839,1.039l.4,3.329a.452.452,0,0,0,.448.4H19.7a.452.452,0,0,0,.448-.4l.4-3.33a1.257,1.257,0,0,1,.839-1.039,12.2,12.2,0,0,0,1.241-.516,1.246,1.246,0,0,1,1.319.14L26.6,30.583a.452.452,0,0,0,.6-.036l3.352-3.352a.452.452,0,0,0,.036-.6l-2.075-2.645a1.246,1.246,0,0,1-.14-1.318,12.189,12.189,0,0,0,.515-1.241,1.258,1.258,0,0,1,1.04-.839l3.329-.4a.452.452,0,0,0,.4-.448V14.963a.452.452,0,0,0-.4-.448l-3.329-.4a1.257,1.257,0,0,1-1.04-.839,12.2,12.2,0,0,0-.516-1.241,1.246,1.246,0,0,1,.139-1.318l2.075-2.645a.452.452,0,0,0-.036-.6L27.195,4.119a.452.452,0,0,0-.6-.036L23.952,6.158a1.246,1.246,0,0,1-1.319.14,12.2,12.2,0,0,0-1.241-.515,1.258,1.258,0,0,1-.839-1.039l-.4-3.329a.452.452,0,0,0-.448-.4H14.963a.452.452,0,0,0-.448.4l-.4,3.329a1.257,1.257,0,0,1-.839,1.039,12.2,12.2,0,0,0-1.241.516,1.246,1.246,0,0,1-1.318-.14L8.069,4.083a.452.452,0,0,0-.6.036l-.838.838a.508.508,0,0,1-.718-.718L6.753,3.4A1.468,1.468,0,0,1,8.7,3.284l2.645,2.075a.237.237,0,0,0,.251.024,13.216,13.216,0,0,1,1.345-.559.248.248,0,0,0,.168-.2l.4-3.329A1.468,1.468,0,0,1,14.963,0H19.7A1.468,1.468,0,0,1,21.16,1.291l.4,3.329a.248.248,0,0,0,.168.2,13.2,13.2,0,0,1,1.345.559.237.237,0,0,0,.251-.024L25.97,3.284a1.468,1.468,0,0,1,1.943.117l3.352,3.352A1.468,1.468,0,0,1,31.382,8.7l-2.075,2.645a.237.237,0,0,0-.024.251,13.213,13.213,0,0,1,.559,1.345.248.248,0,0,0,.2.168l3.329.4a1.468,1.468,0,0,1,1.291,1.456V19.7a1.468,1.468,0,0,1-1.291,1.456l-3.329.4a.248.248,0,0,0-.2.168,13.211,13.211,0,0,1-.559,1.345.237.237,0,0,0,.024.251l2.075,2.645a1.468,1.468,0,0,1-.117,1.943l-3.352,3.352a1.468,1.468,0,0,1-1.943.117l-2.645-2.075a.237.237,0,0,0-.251-.024,13.226,13.226,0,0,1-1.344.559.248.248,0,0,0-.168.2l-.4,3.329A1.468,1.468,0,0,1,19.7,34.666" fill="#fff"/>
  </g>
</svg>
         ,
         "path": "/app/services",
         "new_item": false,
         "child_routes": null
      },
      {
         "menu_title": "sidebar.mange_orders",
         svg:true,
         "menu_icon": <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32.283 42.513">
         <g id="ic-list-tlbat" transform="translate(0.1 0.097)">
           <path id="ee47538cf3b5865ca347bca87575e6bd" d="M33.437,5.551h-3.72a3.646,3.646,0,0,0-3.571-2.917c-.02.035-9.916-.07-10.208,0a3.646,3.646,0,0,0-3.571,2.916H8.646A3.646,3.646,0,0,0,5,9.2V41.281a3.646,3.646,0,0,0,3.646,3.646H33.437a3.646,3.646,0,0,0,3.646-3.646V9.2A3.646,3.646,0,0,0,33.437,5.551Zm-17.5-1.458H26.146a2.187,2.187,0,0,1,0,4.375H15.937a2.187,2.187,0,0,1,0-4.375ZM35.625,41.281a2.187,2.187,0,0,1-2.187,2.187H8.646a2.187,2.187,0,0,1-2.187-2.187V9.2A2.187,2.187,0,0,1,8.646,7.01h3.72a3.646,3.646,0,0,0,3.571,2.917H26.146A3.646,3.646,0,0,0,29.717,7.01h3.72A2.187,2.187,0,0,1,35.625,9.2ZM11.562,27.426H17.4a2.187,2.187,0,0,0,2.187-2.187V23.781a.729.729,0,0,0-1.458,0v1.458a.729.729,0,0,1-.729.729H11.562a.729.729,0,0,1-.729-.729V19.406a.729.729,0,0,1,.729-.729H17.4a.729.729,0,0,0,0-1.458H11.562a2.187,2.187,0,0,0-2.187,2.187v5.833A2.187,2.187,0,0,0,11.562,27.426Zm8.286-9.266-4.64,4.64-1.724-1.724a.729.729,0,1,0-1.031,1.031l2.24,2.238a.729.729,0,0,0,1.031,0l5.157-5.155A.729.729,0,1,0,19.85,18.16Zm-.995,18.016a.729.729,0,0,0-.729.729v1.458a.729.729,0,0,1-.729.729H11.562a.729.729,0,0,1-.729-.729V32.531a.729.729,0,0,1,.729-.729H17.4a.729.729,0,0,0,0-1.458H11.562a2.187,2.187,0,0,0-2.187,2.187v5.833a2.187,2.187,0,0,0,2.187,2.188H17.4a2.187,2.187,0,0,0,2.187-2.187V36.906A.729.729,0,0,0,18.854,36.176Zm.995-4.891-4.64,4.64L13.485,34.2a.729.729,0,1,0-1.031,1.031l2.24,2.238a.729.729,0,0,0,1.031,0l5.157-5.155a.729.729,0,1,0-1.031-1.031ZM15.937,14.3h8.75a.729.729,0,0,0,0-1.458h-8.75a.729.729,0,1,0,0,1.458Zm16.042,5.833h-8.75a.729.729,0,0,0,0,1.458h8.75a.729.729,0,1,0,0-1.458Zm0,2.917h-8.75a.729.729,0,0,0,0,1.458h8.75a.729.729,0,1,0,0-1.458Zm0,10.208h-8.75a.729.729,0,1,0,0,1.458h8.75a.729.729,0,1,0,0-1.458Zm0,2.917h-8.75a.729.729,0,0,0,0,1.458h8.75a.729.729,0,1,0,0-1.458Z" transform="translate(-5 -2.61)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
         </g>
       </svg>
       ,
         "path": "/app/",
         "new_item": false,
         "child_routes": null
      },
      {
         "menu_title": "sidebar.awkaf",
         svg:true,
         "menu_icon": 
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28.889 24.058">
  <g id="ic-users-waqf" transform="translate(1 1.058)">
    <path id="Path_22582" data-name="Path 22582" d="M19.556,19.333V16.889A4.889,4.889,0,0,0,14.667,12H4.889A4.889,4.889,0,0,0,0,16.889v2.444" transform="translate(0 2.667)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd"/>
    <circle id="Ellipse_209" data-name="Ellipse 209" cx="5" cy="5" r="5" transform="translate(4.444)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_22583" data-name="Path 22583" d="M23.556,21.971V19.527a4.889,4.889,0,0,0-3.667-4.73M15,.13A4.889,4.889,0,0,1,15,9.6" transform="translate(3.333 0.029)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd"/>
  </g>
</svg>

         ,
         "path": "/app/owners-assets",
         "new_item": false,
         "child_routes": null
      },
      {
         "menu_title": "sidebar.service_Suppliments",
         svg:true,
         "menu_icon": 
         <svg id="ic-serv-mzod" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 40.375 40.027">
         <ellipse id="Ellipse_207" data-name="Ellipse 207" cx="0.631" rx="0.63" transform="translate(0 35.796)" fill="#fff"/>
         <path id="Path_22572" data-name="Path 22572" d="M7.224,147.5H6.489a.523.523,0,0,0,0,1.044h.734a.523.523,0,0,0,0-1.044Zm36.466,0h-.734a.523.523,0,0,0,0,1.044h.734a.523.523,0,0,0,0-1.044Z" transform="translate(-4.902 -112.169)" fill="#fff"/>
         <ellipse id="Ellipse_208" data-name="Ellipse 208" cx="0.631" rx="0.631" transform="translate(39.114 35.796)" fill="#fff"/>
         <path id="Path_22573" data-name="Path 22573" d="M66.3,155.5H64.136a.523.523,0,0,0,0,1.044H66.3a.523.523,0,0,0,0-1.044Zm-15.655,0H48.482a.523.523,0,0,0,0,1.044h2.168a.523.523,0,0,0,0-1.044Zm11.962,0H52.175a.522.522,0,1,0,0,1.044h4.159v.522H54.262a.522.522,0,0,0,0,1.044h6.523a.522.522,0,0,0,0-1.044H58.452v-.522h4.159a.522.522,0,1,0,0-1.044Z" transform="translate(-37.205 -118.082)" fill="#fff"/>
         <path id="Path_22574" data-name="Path 22574" d="M58,33.923v5.74a1.045,1.045,0,0,0,1.044,1.044h11.48a1.045,1.045,0,0,0,1.044-1.044v-5.74a4.179,4.179,0,0,0-4.175-4.175h-.058a3.653,3.653,0,1,0-5.1,0h-.058A4.179,4.179,0,0,0,58,33.923Zm4.175-6.784a2.609,2.609,0,1,1,2.609,2.609A2.609,2.609,0,0,1,62.175,27.139Zm5.218,3.653a3.135,3.135,0,0,1,3.131,3.131v5.74H59.044v-5.74a3.135,3.135,0,0,1,3.131-3.131Z" transform="translate(-44.596 -18.007)" fill="#fff"/>
         <path id="Path_22575" data-name="Path 22575" d="M47.929,53.417H37.174l1.407-.579a.966.966,0,0,0,.524-1.262l-.425-1.021a13.345,13.345,0,0,0,1.2-.8l.786.782a.976.976,0,0,0,1.373,0l1.371-1.364a.964.964,0,0,0,0-1.366l-.786-.782a13.269,13.269,0,0,0,.8-1.19l1.026.422a.977.977,0,0,0,1.269-.521l.742-1.784a.966.966,0,0,0-.527-1.262l-1.024-.422a13.965,13.965,0,0,0,.279-1.4H46.3a.968.968,0,0,0,.971-.965V33.142a3.877,3.877,0,0,0-3.882-3.862h-.053a3.392,3.392,0,1,0-4.746,0h-.053a3.844,3.844,0,0,0-1.218.2,4.877,4.877,0,0,1,.755.808,2.927,2.927,0,0,1,.463-.041h4.853a2.906,2.906,0,0,1,2.912,2.9v5.31H39.02a1.918,1.918,0,0,1-.262.965H46.3V39.9H44.761a.485.485,0,0,0-.483.43,12.457,12.457,0,0,1-.417,2.09.482.482,0,0,0,.281.579l1.419.587-.742,1.784L43.4,44.783A.485.485,0,0,0,42.79,45,12.747,12.747,0,0,1,41.6,46.767a.479.479,0,0,0,.036.642l1.087,1.084-1.371,1.364L40.26,48.775a.485.485,0,0,0-.645-.036,12.823,12.823,0,0,1-1.781,1.188.48.48,0,0,0-.214.606l.59,1.412-1.793.739-.59-1.412a.488.488,0,0,0-.582-.28,12.638,12.638,0,0,1-2.1.415.484.484,0,0,0-.432.48v1.53H30.771v-1.53a.484.484,0,0,0-.432-.48c-.7-.077-2.191-.434-2.235-.434a.49.49,0,0,0-.449.3l-.59,1.412-1.793-.739.59-1.412a.48.48,0,0,0-.214-.606,12.822,12.822,0,0,1-1.781-1.188.485.485,0,0,0-.645.036l-1.089,1.081-1.371-1.364,1.087-1.084a.479.479,0,0,0,.036-.642A12.746,12.746,0,0,1,20.692,45a.485.485,0,0,0-.609-.212l-1.419.587-.742-1.784L19.341,43a.483.483,0,0,0,.281-.579,12.457,12.457,0,0,1-.417-2.09.485.485,0,0,0-.483-.43H17.184v-.483h7.541a1.918,1.918,0,0,1-.262-.965H17.184v-5.31a2.906,2.906,0,0,1,2.912-2.9h4.853a2.927,2.927,0,0,1,.463.041,4.877,4.877,0,0,1,.755-.809,3.844,3.844,0,0,0-1.218-.2h-.053a3.392,3.392,0,1,0-4.746,0H20.1a3.877,3.877,0,0,0-3.882,3.862V39.9a.968.968,0,0,0,.971.965h1.111a13.961,13.961,0,0,0,.279,1.4l-1.024.422a.966.966,0,0,0-.526,1.262l.742,1.784a.975.975,0,0,0,1.269.521l1.026-.422a13.266,13.266,0,0,0,.8,1.19l-.786.782a.964.964,0,0,0,0,1.366l1.371,1.364a.976.976,0,0,0,1.373,0l.786-.782a13.346,13.346,0,0,0,1.2.8l-.425,1.021a.966.966,0,0,0,.524,1.262l1.407.579H15.553a.49.49,0,0,0-.477.221.485.485,0,0,0,0,.523.49.49,0,0,0,.477.221H47.929a.49.49,0,0,0,.477-.221.485.485,0,0,0,0-.523A.49.49,0,0,0,47.929,53.417ZM40.961,29.28a2.414,2.414,0,1,1,2.426-2.414A2.42,2.42,0,0,1,40.961,29.28ZM20.1,26.866a2.426,2.426,0,1,1,2.426,2.414A2.42,2.42,0,0,1,20.1,26.866ZM29.8,53.417H27.692a.956.956,0,0,0,.272-.364l.425-1.019a14.157,14.157,0,0,0,1.412.278Zm3.882,0V52.311a14.161,14.161,0,0,0,1.412-.278l.425,1.019a.956.956,0,0,0,.272.364Z" transform="translate(-11.553 -18.008)" fill="#fff"/>
         <path id="Path_22576" data-name="Path 22576" d="M66.336,89.5a9.652,9.652,0,0,1-19.276,0h1.046a8.608,8.608,0,0,0,17.184,0Z" transform="translate(-36.51 -68.501)" fill="#fff"/>
         <path id="Path_22577" data-name="Path 22577" d="M27.2,4.065a.76.76,0,0,0,.735-.783.736.736,0,1,0-1.469,0,.761.761,0,0,0,.735.783Zm0-1.174a.392.392,0,1,1-.367.391A.38.38,0,0,1,27.2,2.891ZM42.021,19.72a.523.523,0,1,0,.49.522A.507.507,0,0,0,42.021,19.72Zm0,.783a.261.261,0,1,1,.245-.261A.253.253,0,0,1,42.021,20.5ZM4.795,4.261a.523.523,0,1,0,.49.522A.507.507,0,0,0,4.795,4.261Zm0,.783a.261.261,0,1,1,.245-.261A.253.253,0,0,1,4.795,5.044Zm37.642.391a.523.523,0,1,0,.49.522A.507.507,0,0,0,42.436,5.435Zm0,.783a.261.261,0,1,1,.245-.261A.253.253,0,0,1,42.436,6.218ZM9.8,10.654a.491.491,0,1,0-.49.522A.507.507,0,0,0,9.8,10.654Zm-.735,0a.245.245,0,1,1,.245.261A.253.253,0,0,1,9.067,10.654Z" transform="translate(-3.649 -2.5)" fill="#fff"/>
         <path id="Path_22578" data-name="Path 22578" d="M8.528,66.673l.388-.51-.245-.139-.249.571H8.414l-.253-.567-.249.143.384.5v.008L7.7,66.6v.278l.6-.077v.008l-.388.5.232.147.266-.576h.008l.245.571L8.92,67.3l-.392-.49V66.8l.616.074V66.6l-.616.081Z" transform="translate(-6.155 -50.459)" fill="#fff"/>
         <path id="Path_22579" data-name="Path 22579" d="M66.764,18.489l-.223.287.134.085.153-.332h0l.141.329.148-.085-.226-.282v0l.355.042v-.16l-.355.047v0l.223-.294-.141-.08-.143.329h0l-.146-.327-.144.082.221.287v0l-.346-.045v.16l.348-.045Z" transform="translate(-50.566 -13.984)" fill="#fff"/>
         <path id="Path_22580" data-name="Path 22580" d="M154.778,39.843v-.272l-.6.08v-.008l.38-.5-.24-.136-.244.56h-.008l-.248-.557-.244.14.376.488v.008l-.589-.076v.272l.593-.076v.008l-.38.488.228.144.26-.565h.008l.24.561.252-.144-.384-.481v-.008Z" transform="translate(-116.334 -30.061)" fill="#fff"/>
         <path id="Path_22581" data-name="Path 22581" d="M127.79,14.8l.328-.432-.207-.117-.211.483h-.007l-.214-.48-.211.121.325.422V14.8l-.508-.066v.235l.511-.066v.007l-.328.421.2.124.225-.487h.007l.207.483.218-.124-.332-.414V14.91l.522.062v-.235l-.522.069Z" transform="translate(-96.374 -11.184)" fill="#fff"/>
       </svg>

         ,
         "path": "/app/service-provider",
         "new_item": false,
         "child_routes": null
      },
      {
         "menu_title": "sidebar.consultans",
         svg:true,
         "menu_icon": 
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28.889 24.058">
  <g id="ic-users-waqf" transform="translate(1 1.058)">
    <path id="Path_22582" data-name="Path 22582" d="M19.556,19.333V16.889A4.889,4.889,0,0,0,14.667,12H4.889A4.889,4.889,0,0,0,0,16.889v2.444" transform="translate(0 2.667)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd"/>
    <circle id="Ellipse_209" data-name="Ellipse 209" cx="5" cy="5" r="5" transform="translate(4.444)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_22583" data-name="Path 22583" d="M23.556,21.971V19.527a4.889,4.889,0,0,0-3.667-4.73M15,.13A4.889,4.889,0,0,1,15,9.6" transform="translate(3.333 0.029)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd"/>
  </g>
</svg>

         ,
         "path": "/app/advisors",
         "new_item": false,
         "child_routes": null
      },
      {
         "menu_title": "sidebar.Supporters_donors",
         svg:true,
         "menu_icon": 
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28.889 24.058">
  <g id="ic-users-waqf" transform="translate(1 1.058)">
    <path id="Path_22582" data-name="Path 22582" d="M19.556,19.333V16.889A4.889,4.889,0,0,0,14.667,12H4.889A4.889,4.889,0,0,0,0,16.889v2.444" transform="translate(0 2.667)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd"/>
    <circle id="Ellipse_209" data-name="Ellipse 209" cx="5" cy="5" r="5" transform="translate(4.444)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_22583" data-name="Path 22583" d="M23.556,21.971V19.527a4.889,4.889,0,0,0-3.667-4.73M15,.13A4.889,4.889,0,0,1,15,9.6" transform="translate(3.333 0.029)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd"/>
  </g>
</svg>

         ,
         "path": "/app/",
         "new_item": false,
         "child_routes": null
      },
      {
         "menu_title": "sidebar.manage_wallet",
         svg:true,
         "menu_icon": 
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 40.676 34.321">
         <g id="ic-money" transform="translate(0.15 0.169)">
           <path id="Path_22449" data-name="Path 22449" d="M33.756,7.872a.531.531,0,0,0,.531-.531V5.572a1.743,1.743,0,0,0-1.74-1.74H29.692L29.04,1.909a.531.531,0,0,0-.658-.338L12.92,6.272a.532.532,0,0,0,.31,1.017L28.2,2.737,29.627,6.95a.531.531,0,1,0,1.006-.341l-.581-1.716h2.5a.678.678,0,0,1,.678.678v1.77A.53.53,0,0,0,33.756,7.872Z" transform="translate(0.786 0.098)" fill="#fff" stroke="#fff" stroke-width="0.3"/>
           <path id="Path_22450" data-name="Path 22450" d="M38.782,15.938a.531.531,0,0,0,0,1.063c.373,0,.531.158.531.531v6.375c0,.373-.158.531-.531.531h-8.5c-.373,0-.531-.158-.531-.531V18.594c0-.373.158-.531.531-.531h6.375a.531.531,0,0,0,.531-.531V11.157a1.494,1.494,0,0,0-1.594-1.594H3.188A1.972,1.972,0,0,1,1.063,7.438,1.972,1.972,0,0,1,3.188,5.313H8.581L5.366,6.373A.531.531,0,1,0,5.7,7.381L24.95,1.035A.532.532,0,1,0,24.617.026L11.76,4.265a.415.415,0,0,0-.072-.015h-8.5A3.018,3.018,0,0,0,0,7.438V30.813A3.018,3.018,0,0,0,3.188,34H35.595a1.494,1.494,0,0,0,1.594-1.594V27.095a.531.531,0,0,0-1.063,0v5.313c0,.373-.158.531-.531.531H3.188a1.972,1.972,0,0,1-2.125-2.125V9.894a3.228,3.228,0,0,0,2.125.731H35.595c.373,0,.531.158.531.531V17H30.282a1.494,1.494,0,0,0-1.594,1.594v5.313A1.494,1.494,0,0,0,30.282,25.5h8.5a1.494,1.494,0,0,0,1.594-1.594V17.532A1.494,1.494,0,0,0,38.782,15.938Z" transform="translate(0 0.001)" fill="#fff" stroke="#fff" stroke-width="0.3"/>
           <circle id="Ellipse_3" data-name="Ellipse 3" cx="0.833" cy="0.833" r="0.833" transform="translate(33.521 20.333)" fill="#fff" stroke="#fff" stroke-width="0.3"/>
         </g>
       </svg>
       

         ,
         "path": "/app/",
         "new_item": false,
         "child_routes": null
      },
      {
         "menu_title": "sidebar.mange_users",
         svg:true,
         "menu_icon": 
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28.889 24.058">
  <g id="ic-users-waqf" transform="translate(1 1.058)">
    <path id="Path_22582" data-name="Path 22582" d="M19.556,19.333V16.889A4.889,4.889,0,0,0,14.667,12H4.889A4.889,4.889,0,0,0,0,16.889v2.444" transform="translate(0 2.667)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd"/>
    <circle id="Ellipse_209" data-name="Ellipse 209" cx="5" cy="5" r="5" transform="translate(4.444)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_22583" data-name="Path 22583" d="M23.556,21.971V19.527a4.889,4.889,0,0,0-3.667-4.73M15,.13A4.889,4.889,0,0,1,15,9.6" transform="translate(3.333 0.029)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd"/>
  </g>
</svg>

         ,
         "path": "/app/users",
         "new_item": false,
         "child_routes": null
      },
     
      {
         "menu_title": "sidebar.mange_reports",
         svg:true,
         "menu_icon": 
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 34.833 34.833">
         <g id="ic-reports" transform="translate(0.75 0.75)">
           <line id="Line_123" data-name="Line 123" y2="11.433" transform="translate(8.951 13.67)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
           <line id="Line_124" data-name="Line 124" y2="16.905" transform="translate(16.729 8.198)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
           <line id="Line_125" data-name="Line 125" y2="5.392" transform="translate(24.381 19.712)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
           <path id="Path_22451" data-name="Path 22451" d="M24.476,0H8.857C3.413,0,0,3.853,0,9.309V24.025c0,5.455,3.4,9.309,8.857,9.309H24.476c5.46,0,8.857-3.853,8.857-9.309V9.309C33.333,3.853,29.937,0,24.476,0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/>
         </g>
       </svg>
         ,
         "path": "/app/",
         "new_item": false,
         "child_routes": null
      },
      {
         "menu_title": "sidebar.wakf_library",
         svg:true,
         "menu_icon": 
         <svg id="ic-library" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 33.334 28.806">
  <path id="Path_22586" data-name="Path 22586" d="M47.726,71.366a1.213,1.213,0,0,0-1.057-.682H45.561V54.332a2.422,2.422,0,0,0-2.42-2.42H34.6V49.159a1.728,1.728,0,0,0-1.726-1.726H29.762a1.728,1.728,0,0,0-1.726,1.726v.084a1.729,1.729,0,0,0-.345-.035H24.582a1.728,1.728,0,0,0-1.726,1.726v.977H19.489a2.422,2.422,0,0,0-2.42,2.42V70.684H15.962a1.213,1.213,0,0,0-1.057.682,2.267,2.267,0,0,0,.044,2.176.694.694,0,0,0,.082.106c2.437,2.591,2.562,2.591,2.9,2.591H44.7c.333,0,.458,0,2.9-2.591a.7.7,0,0,0,.082-.106A2.267,2.267,0,0,0,47.726,71.366ZM18.153,74.858c-.356-.322-1.274-1.264-2.059-2.1a.961.961,0,0,1,0-.7H27.172v.3a1.785,1.785,0,0,0,1.783,1.783h4.722a1.785,1.785,0,0,0,1.783-1.783v-.3H46.535a.961.961,0,0,1,0,.7c-.784.832-1.7,1.774-2.059,2.1Zm.3-20.526a1.04,1.04,0,0,1,1.038-1.038h3.367v17.39H18.451Zm6.132-3.742H27.69a.346.346,0,0,1,.345.345v.74h-3.8v-.74A.346.346,0,0,1,24.582,50.59Zm5.179-1.776h3.108a.346.346,0,0,1,.345.345v.74h-3.8v-.74A.346.346,0,0,1,29.762,48.814Zm3.453,3.5h-3.8V51.28h3.8ZM44.18,54.332V66.2L39.322,55.777a1.728,1.728,0,0,0-2.294-.835L34.6,56.077V53.293h8.546A1.04,1.04,0,0,1,44.18,54.332Zm-9.552,3.634a.346.346,0,0,1,.167-.459l2.816-1.313a.345.345,0,0,1,.459.167l.313.671-3.442,1.605Zm9.116,11.379-2.816,1.313a.346.346,0,0,1-.459-.167l-3.923-8.413,3.442-1.605,3.923,8.413A.328.328,0,0,1,43.744,69.345Zm-10.53,1.338h-3.8V53.7h3.8Zm1.381,0V61.165l4.439,9.519Zm1.367-9.856-.438-.939,3.442-1.605.438.939ZM24.237,55.473h3.8V70.684h-3.8Zm4.316,16.6h5.525v.289a.4.4,0,0,1-.4.4H28.954a.4.4,0,0,1-.4-.4v-.289Zm-.518-19.016v1.036h-3.8V53.056Z" transform="translate(-14.648 -47.433)" fill="#fff"/>
  <path id="Path_22587" data-name="Path 22587" d="M163.072,338.3h-1.381a.691.691,0,1,0,0,1.381h1.381a.691.691,0,1,0,0-1.381Zm3.8,1.381h1.381a.691.691,0,1,0,0-1.381H166.87a.691.691,0,1,0,0,1.381Zm11.319-2.127-1.252.584a.691.691,0,1,0,.584,1.252l1.252-.584a.691.691,0,0,0-.584-1.252Z" transform="translate(-150.893 -317.459)" fill="#fff"/>
</svg>
         ,
         "path": "/app/",
         "new_item": false,
         "child_routes": null
      },
     
      {
         "menu_title": "sidebar.questions",
         svg:true,
         "menu_icon": 
         <svg id="ic-q_A" data-name="ic-q&amp;A" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 39.474 24.99">
               <g id="_Group_" data-name="&lt;Group&gt;" transform="translate(11.199 4.145)">
                  <path id="_Group_2" data-name="&lt;Group&gt;" d="M171.731,227.641a.729.729,0,0,1,.212.529.7.7,0,0,1-.225.55.752.752,0,0,1-.516.2.775.775,0,0,1-.533-.2.69.69,0,0,1-.229-.554.72.72,0,0,1,.221-.529.744.744,0,0,1,.541-.212A.729.729,0,0,1,171.731,227.641Z" transform="translate(-168.762 -221.355)" fill="#fff"/>
                  <path id="_Group_3" data-name="&lt;Group&gt;" d="M152.08,151.691a2.919,2.919,0,0,1,1.283.267,2.1,2.1,0,0,1,.854.725,1.773,1.773,0,0,1,.3,1,1.576,1.576,0,0,1-.171.746,2.343,2.343,0,0,1-.412.554c-.158.154-.441.416-.85.783a2.84,2.84,0,0,0-.275.271,1.138,1.138,0,0,0-.15.216.931.931,0,0,0-.079.192c-.017.067-.046.179-.083.346a.555.555,0,0,1-.6.516.617.617,0,0,1-.437-.167.684.684,0,0,1-.175-.508,1.77,1.77,0,0,1,.475-1.266,7.926,7.926,0,0,1,.579-.55q.319-.281.462-.425a1.48,1.48,0,0,0,.242-.316.788.788,0,0,0,.1-.379.89.89,0,0,0-.3-.675,1.091,1.091,0,0,0-.77-.275,1.065,1.065,0,0,0-.808.275,2.217,2.217,0,0,0-.441.82c-.112.375-.325.562-.641.562a.647.647,0,0,1-.475-.2.6.6,0,0,1-.192-.429,1.8,1.8,0,0,1,.3-.962,2.375,2.375,0,0,1,.891-.808A2.8,2.8,0,0,1,152.08,151.691Z" transform="translate(-149.523 -151.69)" fill="#fff"/>
               </g>
               <g id="_Group_4" data-name="&lt;Group&gt;">
                  <path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" d="M29.576,115.4a7.7,7.7,0,0,0,0-15.4H17.523a7.7,7.7,0,0,0,0,15.4h2.363v4.8a.647.647,0,0,0,.408.6.653.653,0,0,0,.241.046.627.627,0,0,0,.465-.179l5.052-5.26Zm-4.267-1.1-4.14,4.3v-3.879a.6.6,0,0,0-.631-.6H17.523a6.415,6.415,0,0,1,0-12.829H29.576a6.415,6.415,0,0,1,0,12.829h-3.8a.637.637,0,0,0-.469.179Z" transform="translate(-9.851 -100)" fill="#fff"/>
                  <path id="_Path_" data-name="&lt;Path&gt;" d="M216.756,152h-2.89a.641.641,0,1,0,0,1.283h2.89a6.375,6.375,0,0,1,0,12.749H213.74a.666.666,0,0,0-.631.679v3.878l-4.14-4.341a.673.673,0,0,0-.469-.216h-3.8a6.325,6.325,0,0,1-3.492-1.021.644.644,0,0,0-.888.194.625.625,0,0,0,.184.874,7.61,7.61,0,0,0,4.2,1.236h3.524l5.05,5.3a.651.651,0,0,0,.464.207.662.662,0,0,0,.244-.041.64.64,0,0,0,.408-.591v-4.873h2.363a7.658,7.658,0,1,0,0-15.315Z" transform="translate(-184.953 -147.83)" fill="#fff"/>
               </g>
         </svg>
         ,
         "path": "/app/",
         "new_item": false,
         "child_routes": null
      },
    


   ],
   category3: [
      {
         "menu_title": "sidebar.uiComponents",
         "menu_icon": "zmdi zmdi-wrench",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/ui-components/alerts",
               "new_item": false,
               "menu_title": "sidebar.alerts"
            },
            {
               "path": "/app/ui-components/app-bar",
               "new_item": false,
               "menu_title": "sidebar.appBar"
            },
            {
               "path": "/app/ui-components/avatars",
               "new_item": false,
               "menu_title": "sidebar.avatars"
            },
            {
               "path": "/app/ui-components/buttons",
               "new_item": false,
               "menu_title": "sidebar.buttons"
            },
            {
               "path": "/app/ui-components/bottom-navigations",
               "new_item": false,
               "menu_title": "sidebar.bottomNavigations"
            },
            {
               "path": "/app/ui-components/badges",
               "new_item": false,
               "menu_title": "sidebar.badges"
            },
            {
               "path": "/app/ui-components/cards",
               "new_item": false,
               "menu_title": "sidebar.cards"
            },
            {
               "path": "/app/ui-components/cards-masonry",
               "new_item": false,
               "menu_title": "sidebar.cardsMasonry"
            },
            {
               "path": "/app/ui-components/chip",
               "new_item": false,
               "menu_title": "sidebar.chip"
            },
            {
               "path": "/app/ui-components/dialog",
               "new_item": false,
               "menu_title": "sidebar.dialog"
            },
            {
               "path": "/app/ui-components/dividers",
               "new_item": false,
               "menu_title": "sidebar.dividers"
            },
            {
               "path": "/app/ui-components/drawers",
               "new_item": false,
               "menu_title": "sidebar.drawers"
            },
            {
               "path": "/app/ui-components/expansion-panel",
               "new_item": false,
               "menu_title": "sidebar.expansionPanel"
            },
            {
               "path": "/app/ui-components/grid-list",
               "new_item": false,
               "menu_title": "sidebar.gridList"
            },
            {
               "path": "/app/ui-components/list",
               "new_item": false,
               "menu_title": "sidebar.list"
            },
            {
               "path": "/app/ui-components/menu",
               "new_item": false,
               "menu_title": "sidebar.menu"
            },
            {
               "path": "/app/ui-components/popover",
               "new_item": false,
               "menu_title": "sidebar.popoverAndToolTip"
            },
            {
               "path": "/app/ui-components/progress",
               "new_item": false,
               "menu_title": "sidebar.progress"
            },
            {
               "path": "/app/ui-components/snackbar",
               "new_item": false,
               "menu_title": "sidebar.snackbar"
            },
            {
               "path": "/app/ui-components/selection-controls",
               "new_item": false,
               "menu_title": "sidebar.selectionControls"
            }
         ]
      },
      {
         "menu_title": "sidebar.advancedComponent",
         "menu_icon": "zmdi zmdi-view-carousel",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/advanced-component/dateTime-picker",
               "new_item": false,
               "menu_title": "sidebar.dateAndTimePicker"
            },
            {
               "path": "/app/advanced-component/tabs",
               "new_item": false,
               "menu_title": "sidebar.tabs"
            },
            {
               "path": "/app/advanced-component/stepper",
               "new_item": false,
               "menu_title": "sidebar.stepper"
            },
            {
               "path": "/app/advanced-component/notification",
               "new_item": false,
               "menu_title": "sidebar.notification"
            },
            {
               "path": "/app/advanced-component/sweet-alert",
               "new_item": false,
               "menu_title": "sidebar.sweetAlert"
            },
            {
               "path": "/app/advanced-component/auto-complete",
               "new_item": false,
               "menu_title": "sidebar.autoComplete"
            }
         ]
      },
      {
         "menu_title": "sidebar.aboutUs",
         "menu_icon": "zmdi zmdi-info",
         "path": "/app/about-us",
         "new_item": false,
         "child_routes": null
      }
   ],
   category4: [
      {
         "menu_title": "sidebar.forms",
         "menu_icon": "zmdi zmdi-file-text",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/forms/form-elements",
               "new_item": false,
               "menu_title": "sidebar.formElements"
            },
            {
               "path": "/app/forms/text-field",
               "new_item": false,
               "menu_title": "sidebar.textField"
            },
            {
               "path": "/app/forms/select-list",
               "new_item": false,
               "menu_title": "sidebar.selectList"
            }
         ]
      },
      {
         "menu_title": "sidebar.charts",
         "menu_icon": "zmdi zmdi-chart-donut",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/charts/re-charts",
               "new_item": false,
               "menu_title": "sidebar.reCharts"
            },
            {
               "path": "/app/charts/react-chartjs2",
               "new_item": false,
               "menu_title": "sidebar.reactChartjs2"
            }
         ]
      },
      {
         "menu_title": "sidebar.icons",
         "menu_icon": "zmdi zmdi-star",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/icons/themify-icons",
               "new_item": false,
               "menu_title": "sidebar.themifyIcons"
            },
            {
               "path": "/app/icons/simple-lineIcons",
               "new_item": false,
               "menu_title": "sidebar.simpleLineIcons"
            },
            {
               "path": "/app/icons/material-icons",
               "new_item": false,
               "menu_title": "sidebar.materialIcons"
            }
         ]
      },
      {
         "menu_title": "sidebar.tables",
         "menu_icon": "zmdi zmdi-grid",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/tables/basic",
               "new_item": false,
               "menu_title": "sidebar.basic"
            },
            {
               "path": "/app/tables/data-table",
               "new_item": false,
               "menu_title": "sidebar.dataTable"
            },
            {
               "path": "/app/tables/responsive",
               "new_item": false,
               "menu_title": "sidebar.responsive"
            }
         ]
      }
   ],
   category5: [
      {
         "menu_title": "sidebar.maps",
         "menu_icon": "zmdi zmdi-map",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/maps/google-maps",
               "new_item": false,
               "menu_title": "sidebar.googleMaps"
            },
            {
               "path": "/app/maps/leaflet-maps",
               "new_item": false,
               "menu_title": "sidebar.leafletMaps"
            }
         ]
      },
      {
         "menu_title": "sidebar.users",
         "menu_icon": "zmdi zmdi-accounts",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/users/user-profile-1",
               "new_item": false,
               "menu_title": "sidebar.userProfile1"
            },
            {
               "path": "/app/users/user-profile",
               "new_item": false,
               "menu_title": "sidebar.userProfile2"
            },
            {
               "path": "/app/users/user-management",
               "new_item": false,
               "menu_title": "sidebar.userManagement"
            },
            {
               "path": "/app/users/user-list",
               "new_item": false,
               "menu_title": "sidebar.userList"
            }
         ]
      },
      {
         "menu_title": "sidebar.calendar",
         "menu_icon": "zmdi zmdi-calendar-note",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/calendar/basic",
               "new_item": false,
               "menu_title": "components.basic"
            },
            {
               "path": "/app/calendar/cultures",
               "new_item": false,
               "menu_title": "sidebar.cultures"
            },
            {
               "path": "/app/calendar/selectable",
               "new_item": false,
               "menu_title": "sidebar.selectable"
            },
            {
               "path": "/app/calendar/custom-rendering",
               "new_item": false,
               "menu_title": "sidebar.customRendering"
            }
         ]
      },
      {
         "menu_title": "sidebar.editor",
         "menu_icon": "zmdi zmdi-edit",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/editor/wysiwyg-editor",
               "new_item": false,
               "menu_title": "sidebar.wysiwygEditor"
            },
            {
               "path": "/app/editor/quill-editor",
               "new_item": false,
               "menu_title": "sidebar.quillEditor"
            }
         ]
      },
      {
         "menu_title": "sidebar.dragAndDrop",
         "menu_icon": "zmdi zmdi-mouse",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/drag-andDrop/react-dragula",
               "new_item": false,
               "menu_title": "sidebar.reactDragula"
            },
            {
               "path": "/app/drag-andDrop/react-dnd",
               "new_item": false,
               "menu_title": "sidebar.reactDnd"
            }
         ]
      },
      {
         "menu_title": "sidebar.multiLevel",
         "menu_icon": "zmdi zmdi-view-web",
         "type_multi": true,
         "new_item": false,
         "child_routes": [
            {
               "menu_title": "sidebar.level1",
               "child_routes": [
                  {
                     "path": "/app/level2",
                     "menu_title": "sidebar.level2"
                  }
               ]
            }
         ]
      },
   ],
   category6: [
      {
         "menu_title": "sidebar.imageCropper",
         "menu_icon": "zmdi zmdi-crop",
         "path": "/app/image-cropper",
         "new_item": false,
         "child_routes": null

      },
      {
         "menu_title": "sidebar.videoPlayer",
         "menu_icon": "zmdi zmdi-collection-video",
         "path": "/app/video-player",
         "new_item": false,
         "child_routes": null
      },
      {
         "menu_title": "sidebar.dropzone",
         "menu_icon": "zmdi zmdi-dropbox",
         "path": "/app/dropzone",
         "new_item": false,
         "child_routes": null
      }
   ]
}
