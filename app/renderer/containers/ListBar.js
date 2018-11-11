import { connect } from 'react-redux';
import ListComp from '../components/ListComp';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListComp);
