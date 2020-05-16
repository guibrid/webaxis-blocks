<?php
/**
* Plugin Name: Webaxis Blocks
* Plugin URI: https://www.web-axis.biz/
* Description: Usefull blocks for Wordpress Gutenberg
* Version: 1.0
* Author: Guillaume Briard
**/

function webaxis_gutenberg_blocks()
{
    wp_register_script( 'webaxis-blocks-js',  plugin_dir_url( __FILE__ ) . 'build/index.js', 
        array( 'wp-blocks' , 'wp-block-editor', 'wp-components'));

    register_block_type( 'webaxis/custom-title', array(
        'editor_script' => 'webaxis-blocks-js'
    ) );
}
add_action( 'init', 'webaxis_gutenberg_blocks' );
