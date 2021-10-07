import { connect } from "react-redux";

import startAdventure from "../../components/startAdventure";

import { fetchAdventureStart } from "../../actions/adventureStart";

const mapStateToProps = (state) => ({
    loading: state.adventureStart.loading,
});

const mapDispatchToProps = (dispatch) => ({
    loadMonsterType: () => {
        dispatch(fetchAdventureStart())
    },
});

const startAdventureContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(startAdventure);

export default startAdventureContainer;