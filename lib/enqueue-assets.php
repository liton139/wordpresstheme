<?php

function mytheme_assets(){
    wp_enqueue_style('mytheme-stylesheet', get_template_directory_uri() . 
    '/dist/assets/css/bundle.css', array(), '1.0.0','all');

    wp_enqueue_script('mytheme-scripts', get_template_directory_uri() .
    '/dist/assets/js/bundle.js', array(), true);
}

add_action ('wp_enqueue_scripts', 'mytheme_assets');

function mytheme_admin_assets(){
    wp_enqueue_style('mytheme-admin-stylesheet', get_template_directory_uri() . 
    '/dist/assets/css/admin.css', array(), '1.0.0','all');
}

add_action ('admin_enqueue_scripts', 'mytheme_assets');