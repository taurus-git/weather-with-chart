import {connect} from "react-redux";
import Forecast from "./Forecast";

const mapStateToProps = state => ({
    forecast: state.forecast,
})

export default connect(
    mapStateToProps
)(Forecast);