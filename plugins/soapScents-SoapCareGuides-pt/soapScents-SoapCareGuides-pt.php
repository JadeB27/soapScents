<?php
/*
 * Plugin Name: SoapScents - Soap Care Guides Post Type
 * Text Domain: soapscents-soapcareguides-pt
 */

add_action( 'init', 'register_soap_care_cpt' );

function register_soap_care_cpt() {
    $labels = array(
        'name'                     => __( 'Soap Care Guides', 'soapscents-soapcareguides-pt' ),
        'singular_name'            => __( 'Soap Care Guide', 'soapscents-soapcareguides-pt' ),
        'add_new'                  => __( 'Add New', 'soapscents-soapcareguides-pt' ),
        'add_new_item'             => __( 'Add New Soap Care Guide', 'soapscents-soapcareguides-pt' ),
        'edit_item'                => __( 'Edit Soap Care Guide', 'soapscents-soapcareguides-pt' ),
        'new_item'                 => __( 'New Soap Care Guide', 'soapscents-soapcareguides-pt' ),
        'view_item'                => __( 'View Soap Care Guide', 'soapscents-soapcareguides-pt' ),
        'view_items'               => __( 'View Soap Care Guides', 'soapscents-soapcareguides-pt' ),
        'search_items'             => __( 'Search Soap Care Guides', 'soapscents-soapcareguides-pt' ),
        'not_found'                => __( 'No Soap Care Guides found.', 'soapscents-soapcareguides-pt' ),
        'not_found_in_trash'       => __( 'No Soap Care Guides found in Trash.', 'soapscents-soapcareguides-pt' ),
        'all_items'                => __( 'All Soap Care Guides', 'soapscents-soapcareguides-pt' ),
        'archives'                 => __( 'Soap Care Guide Archives', 'soapscents-soapcareguides-pt' ),
        'attributes'               => __( 'Soap Care Guide Attributes', 'soapscents-soapcareguides-pt' ),
        'insert_into_item'         => __( 'Insert into Soap Care Guide', 'soapscents-soapcareguides-pt' ),
        'uploaded_to_this_item'    => __( 'Uploaded to this Soap Care Guide', 'soapscents-soapcareguides-pt' ),
        'featured_image'           => __( 'Featured Image', 'soapscents-soapcareguides-pt' ),
        'set_featured_image'       => __( 'Set featured image', 'soapscents-soapcareguides-pt' ),
        'remove_featured_image'    => __( 'Remove featured image', 'soapscents-soapcareguides-pt' ),
        'use_featured_image'       => __( 'Use as featured image', 'soapscents-soapcareguides-pt' ),
        'menu_name'                => __( 'Soap Care Guides', 'soapscents-soapcareguides-pt' ),
        'filter_items_list'        => __( 'Filter Soap Care Guides list', 'soapscents-soapcareguides-pt' ),
        'items_list_navigation'    => __( 'Soap Care Guides list navigation', 'soapscents-soapcareguides-pt' ),
        'items_list'               => __( 'Soap Care Guides list', 'soapscents-soapcareguides-pt' ),
        'item_published'           => __( 'Soap Care Guide published.', 'soapscents-soapcareguides-pt' ),
        'item_updated'             => __( 'Soap Care Guide updated.', 'soapscents-soapcareguides-pt' ),
    );

    $args = array(
        'labels'                => $labels,
        'description'           => __( 'Educational guides on soap storage, usage, and care.', 'soapscents-soapcareguides-pt' ),
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_rest'          => true,
        'menu_icon'             => 'dashicons-admin-tools',
        'capability_type'       => 'post',
        'supports'              => array( 'title', 'editor', 'thumbnail', 'revisions' ),
        'has_archive'           => true,
        'rewrite'               => array( 'slug' => 'soap-care' ),
    );

    register_post_type( 'soap_care', $args );
}