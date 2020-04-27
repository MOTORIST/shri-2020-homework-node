import { settings as settingsReducer, initialState} from '../settings';
import { REQUEST, SUCCESS, FAILURE } from '../../constants';
import { Types, fetchSettings, fetchSettingsSuccess, fetchSettingsFailure, saveSettings, saveSettingsSuccess, saveSettingsFailure } from '../../actions/settings';

describe('Settings reducer', () => {
    const settingsData = {
        repoName: 'test',
        buildCommand: 'yarn build',
        mainBranch: 'main',
        period: 12,
    }

    it('should return init state an unhandled action', () => {
        const nextState = settingsReducer(initialState, {});

        expect(nextState).toEqual(initialState);
    });

    it(Types.GET_SETTINGS + REQUEST, () => {
        const nextState = settingsReducer(initialState, fetchSettings());

        expect(nextState).toEqual({...initialState, isFetching: true});
    });

    it(Types.GET_SETTINGS + SUCCESS, () => {

        const currentState = {
            ...initialState,
            isFetching: true,
        }

        const equalState = {
            ...currentState,
            isFetching: false,
            isLoaded: true,
            entity: settingsData,
        }

        const nextState = settingsReducer(currentState, fetchSettingsSuccess(settingsData));

        expect(nextState).toEqual(equalState);
    });

    it(Types.GET_SETTINGS + FAILURE, () => {
        const error = 'Error message';

        const currentState = {
            ...initialState,
            isFetching: true,
        }

        const equalState = {
            ...currentState,
            isFetching: false,
            error,
        }

        const nextState = settingsReducer(currentState, fetchSettingsFailure(error));

        expect(nextState).toEqual(equalState);
    });

    it(Types.SAVE_SETTINGS + REQUEST, () => {
        const nextState = settingsReducer(initialState, saveSettings());

        const equalState = {
            ...initialState,
            isFetching: true,
        }

        expect(nextState).toEqual(equalState);
    });

    it(Types.SAVE_SETTINGS + SUCCESS, () => {
        const currentState = {
            ...initialState,
            isFetching: false,
        }

        const equalState = {
            ...currentState,
            isFetching: false,
            isLoaded: true,
            entity: settingsData,
        };

        const nextState = settingsReducer(currentState, saveSettingsSuccess(settingsData));

        expect(nextState).toEqual(equalState);
    });

    it(Types.SAVE_SETTINGS + FAILURE, () => {
        const currentState = {
            ...initialState,
            isFetching: true,
        }

        const error = 'Error message';

        const equalState = {
            ...currentState,
            isFetching: false,
            error,
        }

        const nextState = settingsReducer(currentState, saveSettingsFailure(error));

        expect(nextState).toEqual(equalState);
    });
});