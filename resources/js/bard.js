import StyleSelect from "./StyleSelect";
import StyleSelectMenu from "./StyleSelectMenu";

Statamic.booting(() => {

    const styles = Statamic.$config.get('bard-style-selects.styles') || [];

    // filter styles for block config and create block attr change
    // issues/2340
    Statamic.$bard.extend(({ mark }) => mark(new StyleSelect(styles)));

    Statamic.$bard.buttons((buttons) => {
        const indexOfStyleselect = buttons.indexOf("styleselect");
        if(indexOfStyleselect === -1){
            return;
        }
        buttons.splice(indexOfStyleselect, 1, {
            name: "style-select",
            text: "Styleauswahl",
            command: "styleSelect",
            args: { color: "#fff" },
            icon: "paint-brush",
            component: StyleSelectMenu,
        });
    });
/*    Statamic.$bard.buttons(() => ({
        name: "style-select",
        text: "Styleauswahl",
        command: "styleSelect",
        args: { color: "#fff" },
        icon: "paint-brush",
        component: StyleSelectMenu,
        condition: config => config.buttons.includes('styleselect'),
    }));*/
});
