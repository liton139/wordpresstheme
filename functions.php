<?php
/*
*** MYthem Function
*/

//them Title 
//add_theme_support('title-tag');
require_once('lib/customize.php');
require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');
require_once('lib/sidebars.php');
require_once('lib/theme-support.php');
require_once('lib/navigation.php');
require_once('lib/include-plugins.php');  
require_once('lib/comment-callback.php');








function _themename_handle_delete_post() {
    if (isset($_GET['action']) && $_GET['action'] === '_themename_delete_post') {
        if(!isset($_GET['nonce']) || !wp_verify_nonce( $_GET['nonce'], '_themename_delete_post_' . $_GET['post'] )){
            return;
        }
        $post_id = isset($_GET['post']) ? intval($_GET['post']) : 0;
        $nonce_action = '_themename_delete_post_' . $post_id;

        if ($post_id <= 0) {
            // Invalid or missing post ID, handle the error as needed.
            wp_safe_redirect(home_url());
            exit;
        }

        $post = get_post($post_id);

        if (empty($post) || !current_user_can('delete_post', $post_id)) {
            // Either the post doesn't exist or the user doesn't have permission to delete it.
            // You can add error handling or redirect to an appropriate page.
            wp_safe_redirect(home_url());
            exit;
        }

        // Move the post to trash
        wp_trash_post($post_id);

        // Redirect back to the home page or another appropriate page.
        wp_safe_redirect(home_url());
        exit;
    }
}

add_action('init', '_themename_handle_delete_post');
?>