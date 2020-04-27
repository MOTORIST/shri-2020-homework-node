import { common as commonReducer, initialState } from '../common';
import { Types, setIsSetSettings } from '../../actions/common';

describe('Common reducer', () => {
    it('should return init state an unhandled action', () => {
        const nextState = commonReducer(initialState, {});

        expect(nextState).toEqual({isSetSettings: false});
    });

    it(Types.SET_IS_SET_SETTINGS, () => {
        const nextState = commonReducer(initialState, setIsSetSettings(true));

        expect(nextState).toEqual({isSetSettings: true});
    });

});