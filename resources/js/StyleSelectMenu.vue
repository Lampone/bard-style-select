<template>
    <div class="inline-block relative">
        <button
            class="bard-toolbar-button"
            :class="{ active }"
            v-html="button.html"
            v-tooltip="button.text"
            @click="showOptions = !showOptions"
        />
        <div ref="dropdown" class="bard-link-toolbar" v-if="showOptions">
            <button v-for="style in styles" class="block px-2 py-1 border-b-2 w-full text-base text-left" @click.stop="setStyle(style)"
                    :class="{ 'active' : style.class == currentKey }">
                <span class="class-type-label">{{ style.name }}</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "StyleSelectMenu",
    mixins: [ BardToolbarButton ],
    data() {
        return {
            currentKey: null,
            showOptions: false
        };
    },
    computed: {
        styles(){
            return Statamic.$config.get('bard-style-select.styles') || [];
        }
    },
    created() {
        this.bard.$on('link-deselected', () => {
            this.showOptions = false;
        });
    },
    beforeDestroy() {
        this.bard.$off('link-deselected');
    },
    methods: {
        setStyle(style) {
            this.editor.commands.styleSelect({classes: style.classes});

            this.showOptions = false
        },
    }
}
</script>
