import * as React from 'react';
import { baseShadow } from '../styles';
import { MCNotificationLevel, MCColors, MCActionsTypes } from '../enumerations';
import { INotification } from '../interfaces';

export default class MCNotification extends React.Component<{
    notification: INotification,
    onClick: (notification: MCNotification) => { type: MCActionsTypes, payload: INotification }
}> {

    public get model(): INotification {
        return this.props.notification;
    }

    private getBackgroundColor(level: MCNotificationLevel | undefined): MCColors {
        switch (level) {
            case MCNotificationLevel.INFO:
                return MCColors.PRIMARY;
            case MCNotificationLevel.DANGER:
                return MCColors.DANGER;
            case MCNotificationLevel.SUCCESS:
                return MCColors.SUCCESS;
            case MCNotificationLevel.WARNING:
                return MCColors.WARNING;
            default:
                return MCColors.PRIMARY;
        }
    }

    private getFontColor(level: MCNotificationLevel | undefined): MCColors {
        switch (level) {
            case MCNotificationLevel.WARNING:
                return MCColors.BLACK;
            case MCNotificationLevel.SUCCESS:
                return MCColors.BLACK;
            default:
                return MCColors.WHITE;
        }
    }

    private onClick = (event) => {
        return this.props.onClick(this);
    }

    private style = (self: MCNotification) => ({
        root: {
            ...baseShadow, // This a static mixin
            top: 10,
            width: 200,
            right: 10,
            color: this.getFontColor(self.props.notification.level),
            cursor: 'pointer',
            border: 0,
            position: 'relative' as 'relative',
            paddingLeft: 10,
            borderRadius: 3,
            marginBottom: 10,
            backgroundColor: this.getBackgroundColor(self.props.notification.level),
        },
        header: {
            fontSize: 16,
            fontSyle: 'bold'
        },
        content: {

        }
    })

    public render() {
        let header: JSX.Element | null;
        if (this.props.notification.header) {
            header = <h1 style={this.style(this).header} >{this.props.notification.header}</h1>;
        } else {
            header = null;
        }
        return (
            <div style={this.style(this).root} onClick={this.onClick}>
                {header}
                <p style={this.style(this).content} >{this.props.notification.content}</p>
            </div>
        );
    }
}