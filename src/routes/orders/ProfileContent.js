// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// const useRowStyles = makeStyles({
//   root: {
//     '& > *': {
//       borderBottom: 'unset',
//     },
//   },
// });

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       { date: '2020-01-05', customerId: '11091700', amount: 3 },
//       { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const classes = useRowStyles();

//   return (
//     <React.Fragment>
//       <TableRow className={classes.root}>
//         <TableCell>
//           <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box margin={1}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0),
//   createData('Ice cream sandwich', 237 ,200),
//   createData('Eclair', 262, 16.0),
 
// ];

// export default function CollapsibleTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//             <TableCell />
//             <TableCell>المرحلة</TableCell>
//             <TableCell align="right">مدة التنفيذ</TableCell>
//             <TableCell align="right">مستلم الخدمة</TableCell>
//             <TableCell align="right"></TableCell>
//             <TableCell align="right"></TableCell>

          
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import React from "react"
import { FormattedMessage } from "react-intl"
import CollapseComponent from "./CollapseComponent"

const ProfileContent=({profileDetails,name})=>{
    return(
        <>
        <p className="title m-0" style={{position:"relative"}}>
         {name}
        </p>
        <div className="d-flex mt-3" style={{gap:"20px"}} >
            <img width="80px" height={"70px"} src={"https://estithmar.arabia-it.net" +profileDetails?.files?.[0]?.path} />
            <span style={{alignSelf:"center"}}>
                {profileDetails?.business_name_ar || profileDetails?.asset_name_ar}
            </span>
        </div>
        <div className="d-flex mt-3" style={{gap:"20px"}} >
          <span>رقم الجوال</span>
            <span style={{alignSelf:"center"}}>
                {profileDetails?.user.phone}
            </span>
        </div>
        <div className="d-flex mt-3" style={{gap:"20px"}} >
        <span>البريد الالكتروني</span>
            <span style={{alignSelf:"center"}}>
                {profileDetails?.user.email}
            </span>
        </div>
        <div className="d-flex mt-3" style={{gap:"20px"}} >
        <span> الدولة</span>
            <span style={{alignSelf:"center"}}>
            السعودية
            </span>
        </div>
        <div className="d-flex mt-3" style={{gap:"20px"}} >
        <span> المدينة</span>
            <span style={{alignSelf:"center"}}>
            {profileDetails?.city}
            </span>
        </div>
        <div className="d-flex mt-3" style={{gap:"20px"}} >
        <span> الحي</span>
            <span style={{alignSelf:"center"}}>
            {profileDetails?.district}
            </span>
        </div>
        <div className="d-flex mt-3" style={{gap:"20px"}} >
        <span> الشارع</span>
            <span style={{alignSelf:"center"}}>
            {profileDetails?.street}
            </span>
        </div>

      </>

    )
}
export default ProfileContent