<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=<?php bloginfo( 'charset' );?>" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<?php include( 'seo.php' ); ?>
<link rel="stylesheet" href="<?php bloginfo( 'stylesheet_url' ); ?>" media="screen" type="text/css">
<link href="<?php bloginfo( 'template_url' ); ?>/images/favicon.ico" rel="icon">
<?php
	if ( is_singular() && get_option( 'thread_comments' ) ) wp_enqueue_script( 'comment-reply' );
	wp_enqueue_script( 'jquery' );
	wp_head();
?>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/jquery.js"></script>
</head>
<body>
<header class="mod-head">
	<h1 class="mod-head__title"><a href="<?php echo get_option('home'); ?>"><?php bloginfo('name'); ?></a></h1>
	<div class="mod-head__logo">
		<a href="<?php echo get_option('home'); ?>">
			<img class="avatar" src="<?php bloginfo( 'template_url' ); ?>/images/avatar.png" alt="" width="26" height="26">
		</a>
		<?php if (get_posts_count_from_last_24h() != '0') { ?>
			<div class="zjgx"><?php echo get_posts_count_from_last_24h(); ?></div>
		<?php } else { } ?>
	</div>
	<nav class="mod-head__nav">
	<?php 
		$top_nav = wp_nav_menu( array( 'theme_location'=>'main', 'fallback_cb'=>'', 'container'=>'', 'menu_class'=>'mod-head__ul', 'echo'=>false, 'after'=>'<span>·</span>' ) );
		$top_nav = str_replace( "<span>·</span></li>\n</ul>", "</li>\n</ul>", $top_nav );
		echo $top_nav;
	?>
	</nav>
	<a id="right-panel-link" href="#right-panel"></a>
	<div id="right-panel" class="panel">
	<h3 class="rightnavh3">Menu</h3>
		<?php 
			$top_nav = wp_nav_menu( array( 'theme_location'=>'main', 'fallback_cb'=>'', 'container'=>'', 'menu_class'=>'ymod-head', 'echo'=>false, 'after'=>'' ) );
			$top_nav = str_replace( "</li>\n</ul>", "</li>\n</ul>", $top_nav );
			echo $top_nav;
		?>
	<button id="close-panel-bt">X Close</button>
	</div>
	<script src="<?php bloginfo( 'template_url' ); ?>/js/slider.js"></script>
	<script>$('#right-panel-link').panelslider({side: 'right', duration: 200 });$('#close-panel-bt').click(function() {$.panelslider.close();});</script>
</header>