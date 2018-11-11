import { connect } from 'react-redux';
import JumboComp from '../components/JumboComp';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JumboComp);
