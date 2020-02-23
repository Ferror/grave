<html>
<?php get_header(); ?>
<body>
    <div class="main">
        <div class="main__header">
            <h1>Custom header</h1>
        </div>
    </div

    <div id="ttr_main" class="row">
        <div id="ttr_content" class="col-lg-8 col-sm-8 col-md-8 col-xs-12">

            <div class="row">
                <?php if (have_posts()) :  ?>
                    <?php while (have_posts()) : ?>
                        <?php the_post(); ?>

                        <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                            <h1><?php the_title(); ?></h1>
                            <h4>Posted on <?php the_time('F jS, Y') ?></h4>
                            <p><?php the_content(__('(more...)')); ?></p>
                        </div>
                    <?php endwhile; ?>
                <?php else : ?>
                    <p>
                        <?php _e('Sorry, no posts matched your criteria.'); ?>
                    </p>
                <?php endif; ?>
            </div>
        </div>
    </div>
</body>
</html>
