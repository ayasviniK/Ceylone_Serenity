# Ceylone Serenity – Travel Package Website

Ceylone Serenity is a mini web development project that showcases a fictional travel-agency-style website built for tourists visiting Sri Lanka. The site is a static frontend powered by HTML/CSS with a simple PHP backend for contact and registration forms.

> This repository already contains a set of existing files; to update it you can sync this folder with the remote and push your changes.

## 🚀 Features

- **Pages:** Home, About Us, Destinations, Packages, Gallery and Contact Us
- **Navigation:** Clean menu and layout for easy browsing across sections
- **Interactive Map:** Embedded Google Maps showing the agency location
- **Forms:** PHP‑handled contact and registration form with basic validation
- **Design:** Tourism‑friendly responsive styling and imagery

## 🛠️ Tech stack

- **Frontend:** HTML5, CSS3, JavaScript (light interactivity)  
- **Backend:** PHP (form handling)  
- **Integration:** Google Maps API for location display

This was developed as a coursework/miniproject to gain hands‑on experience building a realistic website using core web technologies.

## 📁 Updating the repository

To push these files (or any changes) to your GitHub repository at `https://github.com/ayasviniK/Ceylone_Serenity.git`, follow these steps in a shell from the project root:

```bash
# make sure you’re on the correct branch, e.g. main or master
git checkout main

# copy or move your local folder contents into the repo working tree
# (if the workspace is already the repo, skip this step)

# stage everything
git add .

# commit with a descriptive message
git commit -m "Update website files and README"

# push to the remote
git push origin main
```

If the remote already contains files and you have local changes, you may first pull:

```bash
git pull --rebase origin main
```

and then repeat the `add`/`commit`/`push` cycle.

## 📌 Notes

- Ensure PHP is available on your server to handle the form backend.  
- Adjust the Google Maps API key in the HTML before deployment.  

Enjoy developing and deploying your travel package website! Feel free to enhance layout, add animations, or integrate a database as next steps.