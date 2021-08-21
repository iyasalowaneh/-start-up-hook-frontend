import * as actionTypes from "./types";
import instance from "./instance";

export const createIdea = (newIdea, history) => {
	return async (dispatch) => {
		try {
			// console.log(newIdea)
			const formData = new FormData();
			for (const key in newIdea) {
				formData.append(key, newIdea[key]);
			}
			const res = await instance.post(`/ideas`, formData);
			dispatch({
				type: actionTypes.CREATE_IDEA,
				payload: {
					newProduct: res.data,
				},
			});
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchIdeas = () => {
	return async (dispatch) => {
		try {
			const res = await instance.get(`/ideas`);
			dispatch({
				type: actionTypes.FETCH_IDEAS,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchIdeaUser = () => {
	return async (dispatch) => {
		try {
			const res = await instance.get(`/ideas/ideausers`);
			dispatch({
				type: actionTypes.FETCH_IDEA_USER,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchDonorUser = () => {
	return async (dispatch) => {
		try {
			const res = await instance.get(`/ideas/donorusers`);
			dispatch({
				type: actionTypes.FETCH_DONOR_USER,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const fundIdea = (updatedIdea) => {
	return async (dispatch) => {
		try {
			const formData = new FormData();
			for (const key in updatedIdea) {
				formData.append(key, updatedIdea[key]);
			}

			const res = await instance.put(`/ideas/${updatedIdea.ideaId}`, formData);
			console.log(res.data);
			dispatch({
				type: actionTypes.UPDATE_IDEA,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
export const donationIdea = (updatedIdea) => {
	return async (dispatch) => {
		try {
			const res = await instance.put(
				`/ideas/donation/${updatedIdea.ideaId}`,
				updatedIdea
			);
			console.log(res.data);
			dispatch({
				type: actionTypes.DONAT_IDEA,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
export const updateIdea = (updateIdea) => {
	return async (dispatch) => {
		try {
			const res = await instance.put(
				`/ideas/idea/${updateIdea.ideaId}`,
				updateIdea
			);
			dispatch({
				type: actionTypes.UPDATE_STATUS,
				payload: { updateIdea: res.data },
			});
		} catch (error) {
			console.log(error);
		}
	};
};
