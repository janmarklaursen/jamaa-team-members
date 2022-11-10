<?php

/**
 * Plugin Name:       Jamaa Team Members
 * Description:       A team members grid - block.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Jamaa Blocks
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       jamaa-blocks
 *
 * @package           create-block
 */


function teamMembers_block_init()
{
	register_block_type(__DIR__ . '/build/team-members');
	register_block_type(__DIR__ . '/build/team-member');
}
add_action('init', 'teamMembers_block_init');
