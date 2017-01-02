import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Header from '.';

chai.use(sinonChai);

function setup() {
  const props = {
    logout: sinon.spy()
  };

  const enzymeWrapper = shallow(<Header {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('react: Header Component', () => {
  it('should render self and primary css classes', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper).to.have.length(1); // component rendered

    // required css classes were applied
    expect(enzymeWrapper.find('div').first().hasClass('nav header')).to.be.true;
  });

  it('should create required class interface', () => {
    const header = new Header();

    expect(header.constructor).to.exist;
    expect(header.handleToggle).to.exist;
    expect(header.handleClose).to.exist;
    expect(header.handleLogout).to.exist;
    expect(header.render).to.exist;
  });

  it('should render required material-ui components', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('AppBar')).to.have.length(1);
    expect(enzymeWrapper.find('Drawer')).to.have.length(1);
    expect(enzymeWrapper.find('MenuItem')).to.have.length.of.at.least(3);
  });

  it('should call logout() when Logout is clicked', () => {
    const { enzymeWrapper, props } = setup();
    const logoutLink = enzymeWrapper.find('[primaryText="Logout"]');
    logoutLink.props().onTouchTap();

    expect(props.logout).to.have.been.called;
  });
});
