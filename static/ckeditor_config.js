CKEDITOR.editorConfig = function( config ) {
  config.toolbarGroups = [
    { name: 'styles', groups: [ 'styles' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
    { name: 'insert', groups: [ 'insert' ] },
    '/',
    { name: 'links', groups: [ 'links' ] },
    { name: 'forms', groups: [ 'forms' ] },
    { name: 'tools', groups: [ 'tools' ] },
    { name: 'others', groups: [ 'others' ] },
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
    { name: 'colors', groups: [ 'colors' ] },
    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
    { name: 'about', groups: [ 'about' ] }
  ];

  config.removeButtons = 'Subscript,Superscript,Cut,Anchor,Maximize,Strike,RemoveFormat,About,Scayt,Styles';

};
