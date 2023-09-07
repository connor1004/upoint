/* eslint-disable react/no-unused-state */
/* eslint-disable no-shadow */
import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';

const loadOptions = async (value) => {
  const response = await fetch(`https://api.addressify.com.au/addresspro/autocomplete?api_key=c3d1f3ec-adff-42ad-a1f3-fdde927e39ad&term=${encodeURIComponent(value)}`);
  const json = await response.json();
  const ret = json.map(item => ({
    label: item,
    value: item
  }));
  return ret;
};


class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentWillMount() {
  //   if (this.props.value.address) {
  //     this.handleInputChange(this.props.value.address);
  //   }
  // }

  // async componentWillReceiveProps(props) {
  //   if (props.value && props.value.address) {
  //     await this.handleInputChange(props.value.address);
  //   }
  // }

  async handleChange(value) {
    let info = null;
    try {
      const response = await fetch(`https://api.addressify.com.au/addresspro/info?api_key=c3d1f3ec-adff-42ad-a1f3-fdde927e39ad&term=${encodeURIComponent(value.value)}`);
      info = await response.json();
    } catch (e) {
      info = {};
    }
    this.props.onChange({
      address: value.value,
      info
    });
  }

  async handleInputChange(value) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <AsyncSelect
        classNamePrefix="react-select"
        cacheOptions
        defaultOptions
        placeholder="Start typing your address"
        loadOptions={loadOptions}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null
        }}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
      />
    );
  }
}

AddressInput.defaultProps = {
  onChange: () => {},
  value: {
    address: '',
    info: {}
  }
};

export default AddressInput;
