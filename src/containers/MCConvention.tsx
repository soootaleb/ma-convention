import * as React from 'react';
import { baseShadow } from '../styles';
import { ITodo, INotification } from '../interfaces';
import { MCActionsTypes, MCNotificationLevel } from '../enumerations';
import { connect } from 'react-redux';
import { addTodo, addNotification } from '../actions';
import { Style } from '../styles/builder';

class MCConvention extends React.Component<{
    onAdd: (todo: ITodo) => ({ type: MCActionsTypes, payload: ITodo })
    onEmpty: () => ({ type: MCActionsTypes, payload: INotification })
}> {

    public state = { value: '' };

    private style = (self: MCConvention) => ({
        root: {
            ...baseShadow,
            position: 'relative' as 'relative'
        },
        image: {
            height: '70%'
        },
        content: {
            position: 'absolute' as 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: '3% 5%',
            fontSize: 11,
            backgroundColor: 'white',
        }
    })

    public render() {
        return (
            <div style={this.style(this).root}>
                <img
                    style={this.style(this).image}
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                />
                <div style={this.style(this).content}>
                    <div
                        style={({
                            fontSize: 18,
                            fontWeight: 900,
                            ...Style.flex().center().build()
                        })}
                    >
                        CONVENTION DE FORMATION PROFESSIONNELLE
                    </div>
                    <div
                        style={({
                            fontSize: 16,
                            fontWeight: 700,
                            ...Style.flex().center().build()
                        })}
                    >
                        (Article L.6353-1 du Code du travail)
                    </div>
                    <div style={({...Style.row().padding('10px 0px').build()})}>
                        Entre les soussignés:
                    </div>

                    <div style={({...Style.row().padding('10px 0px').build()})}>                        
                        1) CENTRE FORMATION (Organisme de formation) enregistré
                        sous le numéro de déclaration d'activité SIRET auprès de la Direction Régionale des Entreprises,
                        de la Concurrence, de la Consommation, du Travail et de l’Emploi (DIRECCTE)
                    </div>
                    <div style={({...Style.row().padding('10px 0px').build()})}>
                        2) ENTREPRISE  (CLIENT) (Désignation de l’entreprise) représentée par NOM REPR PREVOM RPR
                        est conclue la convention suivante, en application des dispositions du
                        Livre III de la Sixième partie du Code du travail portant organisation
                        de la formation professionnelle continue.
                    </div>
                    
                    <div style={({fontWeight: 700})}>
                        Article 1er : Objet de la convention
                    </div>

                    L’organisme FORMATION PLUS organisera l’action de formation suivante :

                    <ul>
                        <li>Intitulé du stage : NOM FORMATION</li>
                        <li>Objectifs : DESCRIPTION FORMATION</li>
                        <li>Programme et méthodes : joints en annexe 1.</li>
                        <li>Type d’action de formation (article L.6313-1 du Code du travail): ACTION DE FORMATION</li>
                        <li>Dates : Du 01 Juin au 30 Aout</li>
                    </ul>
                    
                    <div style={({fontWeight: 700, paddingTop: 10})}>
                        Article 2 : Effectif formé
                    </div>

                    L’organisme NOM ORGANISME accueillera les personnes suivantes (noms et fonctions) :
                    <ul>
                        <li>Sofiane Taleb</li>
                        <li>Quentin Brosse</li>
                        <li>Barack Obama</li>
                    </ul>
                    
                    <div style={({fontWeight: 700, paddingTop: 10})}>
                        Article 3 : Dispositions financières
                    </div>
                    
                    En contrepartie de cette action de formation, l’employeur s’acquittera des coûts suivants :

                    <ul>
                        <li>Frais de formation : coût unitaire H.T 100 €</li>
                        <li>Les frais de restauration et d’hébergement ne sont pas pris en compte.</li>
                        <li>T.V.A. (19,6%) 100 €</li>
                        <li>TOTAL GENERAL 1000 €</li>
                    </ul>
                                        
                    <div style={({fontWeight: 700, paddingTop: 10})}>
                        Article 4 : Modalités de règlement
                    </div>
                        Le paiement sera dû à réception de la facture.
                    
                    <div style={({fontWeight: 700, paddingTop: 10})}>
                        Article 5 : Dédit ou abandon
                    </div>
                        En cas de dédit par l’entreprise à moins de 30 jours francs avant
                        le début de l’action mentionnée à l’article 1, ou d’abandon
                        en cours de formation par un ou plusieurs stagiaires,
                        l’organisme remboursera sur le coût total, les sommesqu’il n’aura pas
                        réellement dépensées ou engagées pour la réalisation de ladite action.
                                        
                    <div style={({fontWeight: 700, paddingTop: 10})}>
                        Article 6 : Différends éventuels
                    </div>
                        Si une contestation ou un différend ne peuvent être réglés à l’amiable,
                        le Tribunal sera seul compétent pour régler le litige.

                    Fait en double exemplaire, à VILLE le, DATE

                    <div
                        style={({
                            ...Style.flex()
                                .justify('space-between')
                                .padding(20)
                                .build()
                        })}
                    >
                        <div>
                            Pour l’entreprise<br/>
                            (nom et qualité du signataire)
                        </div>

                        <div>
                            Pour l’organisme<br/>
                            (nom et qualité du signataire)
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, (dispatch, props) => ({
    onAdd: (todo: ITodo) => {
        dispatch(addNotification({
            level: MCNotificationLevel.SUCCESS,
            header: 'Yeah !',
            content: 'Todo added in your list'
        }));
        dispatch(addTodo(todo));
    },
    onEmpty: () => dispatch(addNotification({
        level: MCNotificationLevel.WARNING,
        header: 'Oops !',
        content: 'Please insert a label for your ticket'
    }))
}))(MCConvention);