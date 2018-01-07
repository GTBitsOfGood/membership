import React from 'react';
import propTypes from 'prop-types';
import { Input, Icon } from 'antd';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.clear = this.clear.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  clear() {
    this.setState({ search: '' });
    this.props.fuzzy('');
  }
  onSearch(e) {
    this.props.fuzzy(e.target.value);
    this.setState({ search: e.target.value });
  }
  render() {
    const { search } = this.state;
    const suffix = search ? (
      <Icon type="close-circle" onClick={this.clear} />
    ) : null;
    return (
      <Input
        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={search}
        onChange={this.onSearch}
        style={{ width: '50%' }}
      />
    );
  }
}

SearchBar.propTypes = {};
export default SearchBar;
