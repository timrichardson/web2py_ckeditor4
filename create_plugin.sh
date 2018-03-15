#! /usr/bin/env sh

# paths to add are
# controllers/plugin_ckeditor.py
# modules/plugin_ckeditor.py
# static/plugin_ckeditor
# views/plugin_ckeditor
tar czvf web2py.plugin.ckeditor.w2p --exclude='*.sh' controllers/plugin_ckeditor.py modules/plugin_ckeditor.py static/plugin_ckeditor views/plugin_ckeditor static/ckeditor_config.js
