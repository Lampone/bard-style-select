const { core: commands } = Statamic.$bard.tiptap;

export default class StyleSelect {
    constructor(styles) {
        this.styles = styles;
    }

    name() {
        return "styleSelect";
    }

    schema() {
        return {
            attrs: {
                classes: {
                    default: null,
                },
            },
            parseDOM: [{
                tag: 'span[data-style-select]',
                getAttrs: (dom) => ({
                    classes: dom.getAttribute('data-style-select'),
                }),
            }],
            toDOM: (mark) => {
                let style = _.find(this.styles, {classes: mark.attrs.classes});
                if(style){
                    style = style.cp_style;
                }else {
                    style = null;
                }
                return [
                    "span",
                    {
                        'data-style-select': mark.attrs.classes,
                        style: style
                    }
            ]},
        };
    }

    commands({ type, updateMark }) {
        return (attrs) => updateMark(type, attrs);
    }

    pasteRules({ type }) {
        return [];
    }

    plugins() {
        return [];
    }
}
