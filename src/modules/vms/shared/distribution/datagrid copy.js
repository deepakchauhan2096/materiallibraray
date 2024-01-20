import * as React from 'react';
import "./distribution.css";
import { DataGrid } from '@mui/x-data-grid';
import NestedModal1 from './modal1';



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
  {
    field: 'Crud',
    headerName: '',
    width: 57,
    editable: true,
  }
];




const originalRows = [
  { id: 1, FirmName: 'Snow', NetworkType: 'Jon', Email: 'salman@gmail.com', contact: 9810283824, Branch: 'metro world', Crud: 'delete' },
  { id: 2, FirmName: 'low', NetworkType: 'loan', Email: 'arman@gmail.com', contact: 9810283834, Branch: 'metro world', Crud: 'delete' },
  { id: 3, FirmName: 'wo', NetworkType: 'phone', Email: 'pankajudash@gmail.com', contact: 9830283824, Branch: 'metro world', Crud: 'delete' },
  { id: 4, FirmName: 'cow', NetworkType: 'tone', Email: 'arjitsingh@gmail.com', contact: 9810383824, Branch: 'metro world', Crud: 'delete' },
  { id: 5, FirmName: 'doe', NetworkType: 'don', Email: 'shushantsingh@gmail.com', contact: 983283824, Branch: 'metro world', Crud: 'delete' },
  { id: 6, FirmName: 'no', NetworkType: 'gone', Email: 'arminder@gmail.com', contact: 9810283324, Branch: 'metro world', Crud: 'delete' }
];





export default function Datagrid() {


  return (


    <>
      <div className="container-fluid container-main-box ">
        <div className="container-fluid display-flex bottom-line-heading">
          <div style={{ display: "flex", justifyContent: "space-between" }} className='row position-relative' >
            <div className="div-branch">
              <p className="branch-deatils">Distribution Network</p>
              <p className="sub-branch">Please input requested details below. Click submit once you are done</p>
            </div>
            <div>
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
        {/* table */}
        <table height="60">
          <tr>
            <div class="filter-bar">
              <div className='branches'>
                <td><p>Total Branches : 0</p></td>
                <td><p>Selected: 0</p></td>
              </div>
              <div className='search-filter'>
                <td>
                  <div class="form-group has-search">
                    <img className='logo form-control-feedback' src='/icons/searchbox-icon.png' height="20" width="20" />
                    <input type="text" class="form-control" placeholder="Search" />
                  </div>
                </td>
                <th><button className='buttons'><img className='logo' src='/icons/sort-hover-icon.png' height="20" width="20" /><span className='hidden-logo'>SORT</span></button></th>
                <th><button className='buttons'><img className='logo' src='/icons/filter-icon.png' height="20" width="20" /><span className='hidden-logo'>FILTER</span></button></th>
                <th><button className='buttons'>+ ADD NEW</button></th>
              </div>
            </div>
          </tr>

        </table>
        <div style={{ height: 400, width: '100%', padding: 0 }}>

          <DataGrid
            rowHeight={103}
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
        {/* table */}
      </div>
    </>
  );
}




