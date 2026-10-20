import shutil
import os
import glob

dest_dir = "src/assets/images"
os.makedirs(dest_dir, exist_ok=True)

brain_dir = r"C:\Users\ADMIN\.gemini\antigravity\brain\73d2c859-9225-4ed3-bb76-2e807f1a9aa2"

# Find generated images matching names in the brain folder
classroom_files = glob.glob(os.path.join(brain_dir, "preschool_classroom_*.png"))
play_area_files = glob.glob(os.path.join(brain_dir, "preschool_play_area_*.png"))
art_activity_files = glob.glob(os.path.join(brain_dir, "preschool_art_activity_*.png"))

if classroom_files:
    shutil.copy(classroom_files[0], os.path.join(dest_dir, "classroom.png"))
    print(f"Copied classroom image to {dest_dir}/classroom.png")
else:
    print("Classroom image not found.")

if play_area_files:
    shutil.copy(play_area_files[0], os.path.join(dest_dir, "play_area.png"))
    print(f"Copied play area image to {dest_dir}/play_area.png")
else:
    print("Play area image not found.")

if art_activity_files:
    shutil.copy(art_activity_files[0], os.path.join(dest_dir, "art_activity.png"))
    print(f"Copied art activity image to {dest_dir}/art_activity.png")
else:
    print("Art activity image not found.")
