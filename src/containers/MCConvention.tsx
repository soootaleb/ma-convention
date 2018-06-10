import * as React from 'react';
import { baseShadow } from '../styles';
import { ITodo, INotification } from '../interfaces';
import { MCActionsTypes, MCNotificationLevel } from '../enumerations';
import { connect } from 'react-redux';
import { addTodo, addNotification } from '../actions';
import { Style } from '../styles/builder';
import MCInput from './MCInput';
import MCButton from '../components/MCButton';

class MCConvention extends React.Component<{
    onAdd: (todo: ITodo) => ({ type: MCActionsTypes, payload: ITodo })
    onEmpty: () => ({ type: MCActionsTypes, payload: INotification })
}> {

    public state = { centreFormation: 'Indiquez un centre de formation' };

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
                        1) <MCInput width={110} placeholder="Centre de formation"/> (Organisme de formation) enregistré
                        sous le numéro de déclaration d'activité SIRET auprès de la Direction Régionale des Entreprises,
                        de la Concurrence, de la Consommation, du Travail et de l’Emploi (DIRECCTE)
                    </div>
                    <div style={({...Style.row().padding('10px 0px').build()})}>
                        2) <MCInput width={80} placeholder="Entreprise"/> 
                            (<MCInput width={80} placeholder="Client"/>)
                        (Désignation de l’entreprise) représentée par NOM REPR PREVOM RPR
                        est conclue la convention suivante, en application des dispositions du
                        Livre III de la Sixième partie du Code du travail portant organisation
                        de la formation professionnelle continue.
                    </div>
                    
                    <div style={({fontWeight: 700})}>
                        Article 1er : Objet de la convention
                    </div>

                    L’organisme <MCInput width={110} placeholder="Centre de formation"/>
                    organisera l’action de formation suivante :

                    <ul>
                        <li>Intitulé du stage : <MCInput width={130} placeholder="Nom de la formation"/></li>
                        <li>Objectifs : <MCInput width={150} placeholder="Description de la formation"/></li>
                        <li>Programme et méthodes : joints en annexe 1.</li>
                        <li>Type d’action de formation (article L.6313-1 du Code du travail):
                            <MCInput width={130} placeholder="Action de formation"/>
                        </li>
                        <li>Dates : Du <MCInput width={80} placeholder="Date de début"/> au 
                            <MCInput width={80} placeholder="Date de fin"/>
                        </li>
                    </ul>
                    
                    <div style={({fontWeight: 700, paddingTop: 10})}>
                        Article 2 : Effectif formé
                    </div>

                    L’organisme <MCInput width={130} placeholder="Centre de formation"/>
                    accueillera les personnes suivantes (noms et fonctions) :
                    <ul>
                        <li><MCInput width={130} placeholder="Nom du participant"/></li>
                        <MCButton label="Ajouter un participant" onClick={this.props.onAdd}/>
                    </ul>
                    
                    <div style={({fontWeight: 700, paddingTop: 10})}>
                        Article 3 : Dispositions financières
                    </div>
                    
                    En contrepartie de cette action de formation, l’employeur s’acquittera des coûts suivants :

                    <ul>
                        <li>Frais de formation : coût unitaire H.T
                            <MCInput width={80} placeholder="Coût unitaire"/> €
                        </li>
                        <li>Les frais de restauration et d’hébergement ne sont pas pris en compte.</li>
                        <li>T.V.A. (<MCInput width={30} placeholder="T.V.A"/>%) 100 €</li>
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

                    Fait en double exemplaire, à <MCInput placeholder="Ville"/> le, <MCInput placeholder="Date"/>

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