import { connect } from 'react-redux';
import FooterComp from '../components/FooterComp';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FooterComp);
