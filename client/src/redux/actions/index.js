import axios from 'axios'
import { ADDNEW_TODO } from './type';

const API_URL = 'http://localhost:8000'

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });
        dispatch({ type: ADDNEW_TODO, payload: res.data });
    }
    catch (err) {
        console.log('Error while calling addNewTodo API', err.message);
    }
}