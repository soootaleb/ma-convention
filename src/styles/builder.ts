/**
 * This class is a tool to build CSS in JS
 * It leverages method chaining to expose a clean interface to specify components style
 * 
 * @method build Object returns the core style object to apply on components
 * 
 * TODO: Decide wether the core style object is immutable or not:
 *  - Each method can return a new object using spread operator to get the previous object properties
 *  - Each method can alter the core object properties
 * 
 * For the moment, we try to alter the core object.
 * 
 * TODO: We could use the Proxy mechanics
 * 
 * TODO: Increase resiliance by verifying that called methods are adapted (e.g calling justify() after flex())
 */
export class Style {
    
    private style;

    constructor(style: Object) {
        this.style = style;
    }

    public static flex(direction: string = 'row'): Style {
        return new Style({
            display: 'flex',
            flexDirection: direction
        });
    }

    public static row(): Style {
        return new Style({
            width: '100%'
        });
    }

    public width(value: number | string): Style {
        this.style.width = value;
        return this;
    }

    public justify(where: string): Style {
        this.style.justifyContent = where;
        return this;
    }

    public align(where: string): Style {
        this.style.alignItems = where;
        return this;
    }

    public expand(): Style {
        this.style.flex = 1;
        return this;
    }

    public padding(value: number | string): Style {
        this.style.padding = value;
        return this;
    }

    public center(): Style {
        return this.justify('center').align('center');
    }

    public build(): Object {
        return this.style;
    }
}
