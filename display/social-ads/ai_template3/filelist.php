<?php
/**
 * Dynamic file lister for IKEA Ads Preview
 * Called by preview.html to auto-detect CSV, images, video and ad sizes.
 */
header('Content-Type: application/json');
header('Cache-Control: no-cache');

$dir = isset($_GET['dir']) ? $_GET['dir'] : '';

$allowed_exts = [
    'csv'           => ['csv'],
    'header_images' => ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg'],
    'header_video'  => ['mp4', 'webm'],
];

$items = [];

if ($dir === 'ads') {
    // List sub-directories that match NNNxNNN pattern
    $path = __DIR__ . '/ads';
    if (is_dir($path)) {
        foreach (scandir($path) as $entry) {
            if ($entry === '.' || $entry === '..') continue;
            if (is_dir($path . '/' . $entry) && preg_match('/^\d+x\d+$/', $entry)) {
                $items[] = $entry;
            }
        }
        // Sort by area (smallest first)
        usort($items, function($a, $b) {
            list($aw, $ah) = explode('x', $a);
            list($bw, $bh) = explode('x', $b);
            return ($aw * $ah) - ($bw * $bh);
        });
    }
} elseif (isset($allowed_exts[$dir])) {
    $exts = $allowed_exts[$dir];
    $path = __DIR__ . '/' . $dir;
    if (is_dir($path)) {
        foreach (scandir($path) as $entry) {
            if ($entry === '.' || $entry === '..') continue;
            $ext = strtolower(pathinfo($entry, PATHINFO_EXTENSION));
            if (in_array($ext, $exts)) {
                $items[] = $entry;
            }
        }
        natcasesort($items);
        $items = array_values($items);
    }
}

echo json_encode($items);
