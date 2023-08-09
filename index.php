<?php
/*
*   This template for displaying the header
*/

use JetBrains\PhpStorm\Language;

?>


<?php get_header( ); ?>

<?php if(have_posts( )) { ?>
    <?php while(have_posts(  )) { ?>
        <?php the_post();?>
        <h2>
            <a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"><?php the_title()?></a>
        </h2>
        <div>
           <?php mytheme_post_meta();?>
        </div>
        <div>
            <?php the_excerpt(  ); ?>
        </div>
        <?php mytheme_readmore_link(); ?>
    <?php } ?>
    <?php the_posts_pagination( )?>
<?php } else { ?>
    <p><?php esc_html_e('Sorry, no posts matched your criteria.','mytheme');?></p>
    <?php } ?>
    
    <?php

    $comments = 1;

    printf(_n('one comment','$s comments',$comments,'mytheme'),$comments);
    
    ?>


<?php get_footer(); ?>



