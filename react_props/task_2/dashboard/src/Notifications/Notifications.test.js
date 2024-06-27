import React from "react";
import { shallow } from "enzyme";
import { Notifications } from "./Notifications";

describe('Notificatinos component', () => {
  it('Notifications renders without crashing', () => {
    expect(shallow(<Notifications />));
  });

  it('Notificatins renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  })

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const notificationText = 'Here is the list of notifications';
    expect(wrapper.find('p').text()).toEqual(notificationText);
  })

  it('NotificationItem renders the right html', () => {
    const html = undefined; // The first NotificationItem doesn't have the html prop
    const notificationProps = [{type: 'defualt', value: 'test', html}]; 
    const wrapper = shallow(<Notifications notifications={notificationProps} />);
    const firstItem = wrapper.find('NotificationItem').first();
    expect(firstItem.props().html).toEqual(html);
  })
});