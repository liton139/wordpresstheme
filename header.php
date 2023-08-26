<!DOCTYPE html>
<html lang="<?php language_attributes(); ?>" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head( ); ?>
</head>
<body <?php body_class("logged-in admin-bar customize-support"); ?>>
    
    <header role ="banner" class="u-margin-bottom-40">
        <div class="c-header">
            <div class="o-container u-flex u-align-justify u-align-middle">
                <div class="c-header__logo">
                    <a class="c-header__blogname" href="<?php echo esc_url(home_url('/'));?>">
                    <?php esc_html(bloginfo('name'));?>
                    </a>
                </div>
                <?php get_search_form( true );?>
            </div>
        </div>
    </header>

    <div id="content">