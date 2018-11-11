import { connect } from 'react-redux';
import SideBarComp from '../components/SideBarComp';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBarComp);
