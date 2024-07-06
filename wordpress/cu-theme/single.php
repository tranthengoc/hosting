<?php get_header(); ?>
<style type="text/css">
/*多说CSS,如果不用多说，那就删除这样的所有样式吧*/
#ds-thread{padding:20px 0 18px}#ds-wrapper #ds-reset .ds-dialog-footer,#ds-thread #ds-reset .ds-meta,.ds-powered-by,.ds-toolbar-buttons,.ds-post-likes,.ds-post-repost,.ds-post-report,.ds-icon-reply,#ds-thread #ds-reset .ds-toolbar,#ds-thread #ds-reset ul.ds-comments-tabs .ds-service-icon,#ds-indicator{display:none!important}#ds-thread #ds-reset .ds-login-buttons{font-size:15px}#ds-wrapper #ds-reset button{background:#fff;border:1px solid #ddd}.ds-social-links{padding-left:.2em!important}#ds-reset .ds-gradient-bg,#ds-thread #ds-reset .ds-textarea-wrapper{background:none!important}#ds-thread #ds-reset .ds-post-options{border:none!important;border-top:1px solid #ddd!important;margin-right:0!important}#ds-thread #ds-reset .ds-post-button{top:10px!important;background:#fff!important;box-shadow:none!important;border:1px solid #ddd!important;right:auto!important;color:#777!important;font-weight:normal!important;outline:0}#ds-thread #ds-reset .ds-post-button:hover{color:#444!important}#ds-thread #ds-reset .ds-textarea-wrapper textarea{height:100px!important}#ds-reset .ds-rounded-top,#ds-thread #ds-reset li.ds-tab a,#ds-thread #ds-reset #ds-bubble,#ds-reset .ds-avatar img,#ds-wrapper #ds-reset .ds-control-group input,#ds-wrapper #ds-reset button,#ds-wrapper #ds-reset .ds-dialog-inner,#ds-thread #ds-reset .ds-post-button{border-radius:0!important;border-radius:0!important;-webkit-border-radius:0!important;-webkit-border-radius:0!important}#ds-thread #ds-reset li.ds-tab a:hover{background:#fff!important}#ds-thread #ds-reset li.ds-tab a.ds-current{background:#fff!important;border:none!important;border-bottom:2px solid #333!important}#ds-thread #ds-reset li.ds-tab a{padding:14px;font-size:17px}#ds-thread #ds-reset .ds-comments-info{padding-top:15px!important;padding-bottom:15px!important;line-height:1!important}#ds-thread #ds-reset .ds-sort{top:16px!important}#ds-thread #ds-reset .ds-post-options{height:50px!important}#ds-thread #ds-reset .ds-comment-body{padding-left:75px!important}#ds-thread #ds-reset .ds-post-self{padding-top:20px!important;padding-bottom:20px!important}#ds-reset .ds-avatar img{box-shadow:none!important;padding:2px 0 0 0}#ds-thread #ds-reset #ds-bubble{border:1px solid #ddd!important;box-shadow:none!important}#ds-thread #ds-reset .ds-highlight{color:#000!important}#ds-thread #ds-reset .ds-replybox{padding-left:75px!important}#ds-thread #ds-reset .ds-inline-replybox .ds-avatar img{width:auto!important;height:auto!important}#ds-thread #ds-reset .ds-post-self{padding-left:0!important}#ds-thread #ds-reset .ds-inline-replybox{margin-top:27px!important;margin-left:-75px!important}#ds-thread #ds-reset a.ds-comment-context{border:1px solid #e3edf3;background:#f7fafb;padding:3px 0 3px 3px;color:#555!important;margin-right:5px!important;font-size:.8em}#ds-thread #ds-reset .ds-comment-header{padding-bottom:7px;font-size:14px}#ds-thread #ds-reset .ds-sort a{font-size:14px}#ds-thread #ds-reset .ds-sort a.ds-current,#ds-thread #ds-reset .ds-sort a:active{color:#555}#ds-thread #ds-reset .ds-user-name{font-size:15px!important}#ds-thread #ds-reset .ds-comment-footer{padding-top:5px}#ds-thread #ds-reset li.ds-post-placeholder{padding:23px 0!important;font-size:15px!important}#ds-thread #ds-reset .ds-sync{top:10px}.ds-login-buttons{padding-bottom:15px!important}#ds-thread #ds-reset .ds-textarea-wrapper textarea,#ds-thread #ds-reset .ds-textarea-wrapper .ds-hidden-text{font-size:15px;line-height:1.72}#ds-thread #ds-reset .ds-comment-body p{font-size:15px;line-height:1.72}#ds-wrapper #ds-reset .ds-control-group input{line-height:1.8em;font-size:15px;box-shadow:none}#ds-wrapper #ds-reset .ds-control-group label{top:13px}#ds-wrapper #ds-reset button{font-size:14px}#ds-wrapper #ds-reset .ds-dialog-inner{box-shadow:none;background:#fff;border:1px solid #ddd}.ds-icons-32 a{width:auto!important;height:auto!important;background:none!important;text-indent:0!important}#ds-wrapper #ds-reset .ds-icons-32{height:auto!important}#ds-wrapper #ds-reset .ds-icons-32 a{font-size:14px;line-height:1.7em;margin:0 14px 1px 0}#ds-wrapper #ds-reset .ds-dialog-close{top:13px}#ds-thread #ds-reset .ds-login-buttons .ds-more-services{color:#777!important}#ds-thread #ds-reset .ds-replybox{margin-top:30px}
</style>
<article class="mod-post mod-post__type-post">
	<header>
		<h1 class="mod-post__title"><?php the_title(); ?></h1>
	</header>
	<?php while( have_posts() ): the_post(); $p_id = get_the_ID(); ?>
	<div class="mod-post__entry wzulli"><?php the_content(); ?></div>
	<?php wp_link_pages('before=<div class="posts-nav"><span> — 文章分页：</span>&after=</div>'); ?>
	<?php endwhile; ?>
	<div class="mod-post__meta">
	<div>
	  <div>— 于 <time datetime="<?php the_time('Y年m月d日 h:i:s'); ?>"><?php the_time('Y年m月d日'); ?></time>，<span><?php echo count_words ($text); ?></span>；</div>
	  <div>— 文内使用到的标签：<span class="mod_tag"><?php the_tags('', ' ', ''); ?></span></div>
	</div>
	</div>
	<ul class="sxwk">
		<li><?php previous_post_link( '下一篇：%link', '%title', true );?></li>
		<li><?php next_post_link( '上一篇：%link', '%title', true );?></li>
	</ul>
</article>
<section class="mod-comment">
	<?php comments_template(); ?>
</section>
<?php get_footer(); ?>