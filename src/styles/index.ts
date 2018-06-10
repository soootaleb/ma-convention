import { Style } from './builder';
import MCButton from '../components/MCButton';
import { MCColors } from '../enumerations';

export const menuWidth: number = 200;

export const flexColCenter = Style.flex('column')
    .align('center')
    .justify('center')
    .build();

export const flexRowCenter = Style.flex()
    .align('center')
    .justify('center')
    .build();

export const baseShadow = {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
};

export const buttonBackground = (button: MCButton, colors?: MCColors[]) => ({
    backgroundColor: button.state.hover ? colors ? colors[1] : MCColors.MINOR : colors ? colors[0] : MCColors.CATCHY
});
