import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getCurrentUser, updateFields, getCurrentFields, createGUID } from '../util/storage'

// eslint-disable-next-line react/prop-types
function AddFieldNameForm({ addFieldName }) {
  const [value, setValue] = useState(``)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      return
    }
    addFieldName(value)
    setValue(``)
  }

  return (
    <form className="mb-5" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="input form-control" placeholder="New Key" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <button className="btn btn-primary btn-block text-uppercase">Add new field type</button>
    </form>
  )
}

const FieldNames = () => {
  const [fieldNamesState, setfieldNamesState] = useState([])
  useEffect(() => {
    if (getCurrentFields().fields) {
      setfieldNamesState(getCurrentFields().fields)
    }
  }, [])

  console.log(fieldNamesState)

  const addFieldName = (text) => {
    const guid = createGUID()
    const newfieldNamesState = [...fieldNamesState, { text, guid }]
    setfieldNamesState(newfieldNamesState)
  }

  const removeFieldName = (index) => {
    const newfieldNamesState = [...fieldNamesState]
    newfieldNamesState.splice(index, 1)
    setfieldNamesState(newfieldNamesState)
  }

  const saveFields = (e) => {
    e.preventDefault()
    updateFields({
      guid: getCurrentUser().guid,
      fields: fieldNamesState,
    })
  }

  const FieldNamesInput = ({ fieldname, index }) => (
    <div className="form-group row">
      <div className="col-10">
        <input className="form-control" value={fieldname.text} onChange={saveFields} disabled />
      </div>
      <div className="col-2">
        <button className="btn btn-block btn-danger" onClick={() => removeFieldName(index)}>
          x
        </button>
      </div>
    </div>
  )

  return (
    <>
      <h6>Field Types</h6>
      {fieldNamesState ? fieldNamesState.map((fieldname, index) => <FieldNamesInput key={index} index={index} fieldname={fieldname} removeremoveFieldName={removeFieldName} />) : null}
      <AddFieldNameForm addFieldName={addFieldName} />

      <div className="help-text">
        <p>
          Create as many field names as you want. This allows to keep key/value pairs nice and consistant everywhere. Once youre done, savie the fields below to synce them to the database.
        </p>
      </div>

      <form onSubmit={saveFields}>
        <button className="btn btn-primary btn-block text-uppercase">Save Fields</button>
      </form>
    </>
  )
}

export default FieldNames

FieldNames.propTypes = {
  fieldname: PropTypes.string,
  index: PropTypes.integer,
  AddFieldNameForm: PropTypes.func.isRequired,
}
