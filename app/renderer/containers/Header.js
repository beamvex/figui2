import { connect } from 'react-redux';
import HeaderComp from '../components/HeaderComp';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComp);
