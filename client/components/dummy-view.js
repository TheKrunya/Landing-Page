import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getData } from '../redux/reducers/users';
import Head from './head'

const Dummy = (props) => {
  const [PageIndex, setPageIndex] = useState(0)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps(PageIndex)
  }, [getDataProps, PageIndex])
  return (
    <div>
      <Head title="Hello" />
      <div> Page {PageIndex} {props.users.length} </div>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Company</td>
          <td>Sallary</td>
          <td>Age</td>
          <td>City</td>
          <td>Ip</td>
          <td>ZipCode</td>
        </tr>
        {
          props.users.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.sallary}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td>{user.ip}</td>
              <td>{user.ZipCode}</td>
            </tr>
          ))
        }
      </table>
      <button
        type="button"
        onClick={() => setPageIndex(Math.max(0, PageIndex - 1))}
      >
      Previous
      </button>
      <button
        type="button"
        onClick={() => setPageIndex(PageIndex + 1)}
      >
      Next
      </button>
      {/* <img src={`/tracker/${counter}.gif`} alt="tracker" /> */}
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
