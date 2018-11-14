import { connect } from 'react-redux';
import ContentPaneComp from '../components/ContentPaneComp';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentPaneComp);
