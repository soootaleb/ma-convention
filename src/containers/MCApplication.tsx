import * as React from 'react';
import { connect } from 'react-redux';

import MCNotification from '../components/MCNotification';
import { INotification } from '../interfaces';
import { removeNotification } from '../actions';
import { MCActionsTypes } from '../enumerations';
import MCConvention from './MCConvention';

class MCApplication extends React.Component<{
  notifications: INotification[],
  onNotificationClicked: (n: MCNotification) => { type: MCActionsTypes, payload: INotification }
}> {

  private style = {
    root: {
      width: '100%',
      height: '100%',
      padding: 10,
      display: 'flex',
      boxSizing: 'border-box',
      alignItems: 'stretch' as 'stretch',
      justifyContent: 'center' as 'center',
      backgroundColor: '#EBEBEB'
    },
    notifications: {
      top: 0,
      right: 0,
      width: 'auto',
      display: 'flex',
      position: 'absolute' as 'absolute',
      flexDirection: 'column' as 'column',
      backgroundColor: 'transparent',
    }
  };

  private getNotifications(): JSX.Element[] {
    return this.props.notifications.map((notification: INotification, index) => {
      return (
        <MCNotification
          onClick={this.props.onNotificationClicked}
          key={Math.random() * (index + 1)}
          notification={notification}
        />
      );
    });
  }

  public render() {
    return (
      <div style={this.style.root}>
        <MCConvention />
        <div style={this.style.notifications} >
          {this.getNotifications()}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  notifications: state.notifications
}), (dispatch, props) => ({
  onNotificationClicked: (notification: MCNotification) => dispatch(removeNotification(notification.model)),
}))(MCApplication);