import os
import math
from PIL import Image

image_path = r"C:\Users\PC\.gemini\antigravity\brain\56ed87a6-dac0-4901-be86-d809a0cdfe87\media__1779516992348.jpg"

if os.path.exists(image_path):
    with Image.open(image_path) as img:
        width, height = img.size
        # Crop region X=370..1024
        crop_x_start = 370
        crop_w = width - crop_x_start
        
        bg_color = img.getpixel((10, 10))
        threshold = 20
        
        # Calculate non-background pixel count for each row in the crop region
        row_densities = []
        for y in range(height):
            fg_count = 0
            for x in range(crop_x_start, width):
                p = img.getpixel((x, y))
                dist = math.sqrt(sum((a - b)**2 for a, b in zip(p, bg_color)))
                if dist > threshold:
                    fg_count += 1
            row_densities.append(fg_count)
            
        print("Row pixel density (Y-coord analysis):")
        print("Y-Range | Peak Foreground Pixel Count in Crop")
        print("---------------------------------------------")
        
        # Print densities in 15-pixel chunks to visualize
        chunk_size = 15
        for i in range(0, height, chunk_size):
            chunk = row_densities[i : i + chunk_size]
            max_fg = max(chunk) if chunk else 0
            print(f"Y={i:03d} to {min(i+chunk_size, height):03d} | Max FG Pixels: {max_fg:3d} / {crop_w}")
            
else:
    print("Image not found!")
