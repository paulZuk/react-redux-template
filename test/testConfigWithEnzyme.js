import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';

const mockStore = configureStore();

configure({ adapter: new Adapter() });

const shallowWithStore = (component, store) => {
    const context = {
        store,
    };
    return shallow(component, { context });
}

export default { shallowWithStore, mockStore };







