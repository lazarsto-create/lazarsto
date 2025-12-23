<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Allianz Crowbar - Banner Display</title>
    <script src="https://kit.fontawesome.com/560446b760.js" crossorigin="anonymous"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            padding: 20px;
            overflow-x: hidden;
            overflow-y: auto;
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 2em;
        }
        .banner-container {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            justify-content: center;
            align-items: flex-start;
            max-width: 100%;
        }
        .banner-item {
            background: transparent;
            border-radius: 8px;
            box-shadow: none;
            padding: 20px;
            text-align: center;
        }
        .banner-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
            padding: 0 10px;
        }
        .banner-item h2 {
            color: #0066cc;
            font-size: 1.2em;
            margin: 0;
        }
        .refresh-btn {
            background: #0066cc;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 8px 16px;
            cursor: pointer;
            font-size: 0.9em;
            transition: background 0.3s;
        }
        .refresh-btn:hover {
            background: #0052a3;
        }
        .banner-frame {
            border: 1px solid #ddd;
            background: transparent;
            display: inline-block;
        }
        iframe {
            display: block;
            border: none;
        }
    </style>
</head>
<body>
    <h1>Allianz Crowbar - HTML5 Banners</h1>
    <div class="banner-container">
        <?php
        $baseDir = __DIR__;
        $folders = glob($baseDir . '/*', GLOB_ONLYDIR);
        $index = 0;
        
        foreach ($folders as $folder) {
            $folderName = basename($folder);
            $indexPath = $folder . '/index.html';
            
            if (file_exists($indexPath)) {
                // Extract dimensions from folder name (e.g., "300x250")
                preg_match('/(\d+)x(\d+)/', $folderName, $matches);
                $width = isset($matches[1]) ? $matches[1] : '300';
                $height = isset($matches[2]) ? $matches[2] : '250';
                $iframeId = 'banner-' . $index;
                
                echo '<div class="banner-item">';
                echo '<div class="banner-header">';
                echo '<h2>' . htmlspecialchars($folderName) . '</h2>';
                echo '<button class="refresh-btn" onclick="refreshBanner(\'' . $iframeId . '\')" title="Refresh banner"><i class="fa-solid fa-rotate-right"></i></button>';
                echo '</div>';
                echo '<div class="banner-frame">';
                echo '<iframe id="' . $iframeId . '" src="' . htmlspecialchars($folderName) . '/index.html" width="' . $width . '" height="' . $height . '" scrolling="no"></iframe>';
                echo '</div>';
                echo '</div>';
                
                $index++;
            }
        }
        ?>
    </div>
    
    <script>
        function refreshBanner(iframeId) {
            const iframe = document.getElementById(iframeId);
            if (iframe) {
                iframe.src = iframe.src;
            }
        }
    </script>
</body>
</html>
