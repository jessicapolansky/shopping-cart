import {addToCart} from './actions.js';
import { connect } from 'react-redux';

function mapStateToProps (state) {
  return {
    grocerycart: state.grocerycart
  }
}
function mapDispatchToProps (dispatch) {
  return {
    onSubmit: function (data) {
      dispatch(addToCart(data))
    }
  }
}
MyForm = connect(
  mapStateToProps, mapDispatchToProps
)(MyForm)