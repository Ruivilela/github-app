import Search from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { UPDATE_SEARCH_TERM } from './../../../state/search/actions'; 

function mapStateToProps(state) {
  return {
      search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
          update_search_term: UPDATE_SEARCH_TERM
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
