import React from 'react';
import { alpha, makeStyles, rgbToHex } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';

import Navbar from './CompanyNavbar';
import NavFloating from './NavFloating';

import sample1 from '../images/people/person1.jpeg'
import sample2 from '../images/people/person2.jpeg'
import dragon_glass from '../images/people/person3.jpeg'

import searchIcon from '../images/search.png'
import appleLogo from '../images/apple-logo.png'
import pieChart from '../images/pie-chart.png'
import walletImg from '../images/wallet.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import PaymentIcon from '@material-ui/icons/Payment';

//Transaction Debit/credit/pending
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import EjectIcon from '@material-ui/icons/Eject';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';

import DataUsageRoundedIcon from '@material-ui/icons/DataUsageRounded';
import SearchIcon from '@material-ui/icons/Search';

import Chart from "react-apexcharts";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
import ZoomLine from "fusioncharts/fusioncharts.zoomline"

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, ZoomLine, Column2D, FusionTheme);


const chartData = [
  {
    label: "Founders",
    value: "285040"
  },
  {
    label: "Employees",
    value: "146330"
  },
  {
    label: "Investor A",
    value: "105070"
  },
  {
    label: "Option Pool",
    value: "49100"
  }
];

// Create a JSON object to store the chart configurations
const doughnutConfigs = {
  type: "doughnut2d", // The chart type
  width: "360", // Width of the chart
  height: "360", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      // caption: "Companies Market Share",
      // subCaption: "Last year",
      numberPrefix: "$",
      bgColor: "#fbfafa",
      startingAngle: "310",
      showLegend: "1",
      defaultCenterLabel: "Total Shares: $64.08K",
      centerLabel: "$label: $value",
      centerLabelBold: "1",
      enableSmartLabels: "0",
      showLegend: '1',
      // doughnutRadius:'85',
      // showTooltip: "0",
      // showPercentValues: "1",
      valuePosition: 'inside',
      labelPosition: "inside",
      minAngleForLabel: "360",
      showPercentInTooltip: "1",
      decimals: "0",
      theme: "fusion"
    },
    // Chart Data - from step 2
    data: chartData
  }
};

const valuationData = [
  {
    label: "03:34, 25Jun",
    value: "35000$"
  },
  {
    label: "03:34, 25Jun",
    value: "34000$"
  },
  {
    label: "03:34, 25Jun",
    value: "37000$"
  },
  {
    label: "03:34, 25Jun",
    value: "32000$"
  },
  {
    label: "03:34, 25Jun",
    value: "40000$"
  },
  {
    label: "03:34, 25Jun",
    value: "50000$"
  },
  {
    label: "03:34, 25Jun",
    value: "47000$"
  },
  {
    label: "03:34, 25Jun",
    value: "53000$"
  },
  {
    label: "03:34, 25Jun",
    value: "30000$"
  }
];

const currencyChart = {
  bgcolor: "#FFFFFF",
  canvasBgColor: "#FFFFFF",
  showBorder: "0",
  showCanvasBorder: "0",
  showLabels: "0",
  drawCrossLine: "1",
  divLineAlpha: "0",
  showYAxisValues: "0",
  chartLeftMargin: "0",
  chartRightMargin: "0",
  canvasRightMargin: "0",
  canvasLeftMargin: "0",
  chartBottomMargin: "0",
  canvasBottomMargin: "0",
  chartTopMargin: "0",
  canvasTopMargin: "0",
  showValues: "0",
  shadow: "0",
  legendPadding: "0",
  showShadow: "0",
  paletteColors: "#3273DC",
  drawAnchors: "0",
  showAlternateHGridColor: "0",
  crossLineColor: "#363636",
  crossLineAlpha: "15",
  drawCrossLineOnTop: "0",
  usePlotGradientColor: "1",
  plotFillAlpha: "15",
  plotColorinTooltip: "0",
  tooltipBorderAlpha: "0",
  toolTipPadding: "0",
  baseFontColor: "#205BBB",
  baseFontSize: "15",
  baseFont: "Nunito",
  tooltipbgalpha: "0",
  plotFillAngle: "90",
  numberPrefix: "$",
  plotToolText: "<b>$label: $dataValue</b>"
}

const nrChartConfig = {
  type: "mscombi2d",
  width: "100%",
  // height: "200",
  dataFormat: "json",
  dataSource: {
    chart: currencyChart,
    categories: [{
      category: valuationData
    }],
    dataset: [
      {
        renderAs: "spline",
        lineThickness: "3",
        alpha: "50",
        data: valuationData
      }, {
        renderAs: "splinearea",
        showPlotBorder: "0",
        plotToolText: " ",
        data: valuationData
      }
    ]
  }
};


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgb(26,27,47)',
    color: 'grey'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'rgb(243,243,248)',
    padding: theme.spacing(0),
  },
  padded: {
    padding: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
}));

export const DashboardCompany = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const series = [ //data on the y-axis
    {
      name: "Temperature in Celsius",
      data: [4132, 4124, 3153, 5323, 5123, 4444, 6532, 7555, 6488, 7690, 3000, 2345]
    }
  ];
  const options = { //data on the x-axis
    series: [{
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    },
    {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: [0, 4]
    },
    // title: {
    //   text: 'Traffic Sources'
    // },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
      type: 'datetime'
    },
    yaxis: [{
      title: {
        text: 'Website Blog',
      },

    },
      // {
      //   opposite: true,
      //   title: {
      //     text: 'Social Media'
      //   }
      // }
    ]
  };


  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
        </AppBar>
        <Navbar />
        <main className={classes.content}>

          <NavFloating />

          <div className='px-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <h5 className='mb-0 ps-2'>Good Morning, Anurag!</h5>
                <p className='text-secondary ps-2'>Here's what's happening with your funds today.</p>
              </div>
              {/* <div className="input-group w-25">
                <input style={{backgroundColor:'white'}} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" disabled />
                <span style={{height:'fit-content'}} className="input-group-text" id="basic-addon2"><DateRangeIcon/></span>
              </div> */}
            </div>

            <div className='d-flex justify-content-between align-center'>

              <div className='bg-white p-3 rounded shadow' style={{ width: '22%' }}>
                <div className='d-flex justify-content-between'>
                  <p className='text-secondary fw-bold'>Company Valuation</p>
                  {/* <p className='fw-bold font13' style={{ color: 'rgb(37, 186, 168)' }}>
                    13.45%</p> */}
                </div>
                <h5>559.2k ꜩ</h5>
                <div className='d-flex justify-content-between align-items-end'>
                  <a href='#' style={{ color: '#405189', textDecoration: 'underline' }}>See Details</a>
                  <div className='p-2 rounded' style={{ backgroundColor: 'rgb(220,242,237)', color: 'rgb(28 163 132)' }}>
                    <MonetizationOnOutlinedIcon />
                  </div>
                </div>
              </div>

              <div className='bg-white p-3 rounded shadow' style={{ width: '22%' }}>
                <div className='d-flex justify-content-between'>
                  <p className='text-secondary fw-bold'>Stock Pricing Per Share</p>
                  {/* <p className='fw-bold font13' style={{ color: 'rgb(200, 51, 51)' }}>
                    13.45%
                  </p> */}
                </div>
                <h5>11 ꜩ</h5>
                <div className='d-flex justify-content-between align-items-end'>
                  <a href='#' style={{ color: '#405189', textDecoration: 'underline' }}>View All Orders</a>
                  <div className='p-2 rounded' style={{ backgroundColor: 'rgba(41,156,219,.18)', color: 'rgba(41,156,219,1)' }}>
                    <LocalMallOutlinedIcon />
                  </div>
                </div>
              </div>

              <div className='bg-white p-3 rounded shadow' style={{ width: '22%' }}>
                <div className='d-flex justify-content-between'>
                  <p className='text-secondary fw-bold'>Investments Recieved</p>
                  {/* <p className='fw-bold font13' style={{ color: 'rgb(37, 186, 168)' }}>13.45%</p> */}
                </div>
                <h5>300.2k ꜩ</h5>
                <div className='d-flex justify-content-between align-items-end'>
                  <a href='#' style={{ color: '#405189', textDecoration: 'underline' }}>See Details</a>
                  <div className='p-2 rounded' style={{ backgroundColor: 'rgba(247,184,75,.18)', color: 'rgba(247,184,75,1)' }}>
                    <AccountCircleOutlinedIcon />
                  </div>
                </div>
              </div>

              <div className='bg-white p-3 rounded shadow' style={{ width: '22%' }}>
                <div className='d-flex justify-content-between'>
                  <p className='text-secondary fw-bold'>Percentage of Ownership</p>
                  {/* <p className='fw-bold font13' style={{ color: 'rgb(37, 186, 168)' }}>13.45%</p> */}
                </div>
                <h5>83 %</h5>
                <div className='d-flex justify-content-between align-items-end'>
                  <a href='#' style={{ color: '#405189', textDecoration: 'underline' }}>See Details</a>
                  <div className='p-2 rounded' style={{ backgroundColor: 'rgba(64,81,137,.18)', color: 'rgba(64,81,137,1)' }}>
                    <AccountBalanceWalletOutlinedIcon />
                  </div>
                </div>
              </div>

            </div>

            <div className='d-flex my-5 justify-content-between'>
              <div className='p-3 bg-white shadow' style={{ width: '60%' }}>
                <h5>Net Worth</h5>
                <div className='d-flex align-items-center my-3 bg-light'>
                  <div className='w-25 text-center border p-2'>
                    <h5 className='m-0 font15 fw-bold'>7,585</h5>
                    <p className='m-0 text-secondary'>Orders</p>
                  </div>
                  <div className='w-25 text-center border p-2'>
                    <h5 className='m-0 font15 fw-bold'>$22.89k</h5>
                    <p className='m-0 text-secondary'>Earnings</p>
                  </div>
                  <div className='w-25 text-center border p-2'>
                    <h5 className='m-0 font15 fw-bold'>367</h5>
                    <p className='m-0 text-secondary'>Funds</p>
                  </div>
                  <div className='w-25 text-center border p-2'>
                    <h5 className='m-0 font15 fw-bold'>18.92%</h5>
                    <p className='m-0 text-secondary'>Conversation Ratio</p>
                  </div>
                </div>
                <ReactFC style={{ backgroundColor: 'white' }} {...nrChartConfig} />
              </div>

              <div className='bg-white p-3 shadow'>
                <h5 className='mb-5'>Company Ownership</h5>
                <ReactFC className='doughnut' style={{ backgroundColor: 'white' }} {...doughnutConfigs} />
              </div>
            </div>

            <div className='d-flex justify-content-between'>
            <div className='bg-white p-3 shadow' style={{ width: '54%' }}>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <h5 className='ms-2 mb-0'>List of Signed Contracts</h5>
                  <p className='me-3 mb-0'>Report</p>
                </div>

                <table className="table table-hover" style={{ overflow: 'auto' }}>
                  <tbody>
                    <tr>
                      <th scope="row"><Avatar style={{ width: '42px', height: '42px' }} alt="Remy Sharp" src={dragon_glass} /></th>
                      <td>
                        <p className='m-0 fw-bold'>Carlo Mann</p>
                      </td>
                      <td className='text-secondary'>Not Converted</td>
                      <td className='text-secondary'>
                        <p className='m-0 fw-bold text-black'>13%</p>
                        <span className='text-secondary font10'>(at Valuation Cap)</span>
                      </td>
                      <td>SAFE</td>
                    </tr>

                    <tr>
                      <th scope="row">
                        <Avatar style={{ width: '42px', height: '42px'}} alt="Remy Sharp" src={sample1} />
                      </th>
                      <td>
                        <p className='m-0 fw-bold'>Matlias Dilon</p>
                      </td>
                      <td className='text-secondary'>Converted</td>
                      <td className='text-black fw-bold'>11%</td>
                      <td>Direct Equity</td>
                    </tr>

                    <tr>
                      <th scope="row">
                        <Avatar style={{ width: '42px', height: '42px'}} alt="Remy Sharp" src={sample2} />
                      </th>
                      <td>
                        <p className='m-0 fw-bold'>Santino Murray</p>
                      </td>
                      <td className='text-secondary'>Converted</td>
                      <td className='text-black fw-bold'>5%</td>
                      <td>SAFE</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='bg-white p-3 shadow' style={{ width: '45%' }}>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <h5 className='ms-2 mb-0'>Cash Flow</h5>
                  <p className='me-3 mb-0'>Report</p>
                </div>

                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <th scope="row"><Avatar style={{ width: '42px', height: '42px' }} alt="Remy Sharp" src={dragon_glass} /></th>
                      <td>
                        <p className='m-0 fw-bold'>Carlo Mann</p>
                        <span className='text-secondary'>Supreme Pvt. Ltd.</span>
                      </td>
                      <td className='fw-bold text-end'>
                        <span style={{ color: 'rgb(37, 186, 168)' }}>+ 1000 ꜩ</span>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row"><Avatar style={{ width: '42px', height: '42px'}} alt="Remy Sharp" src={sample1} /></th>
                      <td>
                        <p className='m-0 fw-bold'>Matlias Dilon</p>
                        <span className='text-secondary'>DragonGlass</span>
                      </td>
                      <td className='fw-bold text-end'>
                      <span style={{ color: 'red' }}>- 800 ꜩ</span>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row"><Avatar style={{ width: '42px', height: '42px'}} alt="Remy Sharp" src={sample2} /></th>
                      <td>
                        <p className='m-0 fw-bold'>Santino Murray</p>
                        <span className='text-secondary'>Phoenix Creations</span>
                      </td>
                      <td className='fw-bold text-end'>
                      <span style={{ color: 'rgb(37, 186, 168)' }}>+ 1200 ꜩ</span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              

            </div>
          </div>

          <div className='mt-4 bg-white d-flex justify-content-between align-items-center p-4 text-secondary font15' style={{ height: '50px' }}>
            <span>2022 © DevilsList.</span>
            <span>Design & Develop by Dev4Bros</span>
          </div>
        </main>
      </div>
    </>
  )
}
