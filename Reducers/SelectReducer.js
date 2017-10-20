export default function (state = {}, action) {
    switch(action.type) {
        case 'OUTPUT_USER_LIST':
            return action.payload;
            break;
    }
    return state;
}