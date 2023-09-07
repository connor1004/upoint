import React, { Component } from 'react';
import Request from 'superagent';
import Autocomplete from 'react-autocomplete';

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
      list: []
    };
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      value
    });

    Request.get(`https://api.addressify.com.au/addresspro/autocomplete?api_key=c3d1f3ec-adff-42ad-a1f3-fdde927e39ad&term=${encodeURIComponent(value)}`)
      .then((response) => {
        const list = response.body;
        this.setState({
          list
        });
      });
  }

  handleSelect(value) {
    this.setState({
      value
    });
    Request.get(`https://api.addressify.com.au/addresspro/info?api_key=c3d1f3ec-adff-42ad-a1f3-fdde927e39ad&term=${encodeURIComponent(value)}`)
      .then((response) => {
        const info = response.body;
        this.setState({
          value
        });

        this.props.onChange({
          info,
          address: value
        });
      });
  }

  renderItem(item, isHighlighted) {
    return (
      <div key={item} className={isHighlighted ? 'border bg-primary text-white px-3 py-2 font-weight-semibold' : 'border-left border-right border-bottom bg-white font-weight-semibold text-info px-3 py-2'}>
        {item}
      </div>
    );
  }

  renderMenu(items, value, style) {
    return (
      <div style={{ ...style }}>
        {items}
      </div>
    );
  }

  render() {
    const { onChange, ...inputProps } = this.props;
    return (
      <Autocomplete
        getItemValue={item => item}
        wrapperProps={{
          className: 'address-input'
        }}
        inputProps={{ placeholder: 'Start typing your address' }}
        items={this.state.list}
        renderInput={props => (<input {...props} {...inputProps} type="text" />)}
        renderItem={this.renderItem.bind(this)}
        value={this.state.value}
        renderMenu={this.renderMenu.bind(this)}
        onChange={this.handleChange.bind(this)}
        onSelect={this.handleSelect.bind(this)}
      />
    );
  }
}

AddressInput.defaultProps = {
  onChange: () => {}
};

export default AddressInput;
