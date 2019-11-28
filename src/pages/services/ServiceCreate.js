
import React from 'react'


const ServiceCreate = () => {

  return (
    <div className="create-page">
      <div className="container">
        <div className="form-container">
          <h1 className="title">Create Service</h1>
          <form>
            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option value="service">Service</option>
                    <option value="product">Product</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input" />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  v-model="form.description"
                  className="textarea"
                  placeholder="Textarea"></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Image Url</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input" />
              </div>
            </div>
            <div className="field">
              <label className="label">Price per Hour</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input" />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button
                  type="button" className="button is-link">Create</button>
              </div>
              <div className="control">
                <button className="button is-text">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ServiceCreate