import SearchResult from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    RESET_SEARCH_STATE
} from './../../../state/search/actions'

function mapStateToProps(state) {
  return {
      search: state.search,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
        {
            reset_search_state: RESET_SEARCH_STATE
        },
        dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
