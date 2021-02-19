import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Loader  from './loader/Loader.js';
import Table from './table/Table.js';
import _ from 'lodash';
import PersonInfo from './PersonInfo/PersonInfo';
import ModeSelector from './ModeSelector/ModeSelector';
import ReactPaginate from 'react-paginate';
import Search from './Search/Search';
import Form from './form/Form';



class App extends Component{

  
state = {
  isModeSelected: false,
  isLoading: false,
  data: [],
  sort: 'asc', //desc
  sortField: 'id',
  row: null,
  currentPage: 0,
  search: '',
  newRow: {}
}


async fetchData(url){
   const response = await fetch(url)
   const data = await response.json()
   
   this.setState({
     isLoading: false,
     data: _.orderBy(data, this.state.sortField, this.state.sort)
   })
 }

 onSort = sortField => {
   const clonedData = [...this.state.data]     // or use concat()  
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc'
    const data = _.orderBy(clonedData, sortField, sort)

    this.setState({ data, sort, sortField })
 }
 onRowSelect = row => {
  this.setState({
    row
  })
}

onSelect = url => {
  this.setState({
    isModeSelected: true,
    isLoading: true,
  })

  this.fetchData(url)
}

pageChangeHandler = ({selected}) => {
  this.setState({currentPage: selected})
}

searchHandler = search => {
    this.setState({search, currentPage: 0})
}

getFilteredData (){
  const {data, search} = this.state
  if(!search){
    return data
  }
  return data.filter(item => {
    return item['firstName'].toLowerCase().includes(search.toLowerCase())
         ||  item['lastName'].toLowerCase().includes(search.toLowerCase()) 
         || item['email'].toLowerCase().includes(search.toLowerCase())
  })
}


getData = ({id, firstName, lastName, email, phone}) => {
  const newRow = {id, firstName, lastName, email, phone}
  this.setState({newRow})
  this.state.data.unshift(newRow)
}


  render() {
    const pageSize = 50
if(!this.state.isModeSelected){
  return (
    <div className="container">
      <ModeSelector onSelect={this.onSelect}/>
    </div>
  )
}



const filteredData = this.getFilteredData()

const pageCount = Math.ceil(filteredData.length / pageSize)

const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage]

    return (
      <div className="container" > 
        {
        this.state.isLoading 
        ? <Loader/> 
        : <React.Fragment>
          <Form getData={this.getData}/>
          <Search onSearch={this.searchHandler}/>
          <Table 
        
        data={displayData}
        onSort={this.onSort}
        sort={this.state.sort}
        sortField={this.state.sortField}
        onRowSelect ={this.onRowSelect}
        />
        </React.Fragment>
      }

        {
        this.state.data.length > pageSize
        ?   <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.pageChangeHandler}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        forcePage={this.state.currentPage}
      />
      : null
        }

        {
          this.state.row
          ? <PersonInfo person ={this.state.row}/>
          : null
        }
      </div>
    )
  }
}

export default App;
