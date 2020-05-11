
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType('webaxis/custom-titre-style2', {
    title: 'Titre - Style 2',
    description: 'Block pour créer titre de la page',
    icon: 'format-image',
    category: 'common',

    // custom attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        subtitle: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }
    },

    edit: ({ attributes, setAttributes }) => {
        const {
            title,
            subtitle,
        } = attributes;

        // custom functions
        function onChangeTitle(newTitle) {
            setAttributes( { title: newTitle } )
        }

        function onChangeSubtitle(newSubtitle) {
            setAttributes( { subtitle: newSubtitle } )
        }


        return ([
            <div className="titre-h1-style2">
                <RichText key="editable"
                          tagName="h2"
                          placeholder="Votre titre"
                          value={ title }
                          onChange={ onChangeTitle } />
                <RichText key="editable"
                          tagName="p"
                          placeholder="Votre sous-titre"
                          value={ subtitle }
                          onChange={ onChangeSubtitle } />
            </div>

        ]);
        
    },

    save: ({ attributes }) => {
        const {
            title,
            subtitle,
        } = attributes;

        return (
            <div className="titre-h1-style2">
                <h2>{ title }</h2>
                <RichText.Content tagName="p" 
                                  value={ subtitle } />
            </div>
        );

    },
    example: {
        attributes: {
            title: 'Votre titre',
            subtitle: 'Votre sous-titre'
        },
    },
});