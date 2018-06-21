export default {
	UPDATEMUSICLIST(state, playload) {
		state.musicList = state.musicList.concat(playload);
	},
	UPDATECURRENTINDEX(state, playload) {
		state.currentIndex = playload;
	},
	UPDATELOAD(state, playload) {
		if(playload) {
			state.showLoad = true;
		} else {
			state.showLoad = false;
		}

	}
}