<?php

function mytheme_assets(){
    wp_enqueue_style('mytheme-stylesheet', get_template_directory_uri() . 
    '/dist/assets/css/bundle.css', array(), '1.0.0','all');
}

add_action ('wp_enqueue_scripts', 'mytheme_assets');