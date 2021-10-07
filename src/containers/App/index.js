import { connect } from "react-redux";

import App from "../../components/App";

import { fetchMonsterType } from "../../actions/monsterType";

const mapStateToProps = (state) => ({
    loading: state.monsterType.loading,
});

const mapDispatchToProps = (dispatch) => ({
    loadMonsterType: () => {
        dispatch(fetchMonsterType())
    },
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppContainer;