import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';

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

    this.deleteConfirmationClick = this.deleteConfirmationClick.bind(this);
    this.saveDataDialog = this.saveDataDialog.bind(this);
    this.sort = this.sort.bind(this);
    this.showEditor =this.showEditor.bind(this);
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
    if (actoin === 'dismiss') {
      this.closeDialog();
      return;
    }
    let data = Array.from(this.state.data);
    data.slice(this.state.dialog.idx, 1);
    this.setState({
      dialog: null,
      data,
    });
    this.fireDataChange(data);
  }

  closeDialog() {
    this.setState({
      dialog: null,
    });
  }

  saveDataDialog(action) {
    if (action === 'dismiss') {
      this.closeDialog();
      return;
    }
    let data = Array.from(this.state.data);
    data[this.state.dialog.idx] = this.refs.form.getData();
    this.setState({
      dialog: null,
      data,
    });
    this.fireDataChange(data);
  }

  render() {
    return (
      <div className="Excel">
        {this.renderTable()}
        {this.renderDialog()}
      </div>
    );
  }
  
  renderDialog() {
    if (!this.state.dialog) {
      return null;
    }
    switch (this.state.dialog.type) {
      case 'delete':
        return this.renderDeleteDialog();
      case 'info':
        return this.renderFormDialog(true);
      case 'eidt':
        return this.renderFormDialog();
      default:
        throw Error(`Unexpected dialog type ${this.state.dialog.type}`);
    }
  }

  renderDeleteDialog() {
    const first = this.state.data[this.state.dialog.idx];
    const nameguess = first[Object.keys(first)[0]];
    return (
      <Dialog
        modal={true}
        header="Confirm deletion"
        confirmLabel="Delete"
        onAction={this.deleteConfirmationClick}
      >
        {`Are you sure want to delete "${nameguess}"?`}
      </Dialog>
    );
  }

  renderFormDialog() {
    return (
      <Dialog
        modal={true}
        header={readonly ? 'Item info' : 'Edit item'}
        confirmLabel={!readonly}
        onAction={this.saveDataDialog}
      >
        <Form
          ref="form"
          fields={this.props.schema}
          initialData={this.state.data[this.state.dialog.idx]}
          readonly={readonly}
        />
      </Dialog>
    );
  }

  renderTable() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.schema.map((item) => {
              if (!item.show) {
                return null;
              }
              let title = item.label;
              if (this.state.sortby === item.id) {
                title += this.state.descending ? ' \u2191' : ' \u2193';
              }
              return (
                <th
                  className={`schema-${item.id}`}
                  key={item.id}
                  onClick={() => {this.sort(item.id)}}
                >
                  {title}
                </th>
              );
            })}
            <th className="ExcelNotSortable">Actions</th>
          </tr>
        </thead>
        <tbody onDoubleClick={this.showEditor}>
          {this.state.data.map((row, rowidx) => {
            return (
              <tr key={rowidx}>
                {Object.keys(row).map((cell, idx) => {
                  const schema = this.props.schema[idx];
                  if (!schema || !schema.show) {
                    return null;
                  }
                  const isRating = schema.type === 'rating';
                  const edit = schema.edit;
                  let content = row[cell];
                  if (!isRating && edit && edit.row === rowidx && edit.key === schema.id) {
                    content = (
                      <form onSubmit={this.save}>
                        <FormInput ref="input" {...schema} defaultValue={content} />
                      </form>
                    );
                  } else if (isRating) {
                    content = <Rating readonly={true} defaultValue={Number(content)} />;
                  }
                  return (
                    <td
                      className={classNames({
                        [`schema-${schema.id}`]: true,
                        'ExcelEditable': !isRating,
                        'ExcelDataLeft': schema.align === 'left',
                        'ExcelDataRight': schema.align === 'right',
                        'ExcelDataCenter': schema.align !== 'left' &&
                          schema.align !== 'right',
                      })}
                      key={idx}
                      data-row={rowidx}
                      data-key={schema.id}
                    >
                      {content}
                    </td>
                  );
                })}
                <td>
                  <Action onAction={() => this.actionClick(rowidx)} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
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
