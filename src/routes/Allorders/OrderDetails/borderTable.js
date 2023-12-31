import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import StatusDropDown from "Components/shared/StatusDropDown"
import NoImage from "../../../assets/img/no-image.png"
import UploadImage from "../../../assets/img/ic-upload.png"
import { useRef } from 'react';
import axios from "axios"
import { useSelector } from 'react-redux';
import moment from "moment"
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';
const client = axios.create({
  baseURL: "https://admin.waqfnami.com/api/admin",
});
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
    
    ],
  };
}

function Row(props) {
  const { row ,serviceRequestId,setOrder} = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const [loader,setLoader]=useState()
  const [EnImage,setEnImage]=useState()
  const inputFile = useRef(null);
	const {user}=useSelector(state=>state.authUser.user)
  const client = user.category == "admin" ?axios.create({
    baseURL: "https://admin.waqfnami.com/api/admin",
  }) : 
  axios.create({
    baseURL: "https://admin.waqfnami.com/api",
  })

  const uploadEnimage = (file,row) => {
    console.log(row,"row")
    setLoader(true);
    const formdata = new FormData();
    formdata.append("request_deliveries_id", row.id);
    formdata.append("file", file);
    formdata.append("_method","PUT")
    if(user.category == "admin"){
      client
      .post(`/service-request/${serviceRequestId}`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
        console.log(res,"res")
        client.get(`/service-request/${serviceRequestId}`).then(res=>{
          setOrder(res.data.data)
           
        })
      
      });
    }else{
    formdata.append("token", localStorage.getItem("token"));

      client
      .post(`/provider/request/${serviceRequestId}`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
        console.log(res,"res")
        client.get(`/provider/request/${serviceRequestId}?token=${localStorage.getItem("token")}`).then(res=>{
          setOrder(res.data.data)
           
        })
      
      });
    }
  };
  const DeleteFile=(id)=>{
    client.delete(`/provider/request/${id}?delete_file=true&token=${localStorage.getItem("token")}`).then((res)=>{
      client.get(`/provider/request/${serviceRequestId}?token=${localStorage.getItem("token")}`).then(res=>{
        setOrder(res.data.data)
        // dispatch(OrderDetailsAction(res.data.data))

      })
    })
  
  }
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="right">{row.count || row.days_of_work} { row?.days_of_work  ? "يوم":row["count_type"]}</TableCell>
        <TableCell align="right">
          {/* <StatusDropDown /> */}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <div className='container'>
              <div className='row justify-content-between'>
                <div>
                  <p>
                  مزود الخدمة
                  </p>
                  <p>
                  حالة المرحلة
                </p>
                <div>
                <StatusDropDown borderId={row.id} forServiceProvider={true} inbordertable={true} notAllowed={user.category!="service-provider" ? true :false} activationStatus={row?.provider_status} />
                </div>
                </div>
                <div>
                <p>
                  الوقف     
                </p>
                <p>
                  حالة المرحلة
                </p>
                <div>
                <StatusDropDown inWakfStatus={true} notAllowed={true} activationStatus={row?.owner_status} />
                </div>
                </div>
               
              </div>
              {<>
                <div>
                <table className="table table-hover w-100 mt-2 mb-2">
             <thead>
                 <th>
                  ID
                 </th>
                 <th>
                  الملف
                 </th>
                 <th>
                 بواسطة
                 </th>
                 <th>
                 التاريخ
                 </th>
                 <th>
                 </th>
                
               </thead>
               <tbody>
                 {
                     row?.request_delivery_files?.map((file,index)=><tr>
                         <td>{index +1}</td>
                         <td>{file?.title}</td>
                         <td>{file?.user?.name}</td>
                         <td>{moment(file.created_at).locale("ar").format('DD MMM YYYY')}</td>
                         <td className="d-flex justify-content-center" style={{gap:"10px"}}>
                           <button className="btn btn-info"> 
                           <a href={`https://estithmar.arabia-it.net${file.file}`} target="_blank" download={`https://estithmar.arabia-it.net${file.file}`}>
                           <GetAppIcon  style={{color:"white"}}/>
                           </a>
                           </button>
                           {
                            user.category != "admin" && user.id == file.user.id ? 
                            <button  onClick={()=>DeleteFile(file.id)} className="btn btn-danger"> 
                            <DeleteIcon />
                            </button> : null
                           }
                          
                         </td>

                     </tr>)
                 }

               </tbody>
           </table>
             </div>
                
                              <div className='d-flex justify-content-end'>
                           
                              <div style={{alignSelf:"end"}}>
                                <button 
                                onClick={()=>{
                                    if(row.id){
                                  inputFile.current.click()

                                    }
                                }}
                                style={{marginTop:"10px",background:"#fff",borderColor:"#150941",color:"#150941",fontSize:"14px",padding:"4px 10px"}}> 
                                  <img src={UploadImage} style={{width:"19px"}}/>
                                 {" "}
                                  ارفاق ملفات
                                </button>
                                <input
                            style={{display:"none"}}
                              ref={inputFile}
                              type="file"
                              accept="image/jpeg, jpeg, png, image/png, gif, image/gif"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                uploadEnimage(file,row)
                                // setImage(file)
                              }}
                            />
                              </div>
                            </div>
              </>

              }
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



export default function CollapsibleTable({Delivery,serviceRequestId,setOrder}) {
  console.log(Delivery,"Delivery")
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>المرحلة</TableCell>
            <TableCell align="right">مدة التنفيذ</TableCell>
            <TableCell align="right">مستلم الخدمة</TableCell>
            <TableCell />
            <TableCell />

          </TableRow>
        </TableHead>
        <TableBody>
          {Delivery?.map((row) => (
            <Row key={row.title} row={row} serviceRequestId={serviceRequestId} setOrder={setOrder}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}