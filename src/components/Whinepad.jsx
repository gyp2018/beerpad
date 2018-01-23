import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Excel from './Excel';
import Form from './Form';
import Dialog from './Dialog';

class Whinepad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.initialData,
      addnew: false,
    };
    this.preSearchData = null;

    this.addNewDialog = this.addNewDialog.bind(this);
  }

  addNewDialog() {
    this.setState({
      addnew: true,
    });
  }

  addNew(action) {
    if (action === 'dismiss') {
      this.setState({
        addnew: false,
      });
      return;
    }
    let data = Array.from(this.state.data);
    data.unshift(this.refs.form.getData());
    this.setState({
      addnew: false,
      data,
    });
    this.commitToStorage(data);
  }

  onExcelDataChange(data) {
    this.setState({
      data,
    });
    this.commitToStorage(data);
  }

  commitToStorage(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  startSearching() {
    this.preSearchData = this.state.data;
  }

  doneSearching() {
    this.setState({
      data: this.preSearchData,
    });
  }

  search(e) {
    const needle = e.target.value.toLowerCase();
    if (!needle) {
      this.setState({
        data: this.preSearchData,
      });
      return;
    }
    const fields = this.props.chema.map(item => item.id);
    const searchData = this.preSearchData.filter(row => {
      for (let f = 0; f < fields.length; f++) {
        if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
          return true;
        }
      }
      return false;
    });
    this.setState({
      data: searchData,
    });
  }


  render() {
    return (
      <div className="Whinepad">
        <div className="WhinepadToolbar">
          <div className="WhinepadToolbarAdd">
            <Button
              onClick={this.addNewDialog}
              className="WhinepadToolbarAddButton"
            >
              + add
            </Button>
          </div>
          <div className="WhinepadToolbarSearch">
            <input
              plaseholder="Search..."
              onChange={this.search}
              onFocus={this.startSearching}
              onBlur={this.doneSearching}
            />
          </div>
        </div>
        <div className="WhinepadDatagrid">
          <Excel
            schema={this.props.schema}
            initialData={this.state.data}
            onDataChange={this.onExcelDataChange}
          />
        </div>
        {this.state.addnew
          ? (
            <Dialog
              modal={true}
              header="Add new item"
              confirmLabel="Add"
              onAction={this.addNew}
            >
              <Form
                ref="form"
                fields={this.props.schema}
              />
            </Dialog>
          ) : null
        }
      </div>
    );
  }
}

Whinepad.propTypes = {
  schema: PropTypes.arrayOf(
    PropTypes.object
  ),
  initialData: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default Whinepad;
