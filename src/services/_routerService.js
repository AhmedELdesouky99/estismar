// routes
import Widgets from 'Routes/widgets';
import Pages from 'Routes/pages';
import AdvanceUIComponents from 'Routes/advance-ui-components';
import CalendarComponents from 'Routes/calendar';
import ChartsComponents from 'Routes/charts';
import FormElements from 'Routes/forms';
import Users from 'Routes/users';
import Components from 'Routes/components';
import Tables from 'Routes/tables';
import Icons from 'Routes/icons';
import Maps from 'Routes/maps';
import DragAndDrop from 'Routes/drag-drop';
import Editor from 'Routes/editor';
import Ecommerce from 'Routes/ecommerce';
import Dashboard from 'Routes/dashboard';
import Crm from 'Routes/crm';
import ImageCropper from 'Routes/image-cropper';
import VideoPlayer from 'Routes/video-player';
import Dropzone from 'Routes/dropzone';
import ServiceProviders from "Routes/service-providers"
import OwnersAssets from "Routes/owner-assets"
import AllServices from "Routes/AllServices"
import AllAdvisors from "Routes/Advisors"
import AllOrders from 'Routes/Allorders';
import ManageUsers from 'Routes/ManageUsers';
import ManageOrders from 'Routes/orders';


// async component
import {
   AsyncAboutUsComponent,
   AsyncChatComponent,
   AsyncMailComponent,
   AsyncTodoComponent,
} from 'Components/AsyncComponent/AsyncComponent';

export default [
   {
      path: 'dashboard',
      component: Dashboard
   },
   {
      path: 'crm',
      component: Crm
   },
   {
      path: 'widgets',
      component: Widgets
   },
   {
      path: 'ecommerce',
      component: Ecommerce
   },
   {
      path: 'icons',
      component: Icons
   },
   {
      path: 'about-us',
      component: AsyncAboutUsComponent
   },
   {
      path: 'pages',
      component: Pages
   },
   {
      path: 'chat',
      component: AsyncChatComponent
   },
   {
      path: 'mail',
      component: AsyncMailComponent
   },
   {
      path: 'todo',
      component: AsyncTodoComponent
   },
   {
      path: 'charts',
      component: ChartsComponents
   },
   {
      path: 'tables',
      component: Tables
   },
   {
      path: 'maps',
      component: Maps
   },
   
   {
      path: 'ui-components',
      component: Components
   },
   {
      path: 'advanced-component',
      component: AdvanceUIComponents
   },
   {
      path: 'drag-andDrop',
      component: DragAndDrop
   },
   {
      path: 'forms',
      component: FormElements
   },
   {
      path: 'editor',
      component: Editor
   },
   {
      path: 'calendar',
      component: CalendarComponents
   },
   {
      path: 'image-cropper',
      component: ImageCropper
   },
   {
      path: 'video-player',
      component: VideoPlayer
   },
   {
      path: 'dropzone',
      component: Dropzone
   },
   {
      path: 'service-provider',
      component: ServiceProviders
   },
   {
      path: 'owners-assets',
      component: OwnersAssets
   },
   {
      path: 'services',
      component: AllServices
   },
   {
      path: 'advisors',
      component: AllAdvisors
   },
   
   {
      path:"users",
      component:ManageUsers
   },
   {
      path:"orders",
      component:AllOrders
   }
   
]