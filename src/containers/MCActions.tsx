import * as React from 'react';
import { INotification } from '../interfaces';
import { MCActionsTypes, MCNotificationLevel, MCColors } from '../enumerations';
import { connect } from 'react-redux';
import { addNotification } from '../actions';
import { Style } from '../styles/builder';
import MCButton from '../components/MCButton';

class MCActions extends React.Component<{
    onPrint: () => ({ type: MCActionsTypes, payload: INotification })
}> {

    private style = (self: MCActions) => ({
        root: {
            ...Style.flex('column'),
            width: 200
        }
    })

    public render() {
        return (
            <div style={this.style(this).root}>
                <MCButton
                    colors={[MCColors.PRIMARY, MCColors.SECONDARY]}
                    label="Afficher la contention"
                    onClick={this.props.onPrint}
                />
                <MCButton
                    colors={[MCColors.PRIMARY, MCColors.SECONDARY]}
                    label="Partager la contention"
                    onClick={this.props.onPrint}
                />
                <MCButton
                    colors={[MCColors.PRIMARY, MCColors.SECONDARY]}
                    label="Imprimer la convention"
                    onClick={this.props.onPrint}
                />
            </div>
        );
    }
}

export default connect(null, (dispatch, props) => ({
    onPrint: (message: string) => dispatch(addNotification({
        level: MCNotificationLevel.SUCCESS,
        header: 'Coming Soon',
        content: 'Fonctionnalité bientôt disponible'
    }))
}))(MCActions);