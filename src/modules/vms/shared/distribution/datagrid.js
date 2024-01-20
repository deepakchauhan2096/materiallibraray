import * as React from 'react';
import "./distribution.css";
import "./modal.css";
import { DataGrid } from '@mui/x-data-grid';
import NestedModal1 from './modal1';
// import RemoveScr from './removeScr'

const columns = [
  { field: 'id', headerName: 'S.No', width: 103 },
  {
    field: 'FirmName',
    headerName: 'Firm Name',
    width: 240,
    editable: true,
  },
  {
    field: 'NetworkType',
    headerName: 'Network Type',
    width: 147,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email ID',
    width: 266,
    editable: true,
  },

  {
    field: 'contact',
    headerName: 'Contact Number',
    width: 181,
    editable: true,
  },

  {
    field: 'Branch',
    headerName: 'Branch Address',
    type: 'number',
    width: 220,
    editable: true,
  },

  // {
  //   field: 'fullName',
  //   headerName: 'Contact Number',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
  // {
  //   field: 'Crud',
  //   headerName: '',
  //   width: 57,
  //   editable: true,
  // }
];




const originalRows = [
  { id: 1, FirmName: 'Snow', NetworkType: 'Jon', Email: 'salman@gmail.com', contact: 9810283824, Branch: 'metro world' },
  { id: 2, FirmName: 'low', NetworkType: 'loan', Email: 'arman@gmail.com', contact: 9810283834, Branch: 'metro world' },
  { id: 3, FirmName: 'wo', NetworkType: 'phone', Email: 'pankajudash@gmail.com', contact: 9830283824, Branch: 'metro world' },
  { id: 4, FirmName: 'cow', NetworkType: 'tone', Email: 'arjitsingh@gmail.com', contact: 9810383824, Branch: 'metro world' },
  { id: 5, FirmName: 'doe', NetworkType: 'don', Email: 'shushantsingh@gmail.com', contact: 983283824, Branch: 'metro world' },
  { id: 6, FirmName: 'no', NetworkType: 'gone', Email: 'arminder@gmail.com', contact: 9810283324, Branch: 'metro world' }
];




export default function Datagrid() {


  return (
    <>
      <div className="container-fluid dis-container">
        {/* heading */}
        <div className="row pad">
          <div className="col-8">
            <div className="row dis-title">Distribution Network</div>
            <div className="row dis-dis">Please input requested details below. Click submit once you are done</div>
          </div>
          <div className="col-4 pr-0">
            <button type="button" className="submit-top-button float-right">Submit</button>
          </div>
        </div>
        {/* heading */}

        {/* headline */}
        <div className="row"><div className="headline"></div></div>
        {/* headline */}


        <div className='grid-row table-flex'>
          {/* info */}
          <div className='info-box1'>
            <div className='info-pad'>
              <div className='totalbranch'>Total Branches : 2</div>
            </div>
          </div>
          <div className='info-box2'>
            <div className='info-pad'>
              <div className='selected-items'>Selected : 2</div>
            </div>
          </div>
          {/* searchbox */}
          <div className='search-box'>
            <div className='search-width'>
              <div class="has-search search-pad float-right">
                <img className='control-feedback logo' src='/icons/search.svg' />
                <input type="text" class="form-control" placeholder="Search" />
              </div>
            </div>
          </div>
          {/* filter */}
          <div className='filter-box'>
            <div>
              <table className='filter_table'>
                <th><button className='buttons'><img className='logo' src='/icons/sort.svg' /><span className='hidden-text'> SORT</span></button></th>
                <th className='hide-filter'><button className='buttons'><img className='logo' src='/icons/filter.svg' /><span className='hidden-text'> FILTER</span></button></th>
                <th><button className='buttons'><b></b><span>{<NestedModal1 />}</span></button></th>
              </table>
            </div>
          </div>
        </div>
        <div className='grid-container'>
          <DataGrid
            rowHeight={90}
            rows={originalRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            // disableColumnFilter
            disableSelectionOnClick
            isCellEditable={(params) => params.row.age % 2 === 0}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
      </div>
    </>
  );
}




