import IBug, { IBugAction } from "./bug";
import { bugTypes } from '../../actions/bug';

let lastId: number = 0;

const bugReducer = (state: IBug[] = [], action: IBugAction<IBug>): IBug[] => {
    switch(action.type) {
        case bugTypes.ISSUE_BUG:
            return [
                ...state,
                {
                    id: ++lastId,
                    issuerName: action.payload.issuerName,
                    timestamp: action.payload.timestamp,
                    title: action.payload.title,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case bugTypes.DELETE_BUG:
            return state.filter((bug) => bug.id !== action.payload.id);

        case bugTypes.RESOLVE_BUG:
            return state.map((bug) => {
                if (bug.id === action.payload.id) {
                    bug.resolved = true;
                }

                return bug;
            });

        default:
            return state;
    }
}

export default bugReducer;