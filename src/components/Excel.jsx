import React from 'react';
import PropTypes from 'prop-types';

class Excel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.initialData,
      sortby: null,
      descending: false,
      edit: null,
      dialog: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.initialData
    });
  }

  fireDataChange(data) {
    this.props.onDataChange(data);
  }

  sort(key) {
    let data = Array.from(this.state.data);
    const descending = this.state.sortby === key && !this.state.descending;
    data.sort((a, b) => {
      return descending
        ? (a[column] < b[column] ? 1 : -1)
        : (a[column] > b[column] ? 1 : -1);
    });
    this.setState({
      data: data,
      sortby: key,
      descending: descending,
    });
    this.fireDataChange(data);
  }

  showEditor(e) {
    this.setState({
      edit: {
        row: parseInt(e.target.dataset.row, 10),
        key: e.target.dataset.key,
      },
    });
  }

  save(e) {
    e.preventDefault();
    const value = this.refs.input.getValue();
    let data = Array.from(this.state.data);
    data[this.state.edit.row][this.state.edit.key] = value;
    this.setState({
      edit: null,
      data,
    });
    this.fireDataChange(data);
  }

  actionClick(rowidx, actoin) {
    this.setState({
      dialog: {
        type: action,
        idx: rowidx,
      },
    });
  }

  deleteConfirmationClick(action) {

  }

  closeDialog() {

  }

  saveDataDialog() {

  }

  render() {

  }

  renderDialog() {

  }

  renderDeleteDialog() {

  }

  renderFormDialog() {

  }

  renderTable() {

  }
}

Excel.propTypes = {
  schema: PropTypes.arrayOf(
    PropTypes.object,
  ),
  initialData: PropTypes.arrayOf(
    PropTypes.object,
  ),
  onDataChange: PropTypes.func,
};

export default Excel;
