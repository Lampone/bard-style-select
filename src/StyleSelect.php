<?php


    namespace Lampone\BardStyleSelect;


    use ProseMirrorToHtml\Marks\Mark;

    class StyleSelect extends Mark
    {
        protected $markType = 'styleSelect';
        protected $tagName = 'span';

        public function matching(): bool {
            return $this->mark->type === $this->markType;
        }

        public function tag(): ?array
        {
            return [
                [
                    'tag' => 'span',
                     'attrs' => [
                         'class' => $this->mark->attrs->classes,
                     ],
                ],
            ];
        }
    }
