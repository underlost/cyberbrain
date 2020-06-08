import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getCurrentUser, updateSiteFields, getCurrentFields, getCurrentSiteFields, createGUID } from '../util/storage'

// eslint-disable-next-line react/prop-types
function AddFieldNameForm({ addFieldName }) {
  const [value, setValue] = useState(``)
  const [key, setKey] = useState(``)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      return
    }
    addFieldName(key, value)
    setValue(``)
    setKey(``)
  }
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row mb-2">
        <div className="col-4">
          <div className="input-group mb-3">
            <select className="custom-select" id="inputGroupSelect01" onChange={e => setKey(e.target.value)}>
              <option selected>Key</option>
              {getCurrentFields().fields ? getCurrentFields().fields.map((fieldname, index) => (
                <option key={index} index={index} value={fieldname.text}>{fieldname.text}</option>
              )) : null }
            </select>
          </div>
        </div>
        <div className="col-8">
          <input type="text" className="input form-control" value={value} placeholder="Value" onChange={e => setValue(e.target.value)} />
        </div>
      </div>

      <button className="btn btn-primary btn-block">Add new custom Field</button>
    </form>
  )
}

const SiteFields = () => {
  const [fieldNamesState, setfieldNamesState] = useState([])
  if (getCurrentSiteFields().fields) {
    setfieldNamesState(getCurrentSiteFields().fields)
  }
  console.log(getCurrentSiteFields().fields)

  const addFieldName = (key, value) => {
    const guid = createGUID()
    const newfieldNamesState = [...fieldNamesState, {
      key,
      value,
      guid,
    }]
    setfieldNamesState(newfieldNamesState)
  }

  const removeFieldName = (index) => {
    const newfieldNamesState = [...fieldNamesState]
    newfieldNamesState.splice(index, 1)
    setfieldNamesState(newfieldNamesState)
  }

  const saveFields = (e) => {
    e.preventDefault()
    updateSiteFields({
      guid: getCurrentUser().guid,
      fields: fieldNamesState,
    })
  }

  const FieldNamesInput = ({ fieldname, index }) => (
    <div className="row mb-4">
      <div className="col-3">
        <input type="text" className="input form-control" value={fieldname.key} disabled />
      </div>
      <div className="col-7">
        <input type="text" className="input form-control" value={fieldname.value} onChange={saveFields} disabled />
      </div>
      <div className="col-2">
        <button className="btn btn-block btn-warning" onClick={() => removeFieldName(index)}>x</button>
      </div>
    </div>
  )

  return (
    <>
      <h6 className="h6 text-uppercase">Current Site Fields</h6>
      {fieldNamesState.map((fieldname, index) => (
        <FieldNamesInput key={index} index={index} fieldname={fieldname} removeremoveFieldName={removeFieldName}/>
      ))}
      <h6>Add New Field</h6>
      <AddFieldNameForm addFieldName={addFieldName} />
      <form onSubmit={saveFields}>
        <button className="btn btn-primary btn-block">Save Fields</button>
      </form>
    </>
  )
}

export default SiteFields

SiteFields.propTypes = {
  fieldname: PropTypes.string,
  index: PropTypes.integer,
  AddFieldNameForm: PropTypes.func.isRequired,
}
